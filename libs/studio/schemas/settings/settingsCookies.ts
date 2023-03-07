import { defineField, defineType } from 'sanity';
import { PreviewType } from '../../types';

export default defineType({
  title: 'Cookie Consent Settings',
  name: 'cookieSettings',
  type: 'document',
  fields: [
    defineField({
      title: 'Message',
      name: 'message',
      type: 'text',
      rows: 2,
      description: 'Your cookie consent message.',
    }),
  ],
  preview: {
    select: {
      description: 'message',
    },
    prepare({ description }: PreviewType) {
      return {
        title: 'Cookie Consent Settings',
        subtitle: description,
      };
    },
  },
});
