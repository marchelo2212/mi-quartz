---
{"publish":true,"created":"2025-11-08T20:01","modified":"2025-11-10T09:04:30-05:00","cssclasses":""}
---

Aquí tienes el **diccionario de datos** organizado en formato tabular para usar en tu documentación o análisis 📘:

| **Variable**               | **Tipo de Variable** | **Descripción**                                                                                                                                                 |
| -------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Año lectivo                | Alfanumérica         | Periodo escolar codificado (Inicio o Fin). “Inicio” recoge información al empezar el año (matrícula) y “Fin” al culminar (promovidos, no promovidos, abandono). |
| Zona                       | Alfanumérica         | Zona de planificación según ubicación geográfica de la institución educativa.                                                                                   |
| Provincia                  | Alfabética           | Nombre de la provincia donde se encuentra la institución educativa.                                                                                             |
| Cod_Provincia              | Alfanumérica         | Código provincial según la división político-administrativa.                                                                                                    |
| Cantón                     | Alfanumérica         | Nombre del cantón donde se encuentra la institución educativa.                                                                                                  |
| Cod_Cantón                 | Alfanumérica         | Código cantonal según la división político-administrativa.                                                                                                      |
| Parroquia                  | Alfanumérica         | Nombre de la parroquia donde se encuentra la institución educativa.                                                                                             |
| Cod_Parroquia              | Alfanumérica         | Código parroquial según la división político-administrativa.                                                                                                    |
| Nombre_Institución         | Alfanumérica         | Denominación oficial de la institución educativa conforme a su permiso de funcionamiento.                                                                       |
| Código_Institución         | Alfanumérica         | Identificador único de la institución (8 caracteres).                                                                                                           |
| Tipo_Educación             | Alfabética           | Servicio educativo ofertado: Ordinaria, Especial o Popular Permanente.                                                                                          |
| Nivel_Educación            | Alfabética           | Nivel autorizado: Educación Inicial, Educación General Básica o Bachillerato.                                                                                   |
| Sostenimiento              | Alfabética           | Fuente de financiamiento: Fiscal, Fiscomisional, Municipal o Particular.                                                                                        |
| Área                       | Alfabética           | Ubicación geográfica urbana o rural de la institución educativa.                                                                                                |
| Régimen_Escolar            | Alfabética           | Cronograma escolar: Costa - Galápagos o Sierra - Amazonía.                                                                                                      |
| Jurisdicción               | Alfabética           | Administración de la institución: Intercultural Bilingüe o Intercultural.                                                                                       |
| Modalidad                  | Alfabética           | Tipo de enseñanza: Presencial, Semipresencial, A distancia, Abierta o Educación en Casa.                                                                        |
| Jornada                    | Alfabética           | Horario de clases: Matutina, Vespertina o Nocturna.                                                                                                             |
| Tenencia_Inmueble_Edificio | Alfabética           | Tipo de posesión del inmueble: Propio, Arriendo, Comodato, Cesión, Invasión, Prestado o No conoce.                                                              |
| Acceso_Edificio            | Alfabética           | Tipo de acceso: Terrestre, Aéreo o Fluvial.                                                                                                                     |
| Docentes_Femenino          | Numérica             | Número de docentes mujeres registrados.                                                                                                                         |
| Docentes_Masculino         | Numérica             | Número de docentes hombres registrados.                                                                                                                         |
| Total_Docentes             | Numérica             | Número total de docentes.                                                                                                                                       |
| Administrativos_Femenino   | Numérica             | Número de personal administrativo femenino.                                                                                                                     |
| Administrativos_Masculino  | Numérica             | Número de personal administrativo masculino.                                                                                                                    |
| Total_Administrativos      | Numérica             | Número total de personal administrativo.                                                                                                                        |
| Estudiantes_Femenino       | Numérica             | Número de estudiantes mujeres registrados.                                                                                                                      |
| Estudiantes_Masculino      | Numérica             | Número de estudiantes hombres registrados.                                                                                                                      |
| Total_Estudiantes          | Numérica             | Número total de estudiantes del Sistema Educativo Nacional.                                                                                                     |










