CREATE TABLE pedidos(
    id SERIAL PRIMARY KEY,
    fecha DATE,
    hora TEXT,
    numerocel INT,
    nombre VARCHAR(120),
    msj TEXT,
    email TEXT

    
);



ALTER TABLE pedidos
    ADD PRIMARY KEY (id);


