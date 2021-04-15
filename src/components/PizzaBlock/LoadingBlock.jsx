import React from 'react';
import ContentLoader from 'react-content-loader';

export default function PizzaLoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="133" cy="115" r="115" />
      <rect x="-1" y="249" rx="3" ry="3" width="280" height="26" />
      <rect x="-1" y="288" rx="3" ry="3" width="280" height="84" />
      <rect x="-1" y="383" rx="3" ry="3" width="63" height="31" />
      <rect x="136" y="376" rx="20" ry="20" width="140" height="37" />
    </ContentLoader>
  );
}
