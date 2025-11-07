
export enum EncoderType {
  LabelEncoder = 'LabelEncoder',
  GetDummies = 'GetDummies',
  OneHotEncoder = 'OneHotEncoder',
  ColumnTransformer = 'ColumnTransformer',
}

export interface SampleDataRow {
  id: number;
  color: string;
  talla: string;
  precio: number;
}

export interface TransformedDataRow {
  [key: string]: string | number;
}

export interface EncoderContent {
  navTitle: string;
  title: string;
  description: string;
  code: string;
  pros: string[];
  cons: string[];
  initialData: SampleDataRow[];
  transformedData: TransformedDataRow[];
  transformedHeaders: string[];
  note?: string;
}
