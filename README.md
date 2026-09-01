# Turismo Córdoba

## Descripción del proyecto

**Turismo Córdoba** es una aplicación móvil desarrollada con React Native y Expo cuyo objetivo es brindar información sobre distintos destinos turísticos de la provincia de Córdoba.

La aplicación busca facilitar a los usuarios el descubrimiento de lugares turísticos, permitiéndoles consultar información básica de diferentes destinos y, a medida que avance el proyecto, incorporar nuevas funcionalidades como búsqueda, filtros, detalle de destinos y favoritos.

El proyecto se desarrollará de manera incremental durante la cursada, incorporando nuevas funcionalidades de acuerdo con los contenidos trabajados en cada unidad.

---

## Problemática

Córdoba cuenta con una gran variedad de destinos turísticos distribuidos en diferentes regiones y valles.

La aplicación busca reunir información básica sobre estos destinos en un único lugar, ofreciendo al usuario una forma sencilla de conocer diferentes opciones y, progresivamente, herramientas que faciliten la búsqueda y selección de lugares de interés.

---

## Integrantes

- Torralba Silvana Beatriz

---

## Tecnologías utilizadas

- React Native
- Expo
- JavaScript

---

## Estado actual del proyecto

### Unidad I – Primera versión implementada

Actualmente la aplicación permite consultar un listado de destinos turísticos de la provincia de Córdoba.

Cada destino se presenta mediante una tarjeta que contiene:

- Imagen.
- Nombre del destino.
- Región o valle.
- Descripción breve.

En esta primera versión los datos utilizados son estáticos.

Actualmente se encuentran incluidos los siguientes destinos:

- La Cumbrecita.
- Villa General Belgrano.
- Mina Clavero.
- Villa Carlos Paz.

---

# Features del proyecto

Las Features representan funcionalidades concretas que permiten al usuario realizar una acción o consultar información dentro de la aplicación.

| Feature | Estado |
|---|---|
| Consultar destinos turísticos | ✅ Implementado |
| Consultar el detalle de un destino | ⏳ Previsto |
| Buscar destinos por nombre | ⏳ Previsto |
| Filtrar destinos por región o valle | ⏳ Previsto |
| Agregar destinos a favoritos | ⏳ Previsto |
| Consultar destinos favoritos | ⏳ Previsto |

---

## Feature implementada actualmente

### Consultar destinos turísticos

Permite al usuario visualizar un listado de diferentes destinos turísticos de la provincia de Córdoba.

Para cada destino se muestra:

- Imagen.
- Nombre.
- Región o valle.
- Descripción.

Esta Feature constituye la funcionalidad principal implementada durante la Unidad I.

---

# Contenidos técnicos implementados – Unidad I

Para desarrollar la primera versión de la aplicación se utilizaron los contenidos trabajados durante la Unidad I.

### View

Se utiliza para organizar y agrupar los distintos elementos visuales de la pantalla.

### Text

Se utiliza para mostrar:

- Nombre de la aplicación.
- Títulos.
- Nombre de los destinos.
- Región.
- Descripciones.

### Image

Se utiliza para representar visualmente cada destino turístico mediante una fotografía.

### ScrollView

Permite realizar desplazamiento vertical para visualizar todos los destinos disponibles.

### Datos estáticos

La información de los destinos se encuentra almacenada localmente en:

`data/destinations.js`

En esta primera versión no se utiliza una base de datos ni una API externa.

### Componentes reutilizables

Se creó el componente:

`DestinationCard`

Este componente se reutiliza para representar todos los destinos turísticos sin necesidad de repetir la estructura de código.

### Comunicación mediante props

El componente `DestinationCard` recibe información desde el componente principal mediante props.

Las props utilizadas son:

- `name`
- `region`
- `description`
- `image`

Por ejemplo:

```javascript
<DestinationCard
  name={destination.name}
  region={destination.region}
  description={destination.description}
  image={destination.image}
/>