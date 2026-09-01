# GUÍA PARA DEJAR LA ENTREGA LISTA

## 1. Abrir el proyecto en Visual Studio Code
- Descomprimir `TurismoCordobaApp.zip`.
- Abrir Visual Studio Code.
- Ir a Archivo > Abrir carpeta.
- Seleccionar la carpeta `TurismoCordobaApp`.

## 2. Instalar dependencias
Abrir Terminal > Nuevo terminal y ejecutar:

```bash
npm install
```

Si PowerShell bloquea npm, probar:

```bash
npm.cmd install
```

## 3. Ejecutar la app
Ejecutar:

```bash
npx expo start
```

o, si Windows lo requiere:

```bash
npx.cmd expo start
```

Abrir Expo Go y escanear el QR.

## 4. Antes de entregar
Editar `README.md` y reemplazar:
`Completar nombre y apellido del/de los integrante/s.`

por los nombres reales.

## 5. Crear repositorio en GitHub
Crear un repositorio llamado, por ejemplo:

`TurismoCordobaApp`

No agregar README desde GitHub porque el proyecto ya incluye uno.

## 6. Subir desde VS Code
Dentro de la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Entrega Unidad I - Proyecto ABP Turismo Cordoba"
git branch -M main
git remote add origin URL_DEL_REPOSITORIO
git push -u origin main
```

Reemplazar `URL_DEL_REPOSITORIO` por el enlace que muestra GitHub.

## 7. Entrega
Copiar el enlace del repositorio y pegarlo en el aula virtual.

## Checklist final
- [ ] La app abre sin errores.
- [ ] Se ven los cuatro destinos.
- [ ] Se puede hacer scroll.
- [ ] Las imágenes aparecen.
- [ ] README tiene los integrantes.
- [ ] El repositorio es accesible.
- [ ] El enlace entregado abre correctamente.
