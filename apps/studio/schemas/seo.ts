import { StringRule, defineType, defineField } from 'sanity';
import { PreviewType } from '../types';

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'disallowRobots',
      type: 'boolean',
      title: 'Hide page from search engines',
      description: 'NB: If the global option is turned on, this will not have any effect',
      initialValue: false,
    }),
    defineField({
      name: 'disableSuffix',
      type: 'boolean',
      title: 'Hide suffix from title',
      description: 'Remove the text behind | from the title',
      initialValue: false,
    }),
    defineField({
      name: 'title',
      title: 'SEO title',
      type: 'string',
      description: 'The name of your site, usually your company/brand name.',
      validation: (rule: StringRule) =>
        rule.max(50).warning('Longer titles may be truncated by search engines'),
    }),
    defineField({
      name: 'description',
      title: 'SEO description',
      type: 'string',
      description: 'Description for search engines.',
      validation: (rule: StringRule) =>
        rule.max(150).warning('Longer descriptions may be truncated by search engines'),
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'image',
      title: 'SEO image',
      type: 'image',
      description: 'Share graphics will be cropped to 1200x630',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare({ title, description }: PreviewType) {
      return {
        title: `SEO | ${title}`,
        subtitle: description,
      };
    },
  },
});
