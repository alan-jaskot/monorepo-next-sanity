import { NextStudio } from 'next-sanity/studio';
import { StudioLayout, StudioProvider } from 'sanity';
// eslint-disable-next-line import/no-relative-packages
import config from '../../../studio/sanity.config';

export default function StudioPage() {
  return (
    <NextStudio config={config}>
      <StudioProvider config={config}>
        {/* Put components here and you'll have access to the same React hooks as Studio gives you when writing plugins */}
        <StudioLayout />
      </StudioProvider>
    </NextStudio>
  );
}
