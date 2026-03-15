---
publish: true
created: 2026-02-18T10:30
modified: 2026-02-21T16:11
cssclasses: ""
---

## 1. El Caso: El Gran Inventario del Zoo

Imagina que el zoológico "Mundo Salvaje" registra todo en un único archivo de Excel. Esta **tabla plana** mezcla datos de animales, sus hábitats, sus cuidadores y la especialidad médica de estos últimos.

### Tabla Plana: `REGISTRO_ZOO` (Sin Normalizar)

| **ID_Animal** | **Nombre_Animal** | **Especie** | **Dieta** | **ID_Habitat** | **Nombre_Habitat** | **Ubicacion** | **ID_Cuidador** | **Nombre_Cuidador** | **Especialidad_Medica** |
| ------------- | ----------------- | ----------- | --------- | -------------- | ------------------ | ------------- | --------------- | ------------------- | ----------------------- |
| A01           | Simba             | León        | Carnívoro | H10            | Sabana Africana    | Sector Norte  | C-88            | Carlos Ruiz         | Felinos, Vacunación     |
| A02           | Nala              | León        | Carnívoro | H10            | Sabana Africana    | Sector Norte  | C-88            | Carlos Ruiz         | Felinos, Vacunación     |
| A03           | Marty             | Cebra       | Herbívoro | H10            | Sabana Africana    | Sector Norte  | C-92            | Ana López           | Equinos                 |
| A04           | Melman            | Jirafa      | Herbívoro | H15            | Bosque Alto        | Sector Sur    | C-92            | Ana López           | Equinos                 |


