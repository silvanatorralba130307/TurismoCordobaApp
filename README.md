# Turismo Córdoba

## Descripción

**Turismo Córdoba** es una aplicación móvil desarrollada con React Native y Expo. Su objetivo es presentar distintos destinos turísticos de la provincia de Córdoba mediante una interfaz simple, visual y reutilizable.

Este proyecto corresponde a la **Unidad I del Proyecto ABP** y representa la primera base de la aplicación. En las próximas unidades se podrán incorporar nuevas funcionalidades a medida que se trabajen nuevos contenidos.

## Integrantes

- Torralba Silvana Beatriz

## Tecnologías utilizadas

- React Native
- Expo
- JavaScript

## Estado actual

**Unidad I – Primera versión implementada.**

La aplicación cuenta con una pantalla principal que muestra destinos turísticos de Córdoba mediante tarjetas reutilizables. La información utilizada es estática y se encuentra almacenada en un archivo local.

## Requisitos de la Unidad I

La versión actual incluye:

- Pantalla principal relacionada con la temática elegida.
- Uso de `View`.
- Uso de `Text`.
- Uso de `Image`.
- Uso de `ScrollView`.
- Datos estáticos.
- Componentes reutilizables.
- Comunicación entre componentes mediante props.
- Un componente reutilizable para representar los elementos de la aplicación.

## Componente reutilizable

### `DestinationCard`

El componente `DestinationCard` representa cada destino turístico.

Recibe mediante **props**:

- `name`: nombre del destino.
- `region`: región o valle al que pertenece.
- `description`: descripción breve.
- `image`: imagen del destino.

Esto permite reutilizar la misma estructura visual con datos diferentes sin repetir código.

## Features y estado

| Feature | Estado |
|---|---|
| Pantalla principal | ✅ Implementado |
| Listado de destinos | ✅ Implementado |
| Imágenes locales | ✅ Implementado |
| Scroll vertical | ✅ Implementado |
| Datos estáticos | ✅ Implementado |
| Componente reutilizable | ✅ Implementado |
| Comunicación mediante props | ✅ Implementado |
| Pantalla de detalle | ⏳ Previsto |
| Buscador | ⏳ Previsto |
| Filtros por región | ⏳ Previsto |
| Favoritos | ⏳ Previsto |
| Mapa | ⏳ Previsto |
| Geolocalización | ⏳ Previsto |

## Estructura principal

```text
TurismoCordobaApp/
├── assets/
│   └── images/
├── components/
│   └── DestinationCard.js
├── data/
│   └── destinations.js
├── App.js
├── app.json
├── index.js
├── package.json
└── README.md
```

## Instalación y ejecución

1. Abrir una terminal dentro de la carpeta del proyecto.
2. Instalar las dependencias:

```bash
npm install
```

3. Iniciar Expo:

```bash
npx expo start
```

4. Escanear el código QR con Expo Go o ejecutar la aplicación desde un emulador compatible.

## Próximas mejoras

En futuras unidades se podrán agregar navegación entre pantallas, detalle de destinos, favoritos, búsqueda, filtros y otras funcionalidades de acuerdo con los contenidos trabajados durante la cursada.
