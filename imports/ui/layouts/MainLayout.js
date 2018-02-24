import React from 'react';

export const MainLayout = ({content}) => (
  <div className="main-layout">
      {content}
  </div>
)

<template name="MainLayout">
    <header>
          <h1> airCar </h1>
    </header
  <main>
      {{> Template.dynamic template=main}}
  </main>
</template>
