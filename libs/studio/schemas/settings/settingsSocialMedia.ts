import { defineField, defineType } from 'sanity';
import { FiTwitter as icon } from 'react-icons/fi';

export default defineType({
  name: 'socialMediaSettings',
  type: 'document',
  icon,
  title: 'Social Media',
  fields: [
    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
    }),
    defineField({
      name: 'youtube',
      title: 'Youtube',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      description: 'domain',
    },
    prepare() {
      return {
        title: 'Social Media',
      };
    },
  },
});
