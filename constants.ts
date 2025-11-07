import { EncoderType, SampleDataRow, TransformedDataRow, EncoderContent } from './types';

const INITIAL_DATA: SampleDataRow[] = [
  { id: 1, color: 'Rojo', talla: 'M', precio: 15.50 },
  { id: 2, color: 'Verde', talla: 'L', precio: 20.00 },
  { id: 3, color: 'Azul', talla: 'M', precio: 17.25 },
  { id: 4, color: 'Rojo', talla: 'S', precio: 12.00 },
];

export const ENCODER_CONTENT: Record<EncoderType, EncoderContent> = {
  [EncoderType.LabelEncoder]: {
    navTitle: 'LabelEncoder',
    title: 'sklearn.preprocessing.LabelEncoder',
    description: 'Convierte cada etiqueta de texto en un número entero único. Por ejemplo, "Rojo" podría ser 0, "Verde" 1 y "Azul" 2. Es simple, pero puede ser problemático para algoritmos que interpretan estos números como un orden o jerarquía.',
    code: `import pandas as pd
from sklearn.preprocessing import LabelEncoder

# Creamos el DataFrame
df = pd.DataFrame({
    'color': ['Rojo', 'Verde', 'Azul', 'Rojo'],
    'talla': ['M', 'L', 'M', 'S']
})

# Inicializamos el codificador
le_color = LabelEncoder()
le_talla = LabelEncoder()

# Aplicamos el codificador a cada columna
df['color_encoded'] = le_color.fit_transform(df['color'])
df['talla_encoded'] = le_talla.fit_transform(df['talla'])

print(df[['color_encoded', 'talla_encoded']])
`,
    pros: [
      'Simple y rápido de implementar.',
      'Requiere menos memoria que One-Hot Encoding.',
    ],
    cons: [
      'Introduce una relación ordinal artificial (ej: Azul(2) > Verde(1)) que puede confundir al modelo.',
      'No es adecuado para características nominales (categorías sin orden).',
    ],
    initialData: INITIAL_DATA,
    transformedData: [
      { id: 1, color: 1, talla: 1, precio: 15.50 },
      { id: 2, color: 2, talla: 0, precio: 20.00 },
      { id: 3, color: 0, talla: 1, precio: 17.25 },
      { id: 4, color: 1, talla: 2, precio: 12.00 },
    ],
    transformedHeaders: ['id', 'color', 'talla', 'precio'],
    note: 'Nota: "Azul" se convierte en 0, "Rojo" en 1, "Verde" en 2. "L" se convierte en 0, "M" en 1, "S" en 2. El orden es alfabético.'
  },
  [EncoderType.GetDummies]: {
    navTitle: 'pd.get_dummies',
    title: 'pandas.get_dummies',
    description: 'Crea nuevas columnas binarias (con valores 0 o 1) para cada categoría presente en una columna. Si una fila pertenece a una categoría, el valor en esa nueva columna será 1, y 0 en las demás. Es la forma más común y segura de codificar características nominales.',
    code: `import pandas as pd

# Creamos el DataFrame
df = pd.DataFrame({
    'color': ['Rojo', 'Verde', 'Azul', 'Rojo'],
    'talla': ['M', 'L', 'M', 'S'],
    'precio': [15.50, 20.00, 17.25, 12.00]
})

# Aplicamos get_dummies
df_dummies = pd.get_dummies(df, columns=['color', 'talla'], prefix=['color', 'talla'])

print(df_dummies)
`,
    pros: [
      'No crea relaciones ordinales falsas.',
      'Muy fácil de usar y entender con Pandas.',
      'Representación clara de la presencia o ausencia de una categoría.',
    ],
    cons: [
      'Puede crear muchas columnas nuevas si hay muchas categorías (alta dimensionalidad).',
      'Problemas si en los datos de test aparecen categorías no vistas en el entrenamiento.',
    ],
    initialData: INITIAL_DATA,
    transformedData: [
      { id: 1, precio: 15.50, color_Azul: 0, color_Rojo: 1, color_Verde: 0, talla_L: 0, talla_M: 1, talla_S: 0 },
      { id: 2, precio: 20.00, color_Azul: 0, color_Rojo: 0, color_Verde: 1, talla_L: 1, talla_M: 0, talla_S: 0 },
      { id: 3, precio: 17.25, color_Azul: 1, color_Rojo: 0, color_Verde: 0, talla_L: 0, talla_M: 1, talla_S: 0 },
      { id: 4, precio: 12.00, color_Azul: 0, color_Rojo: 1, color_Verde: 0, talla_L: 0, talla_M: 0, talla_S: 1 },
    ],
    transformedHeaders: ['id', 'precio', 'color_Azul', 'color_Rojo', 'color_Verde', 'talla_L', 'talla_M', 'talla_S'],
  },
  [EncoderType.OneHotEncoder]: {
    navTitle: 'OneHotEncoder',
    title: 'sklearn.preprocessing.OneHotEncoder',
    description: 'Funcionalmente similar a `pd.get_dummies`, pero forma parte del ecosistema de Scikit-learn, lo que lo hace ideal para ser incluido en Pipelines de Machine Learning. Ofrece más control, como la capacidad de manejar categorías desconocidas que puedan aparecer en el futuro.',
    code: `import pandas as pd
from sklearn.preprocessing import OneHotEncoder

df = pd.DataFrame({
    'color': ['Rojo', 'Verde', 'Azul', 'Rojo'],
    'talla': ['M', 'L', 'M', 'S']
})

# Inicializamos el codificador
ohe = OneHotEncoder(sparse_output=False)

# Aplicamos y creamos un nuevo DataFrame con los resultados
transformed_data = ohe.fit_transform(df[['color', 'talla']])
new_cols = ohe.get_feature_names_out(['color', 'talla'])
df_ohe = pd.DataFrame(transformed_data, columns=new_cols)

print(df_ohe)
`,
    pros: [
      'Se integra perfectamente con pipelines de Scikit-learn.',
      'Puede manejar categorías desconocidas (parámetro `handle_unknown`).',
      'Más configurable que `get_dummies`.',
    ],
    cons: [
      'Un poco más complejo de implementar que `get_dummies`.',
      'Al igual que `get_dummies`, puede generar alta dimensionalidad.',
    ],
    initialData: INITIAL_DATA,
    transformedData: [
      { color_Azul: 0, color_Rojo: 1, color_Verde: 0, talla_L: 0, talla_M: 1, talla_S: 0 },
      { color_Azul: 0, color_Rojo: 0, color_Verde: 1, talla_L: 1, talla_M: 0, talla_S: 0 },
      { color_Azul: 1, color_Rojo: 0, color_Verde: 0, talla_L: 0, talla_M: 1, talla_S: 0 },
      { color_Azul: 0, color_Rojo: 1, color_Verde: 0, talla_L: 0, talla_M: 0, talla_S: 1 },
    ],
     transformedHeaders: ['color_Azul', 'color_Rojo', 'color_Verde', 'talla_L', 'talla_M', 'talla_S'],
     note: 'El resultado visual es idéntico a get_dummies, pero su poder reside en la integración con pipelines de sklearn.'
  },
  [EncoderType.ColumnTransformer]: {
    navTitle: 'ColumnTransformer',
    title: 'sklearn.compose.ColumnTransformer',
    description: 'Es la herramienta definitiva para el preprocesamiento. Permite aplicar diferentes transformaciones a diferentes columnas de tu dataset, todo en un solo paso. Por ejemplo, puedes aplicar One-Hot Encoding a las columnas categóricas y, al mismo tiempo, escalar las columnas numéricas.',
    code: `import pandas as pd
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.compose import ColumnTransformer

df = pd.DataFrame({
    'color': ['Rojo', 'Verde', 'Azul', 'Rojo'],
    'talla': ['M', 'L', 'M', 'S'],
    'precio': [15.50, 20.00, 17.25, 12.00]
})

# Definimos las columnas categóricas y numéricas
categorical_features = ['color', 'talla']
numerical_features = ['precio']

# Creamos el preprocesador
preprocessor = ColumnTransformer(
    transformers=[
        ('num', StandardScaler(), numerical_features),
        ('cat', OneHotEncoder(), categorical_features)
    ])

# Aplicamos el transformador
transformed_data = preprocessor.fit_transform(df)

print(transformed_data) # El resultado es un array de NumPy
`,
    pros: [
      'Organiza todo el preprocesamiento en un solo objeto.',
      'Evita la fuga de datos (data leakage) al aplicar `fit` solo en datos de entrenamiento.',
      'Esencial para crear pipelines de ML robustos y reproducibles.',
    ],
    cons: [
      'Requiere una mayor configuración inicial.',
      'La salida es un array de NumPy, perdiendo los nombres de las columnas (se pueden recuperar).',
    ],
    initialData: INITIAL_DATA,
    transformedData: [
      { 'precio_scaled': -0.32, 'color_Azul': 0, 'color_Rojo': 1, 'color_Verde': 0, 'talla_L': 0, 'talla_M': 1, 'talla_S': 0 },
      { 'precio_scaled': 1.48,  'color_Azul': 0, 'color_Rojo': 0, 'color_Verde': 1, 'talla_L': 1, 'talla_M': 0, 'talla_S': 0 },
      { 'precio_scaled': 0.30,  'color_Azul': 1, 'color_Rojo': 0, 'color_Verde': 0, 'talla_L': 0, 'talla_M': 1, 'talla_S': 0 },
      { 'precio_scaled': -1.46, 'color_Azul': 0, 'color_Rojo': 1, 'color_Verde': 0, 'talla_L': 0, 'talla_M': 0, 'talla_S': 1 },
    ],
    transformedHeaders: ['precio_scaled', 'color_Azul', 'color_Rojo', 'color_Verde', 'talla_L', 'talla_M', 'talla_S'],
    note: 'ColumnTransformer ha aplicado StandardScaler a "precio" y OneHotEncoder a "color" y "talla" en un solo paso.'
  },
};