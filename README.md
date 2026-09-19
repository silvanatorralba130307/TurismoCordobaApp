# Turismo Córdoba App

## Descripción del proyecto

Turismo Córdoba App es una aplicación móvil orientada a brindar información sobre distintos destinos turísticos de la provincia de Córdoba.

La aplicación busca facilitar la consulta de lugares turísticos, permitiendo al usuario conocer destinos destacados, buscar destinos por nombre, consultar información detallada, conocer lugares para visitar y actividades disponibles, consultar el clima actual y marcar destinos como favoritos.

El proyecto se desarrolla de manera incremental durante la cursada, incorporando nuevas funcionalidades a medida que se trabajan nuevos contenidos.

## Integrante

- Silvana Torralba

## Features del proyecto

| Feature | Estado |
|---|---|
| Consultar listado de destinos turísticos | Implementado |
| Consultar el detalle de un destino turístico | Implementado |
| Buscar destinos por nombre | Implementado |
| Filtrar destinos por región o valle | Previsto |
| Agregar o quitar destinos de favoritos | Implementado |
| Consultar una lista de destinos favoritos | Implementado |
| Consultar el clima actual de un destino | Implementado |

## Estado actual del proyecto

Actualmente la aplicación permite:

- Consultar un listado de destinos turísticos de Córdoba.
- Visualizar imagen, nombre, región y descripción de cada destino.
- Buscar destinos por nombre.
- Seleccionar un destino mediante una tarjeta interactiva.
- Acceder a una pantalla con el detalle del destino seleccionado.
- Consultar lugares recomendados para visitar en cada destino.
- Consultar actividades y propuestas recreativas.
- Consultar el clima actual del destino.
- Visualizar temperatura, sensación térmica, viento y estado general del tiempo.
- Marcar o quitar un destino como favorito.
- Consultar una pantalla con los destinos marcados como favoritos.
- Compartir el estado de favoritos entre distintas pantallas mediante Zustand.
- Volver desde la pantalla de detalle a la pantalla principal.

Los destinos incluidos actualmente son:

- Villa Carlos Paz.
- La Cumbrecita.
- Mina Clavero.
- Villa General Belgrano.

## Información disponible por destino

Cada destino cuenta actualmente con:

- Imagen representativa.
- Nombre.
- Región o valle.
- Descripción general.
- Lugares para visitar.
- Actividades y propuestas recreativas.
- Clima actual.
- Temperatura.
- Sensación térmica.
- Velocidad del viento.
- Estado general del tiempo.
- Opción para agregar o quitar de favoritos.

## Clase 1 - Contenidos aplicados

En la primera versión se implementaron:

- View.
- Text.
- Image.
- ScrollView.
- Datos estáticos.
- Componentes reutilizables.
- Comunicación entre componentes mediante props.

Se creó el componente reutilizable `DestinationCard`, utilizado para representar cada destino turístico.

## Clase 2 - Contenidos aplicados

En la segunda versión se incorporaron:

- `useState` para manejo de estado.
- `useEffect` para actualizar información según el destino seleccionado.
- `TextInput` para búsqueda de destinos.
- `FlatList` para mostrar el listado de destinos.
- `data`, `keyExtractor` y `renderItem`.
- `TouchableOpacity` para tarjetas y botones interactivos.
- Navegación entre pantallas mediante Expo Router.
- Paso de parámetros entre pantallas.
- Pantalla de detalle de destinos.
- Botón para volver al inicio.
- Icono de favorito.
- Uso de arrays y `map()` para mostrar lugares para visitar y actividades.

## Clase 3 - Estado y datos

En esta etapa se incorporaron Zustand y TanStack Query para trabajar con estado global y datos obtenidos desde una API.

### Zustand

Se incorporó Zustand para administrar el estado global de favoritos.

Se implementaron:

- Instalación y configuración de Zustand.
- Creación de un store global de favoritos.
- Uso de `create()` para crear el store.
- Uso de `set()` para actualizar el estado.
- Array global de identificadores de destinos favoritos.
- Acción para agregar o quitar destinos de favoritos.
- Acceso al mismo estado desde distintas pantallas.
- Eliminación del manejo anterior de favoritos mediante estado local.
- Nueva pantalla de favoritos.
- Visualización de destinos favoritos mediante `FlatList`.

Gracias al uso de Zustand, la pantalla de detalle y la pantalla de favoritos pueden acceder directamente al mismo estado sin necesidad de pasar props entre componentes.

### TanStack Query

Se incorporó TanStack Query para consultar información externa relacionada con el clima de cada destino.

Se implementaron:

- Instalación y configuración de TanStack Query.
- Creación de un `QueryClient`.
- Uso de `QueryClientProvider`.
- Uso de `useQuery` para realizar consultas.
- Uso de `queryKey` para separar la información de clima de cada destino.
- Uso de `queryFn` para ejecutar la consulta a la API.
- Manejo de los estados `isLoading`, `error` y `data`.
- Uso de `ActivityIndicator` durante la carga.
- Consulta de datos meteorológicos mediante una API externa.
- Visualización del clima actual dentro de la pantalla de detalle.
- Traducción del código meteorológico a una descripción comprensible.

Cada destino utiliza sus propias coordenadas de latitud y longitud para obtener la información meteorológica correspondiente.

## Funcionamiento del buscador

El usuario puede ingresar parte del nombre de un destino en el campo de búsqueda.

Por ejemplo:

- "Mina" muestra Mina Clavero.
- "Carlos" muestra Villa Carlos Paz.

Si no existen coincidencias, se muestra un mensaje indicando que no se encontraron destinos.

## Detalle de los destinos

Al seleccionar una tarjeta, el usuario accede a una pantalla de detalle.

En esta pantalla puede consultar:

- Nombre del destino.
- Región o valle.
- Imagen.
- Descripción.
- Lugares recomendados para visitar.
- Actividades disponibles.
- Clima actual.
- Estado de favorito.

Al ingresar a un destino, la pantalla comienza desde la parte superior para mostrar primero la imagen y la información principal.

## Funcionamiento de favoritos

Desde la pantalla de detalle, el usuario puede agregar o quitar un destino de favoritos.

El estado de favoritos se administra mediante un store global creado con Zustand.

La pantalla de Favoritos consulta el mismo store y muestra únicamente los destinos que fueron seleccionados.

Si el usuario quita un destino de favoritos, la lista se actualiza automáticamente.

Actualmente los favoritos se mantienen mientras la aplicación permanece en ejecución y no se almacenan de forma permanente al cerrar o reiniciar la aplicación.

## Funcionamiento del clima

Desde la pantalla de detalle se consulta el clima actual del destino seleccionado.

La información se obtiene mediante TanStack Query y una API meteorológica externa.

Actualmente se muestran:

- Estado general del tiempo.
- Temperatura actual.
- Sensación térmica.
- Velocidad del viento.

Mientras se obtiene la información se muestra un indicador de carga.

Si ocurre un error durante la consulta, la aplicación muestra un mensaje indicando que no fue posible obtener el clima en ese momento.

Cada destino utiliza una `queryKey` diferente, permitiendo que TanStack Query administre la información y el caché de manera independiente.

## Tecnologías utilizadas

- React Native.
- Expo.
- Expo Router.
- TypeScript.
- Expo Symbols.
- Zustand.
- TanStack Query.
- Open-Meteo API.