Perfecto 🎬  
A continuación te presento un **guion completo y estructurado** para tu **vídeo explicativo de las tres visualizaciones** (Stacked Bar Graph, Nightingale Chart y Tile Grid Map / Kepler.gl 3D), cumpliendo con los criterios y porcentajes que exige la rúbrica del trabajo.

Este guion está diseñado para un vídeo de **7 a 8 minutos**, con una duración aproximada de **2–3 minutos por técnica**, y un tono formal, fluido y claro.

---

# 🎥 **Guion del vídeo explicativo – Visualización de datos**

---

## 🧍‍♀️ **1. Presentación personal (Puntos 1 + 2 – 5%)**

> Hola, mi nombre es [Tu nombre completo], soy estudiante del curso de Visualización de Datos y en este vídeo presentaré tres técnicas diferentes aplicadas a conjuntos de datos abiertos del Ministerio de Educación del Ecuador.
> 
> A lo largo de este trabajo, he desarrollado y publicado tres visualizaciones interactivas en línea que ilustran distintos enfoques de análisis visual. A continuación, mostraré los enlaces correspondientes y explicaré brevemente cada técnica, sus características, estructura de datos y objetivos comunicativos.
## 🌐 **2. Enlace a las visualizaciones publicadas (5%)**

> Las visualizaciones pueden consultarse en los siguientes enlaces:
> 
> - **Gráfico de barras apiladas (Stacked Bar Graph):** [colocar URL de Tableau Public]
>     
> - **Diagrama de Nightingale (Nightingale Chart):** [colocar URL de Tableau Public]
>     
> - **Mapa en cuadrícula 3D (Tile Grid Map / Kepler.gl):** [colocar URL de Tableau Public o Kepler.gl]
>     

## 📊 **3. Técnica 1: Gráfico de barras apiladas (Stacked Bar Graph)**

### **Definición general (25%)**

> El gráfico de barras apiladas es una extensión del gráfico de barras tradicional que permite representar **la composición interna de una categoría** y, al mismo tiempo, **comparar varias categorías entre sí**.
> 
> Su origen se remonta al siglo XIX, derivado de los trabajos de **William Playfair**, pionero en la representación gráfica de datos. En la actualidad, esta técnica es ampliamente utilizada en investigación, economía y educación (Friendly, 2008; Tufte, 2007).

### **Tipo y estructura de datos (15%)**

> Este gráfico utiliza datos **cuantitativos y categóricos**.
> 
> - El eje X representa las categorías, por ejemplo, el tipo de sostenimiento o el nivel educativo.
>     
> - El eje Y muestra el valor numérico, como el número total de docentes o estudiantes.
>     
> - Cada barra se divide en segmentos que representan subcategorías, como el género o tipo de institución.
>     
> 
> Es ideal para conjuntos de datos de tamaño medio, entre 5 y 20 categorías.

### **Realización práctica (20%)**

> En mi caso, utilicé datos del Ministerio de Educación del Ecuador (2024–2025), representando el número total de estudiantes por tipo de sostenimiento y nivel educativo.
> 
> La visualización se elaboró en Tableau y se configuró para mostrar tanto la frecuencia acumulada como el porcentaje relativo.

### **Comentario y objetivo (30%)**

> Este gráfico permite identificar claramente que las instituciones fiscales concentran la mayor proporción de estudiantes, seguidas por las particulares.
> 
> El objetivo es **comparar la composición y magnitud** de estudiantes por tipo de sostenimiento, mostrando las diferencias internas de forma visual y accesible.

---

## 🌙 **4. Técnica 2: Diagrama de Nightingale (Nightingale Chart)**

_(Duración: 2 minutos aprox.)_

