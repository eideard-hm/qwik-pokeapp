import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <main class="flex flex-col items-center justify-center w-full h-full p-4">
      <Slot />
    </main>
  );
});
