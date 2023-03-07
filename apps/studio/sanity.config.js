import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import deskStructure from './deskStructure';
import schemas from './schema';

export default defineConfig({
  title: 'Starter Studio',
  projectId: 'h6tbpwbm',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],
  schema: {
    types: schemas,
  },
});