### **Definición general (25%)**

> El Diagrama de Nightingale, también conocido como **Coxcomb Chart** o **Rose Diagram**, fue creado por **Florence Nightingale** en 1858 para mostrar las causas de mortalidad en la Guerra de Crimea.
> 
> Es un gráfico circular dividido en sectores, donde el área de cada sector es proporcional al valor que representa. Se utiliza para mostrar **cambios proporcionales a lo largo del tiempo o entre categorías** (Alfonso, 2021; Friendly, 2008).

### **Tipo y estructura de datos (15%)**

> Admite datos **cuantitativos y temporales**.
> 
> - Cada sector representa una categoría o periodo.
>     
> - El radio o área indica el valor cuantitativo, por ejemplo, número de estudiantes.
>     
> 
> No es recomendable usarlo con más de 12–15 categorías, ya que la lectura puede volverse confusa.

### **Realización práctica (20%)**

> En mi caso, el gráfico muestra la **distribución del total de estudiantes por nivel educativo**.  
> Cada sector representa un nivel (Inicial, Básica, Bachillerato), y el área proporcional indica la magnitud total.
> 
> Se elaboró en Tableau con un diseño circular y colores diferenciados para resaltar las proporciones.

### **Comentario y objetivo (30%)**

> El diagrama permite visualizar de manera estética e inmediata qué niveles educativos concentran la mayor matrícula.
> 
> Su objetivo principal es **comunicar la proporción de estudiantes por nivel**, evidenciando visualmente el predominio de la educación básica en el sistema ecuatoriano.

---

## 🧭 **5. Técnica 3: Mapa en cuadrícula 3D (Tile Grid Map / Kepler.gl)**

_(Duración: 2–3 minutos aprox.)_

### **Definición general (25%)**

> El Tile Grid Map, o mapa en cuadrícula, es una técnica de visualización geográfica que representa regiones como **celdas de igual tamaño**, eliminando las distorsiones de los mapas tradicionales.
> 
> En su versión tridimensional, implementada en **Kepler.gl**, permite añadir una dimensión adicional para visualizar la magnitud de los datos mediante la altura de las columnas.
> 
> Esta técnica se ha popularizado en el periodismo de datos y la visualización científica (Cid, 2016; Tufte, 2007).

### **Tipo y estructura de datos (15%)**

> Utiliza datos **geográficos y cuantitativos**, asociados a unidades territoriales como provincias.
> 
> - Cada tile o hexágono representa una provincia del Ecuador.
>     
> - El color y la altura indican el número de docentes o estudiantes.
>     
> 
> Requiere coordenadas geográficas (latitud y longitud) y conjuntos de datos equilibrados, con entre 10 y 30 unidades.

### **Realización práctica (20%)**

> Para esta visualización, se utilizó **Kepler.gl integrado con Tableau**.  
> El mapa muestra la **distribución geográfica del personal docente y estudiantil** en el periodo lectivo 2024–2025.
> 
> Cada columna 3D refleja la densidad educativa por provincia, permitiendo comparar la magnitud de docentes y estudiantes en distintas regiones.

### **Comentario y objetivo (30%)**

> Esta visualización destaca las provincias con mayor concentración educativa, especialmente Guayas, Pichincha y Azuay.
> 
> El objetivo es **mostrar las diferencias regionales en la dotación de recursos humanos y matrícula estudiantil**, utilizando una técnica espacial que combina precisión geográfica y claridad visual.

---

## 🎯 **6. Cierre**

> En conjunto, las tres técnicas —Stacked Bar Graph, Nightingale Chart y Tile Grid Map— permiten representar la información educativa desde perspectivas **comparativa, proporcional y geoespacial**, respectivamente.
> 
> Este ejercicio demuestra cómo la elección adecuada de una técnica de visualización depende de los **objetivos comunicativos** y de la **naturaleza de los datos**, reforzando la importancia del diseño visual en la interpretación estadística.
