import type { AssetType } from '.';

export type SchemaType = {
  schemaType: string;
};

export type BlockType = {
  _type: 'block' | 'span';
  children: BlockType[];
  text: string;
};

export type PreviewType = {
  title?: string;
  subtitle?: string;
  media?: AssetType;
  description?: string;
  blockContent?: BlockType[];
  number?: string;
  from?: string;
  to?: string;
  isPermanent?: boolean;
};
