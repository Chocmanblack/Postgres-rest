// manejar la logic de las solicitudes
// puedo pegar las funciones de mis rutas aqui

import { pool } from "../db.js";

export const getUsers = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM users');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener usuarios');
    }
};


export const getUser = async (req, res) => {
    const { id } = req.params
    try {
        const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id])
        if (rows.length === 0) {
            return res.status(404).json({ message: "User not found, Espanglish" })
        }

        res.json(rows[0])
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al obtener usuario');

    }
};


export const createUser = async (req, res) => {
    const { name, email } = req.body
    try {
        // console.log(data);
        const { rows } = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email])
        // console.log(result);
        return res.json(rows[0]);

    } catch (error) {
        console.log(error);

        if (error?.code === '23505') {
            return res.status(409).json({ message: 'Email already exists' })
        }

        return res.status(500).json({ message: 'Internal server error' })
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const { rowCount } = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
        if (rowCount === 0) {
            return res.status(404).json({ message: "User Not Found" });
        }
        return res.sendStatus(204);
    } catch (err) {
        console.error('Error al eliminar usuario:', err);
        res.status(500).send('Error al eliminar usuario');
    }
};


export const updateUser = async (req, res) => {
    const { id } = req.params
    const { name, email } = req.body;
    try {
        const { rows, rowCount } = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, id])
        if (rowCount === 0) {
            return res.status(404).json({ message: "User Not Found" });
        }
        return res.json(rows[0]);

    } catch (error) {
        console.log('Error al actualizar los datos: ', error);
        res.status(500).json([{ message: "Error al actualizar los datos." }])
    }

};