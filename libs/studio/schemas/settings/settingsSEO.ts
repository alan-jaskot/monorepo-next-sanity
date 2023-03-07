import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'seoSettings',
  type: 'document',
  title: 'Default SEO / Share',
  fields: [
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Default SEO / Share',
      };
    },
  },
});
