import { defineField, defineType } from 'sanity';
import { FiSettings as icon } from 'react-icons/fi';
import { PreviewType } from '../../types';

export default defineType({
  name: 'generalSettings',
  type: 'document',
  title: 'General Settings',
  icon,
  fields: [
    defineField({
      name: 'domain',
      type: 'url',
      title: 'Domain',
      description: 'The root domain or subdomain of your website.',
    }),
    defineField({
      name: 'copyright',
      type: 'string',
      title: 'Copyright',
    }),
  ],
  preview: {
    select: {
      description: 'domain',
    },
    prepare({ description }: PreviewType) {
      return {
        title: 'General Settings',
        subtitle: description,
      };
    },
  },
});
