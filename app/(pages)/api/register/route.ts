import { NextRequest, NextResponse } from 'next/server'
import mysql from 'mysql2/promise'

// MySQL接続設定
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'yourdatabase',
}

export async function POST(req: NextRequest) {
  const { name, email, acceptTerms, gender } = await req.json()

  try {
    const connection = await mysql.createConnection(dbConfig)
    const query = `INSERT INTO users (name, email, acceptTerms, gender) VALUES (?, ?, ?, ?)`
    const values = [name, email, acceptTerms, gender]
    await connection.execute(query, values)
    await connection.end()

    return NextResponse.json({ message: "User registered successfully" }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Error registering user" }, { status: 500 })
  }
}
