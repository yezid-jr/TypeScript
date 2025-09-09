# TypeScript 💻.TS

## ¿Qué es TypeScript?

[TypeScript](https://www.typescriptlang.org/) es un lenguaje de programación de código abierto desarrollado por Microsoft. Es un **superset de JavaScript**, lo que significa que todo código JavaScript válido también es válido en TypeScript, pero añade características adicionales como:

- Tipado estático
- Interfaces y tipos personalizados
- Clases y herencia modernas
- Mejor autocompletado y herramientas de desarrollo

TypeScript se compila a JavaScript, por lo que puede ejecutarse en cualquier navegador, servidor o entorno que soporte JS.

---

## 🛠️ ¿Cómo crear un entorno de desarrollo en TypeScript?

Aquí tienes una guía rápida para empezar un proyecto desde cero:

### 1. Instalar Node.js y npm

Si aún no los tienes instalados, en Ubuntu puedes hacerlo con:

```bash
sudo apt update
sudo apt install nodejs npm
```
Verifica que estén instalados con:

```bash
node -v //debería mostrarte la versión que está instalada ejemplo: v22.16.0
npm -v
```
### 2. Crear un nuevo directorio para tu proyecto y entrar en él:
mkdir mi-proyecto-typescript
cd mi-proyecto-typescript

# 3. Inicializar un proyecto npm:
npm init -y

# Esto crea un archivo package.json con configuración por defecto.

# 4. Instalar TypeScript como dependencia de desarrollo:
npm install typescript --save-dev

# 5. Crear un archivo de configuración de TypeScript (tsconfig.json):
npx tsc --init

# Esto genera un tsconfig.json donde puedes personalizar la compilación.

# 6. Crear un directorio para tu código fuente y un archivo TypeScript:
mkdir src
touch src/index.ts

# 7. Escribir tu primer archivo TypeScript:
# Abre src/index.ts y escribe el siguiente código:

# const saludo: string = "Hola, TypeScript!";
# console.log(saludo);

# 8. Compilar el código TypeScript a JavaScript:
npx tsc

# Esto genera un archivo JavaScript equivalente (por defecto en el mismo directorio, a menos que configures otra carpeta en tsconfig.json).

# 9. Ejecutar el archivo compilado con Node.js:
node src/index.js

# ----------------------------------------
# Curiosidades sobre TypeScript
# ----------------------------------------

# - Fue creado por Microsoft en 2012.
# - Angular (framework de Google) está completamente escrito en TypeScript.
# - Es compatible con React, Vue, Node.js, entre otros.
# - Tiene una curva de aprendizaje suave para quienes ya conocen JavaScript.
# - Es uno de los lenguajes más amados según encuestas de Stack Overflow.
# - Puedes usarlo de forma incremental en proyectos JavaScript existentes.

# ----------------------------------------
# Recursos útiles
# ----------------------------------------

# - Documentación oficial: https://www.typescriptlang.org/docs/
# - Playground en línea: https://www.typescriptlang.org/play
# - Curso gratuito en YouTube: https://www.youtube.com/results?search_query=typescript+curso
