import { FiSettings, FiGlobe, FiRepeat, FiTwitter, FiCheckSquare } from 'react-icons/fi';

import titles from './constants/titles';
import schemas from './constants/schemaTypes';

export default (S) =>
  S.list()
    .title('Next.js Sanity Starter')
    .items(
      S.documentTypeListItems(),
      S.divider(),
      S.listItem()
        .title(titles.SETTINGS)
        .child(
          S.list()
            .title(titles.SETTINGS)
            .items([
              S.listItem()
                .title(titles.GENERAL_SETTINGS)
                .child(
                  S.editor()
                    .id(schemas.GENERAL_SETTINGS)
                    .schemaType(schemas.GENERAL_SETTINGS)
                    .documentId(schemas.GENERAL_SETTINGS),
                )
                .icon(FiSettings),
              S.listItem()
                .title(titles.COOKIE_SETTINGS)
                .child(
                  S.editor()
                    .id(schemas.COOKIE_SETTINGS)
                    .schemaType(schemas.COOKIE_SETTINGS)
                    .documentId(schemas.COOKIE_SETTINGS),
                )
                .icon(FiCheckSquare),
              S.listItem()
                .title(titles.SEO)
                .child(
                  S.editor()
                    .id(schemas.SEO_SETTINGS)
                    .schemaType(schemas.SEO_SETTINGS)
                    .documentId(schemas.SEO_SETTINGS),
                )
                .icon(FiGlobe),
              S.listItem()
                .title(titles.SOCIAL_MEDIA)
                .child(
                  S.editor()
                    .id(schemas.SOCIAL_MEDIA_SETTINGS)
                    .schemaType(schemas.SOCIAL_MEDIA_SETTINGS)
                    .documentId(schemas.SOCIAL_MEDIA_SETTINGS),
                )
                .icon(FiTwitter),
              S.listItem()
                .title(titles.REDIRECTS)
                .child(S.documentTypeList(schemas.REDIRECT).title(titles.REDIRECTS))
                .icon(FiRepeat),
            ]),
        )
        .icon(FiSettings),
    );
