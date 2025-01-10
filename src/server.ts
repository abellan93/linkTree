// server.ts
import express from 'express';
import 'dotenv/config';
import type { Request, Response } from 'express';
import router from './router.js';
import { connectDB } from './config/db.js';

connectDB();

const app = express();

app.use(express.json());
app.use('/', router)


export default app;