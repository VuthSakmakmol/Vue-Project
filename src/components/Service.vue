<template>
  <div class="container mx-auto p-4">
    <div class="mb-6">
  <input
    type="text"
    v-model="searchQuery"
    placeholder="Search for images..."
    class=" z-50 px-2 py-3 mt-1 block w-full rounded-md border-2 border-gray-500 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-400 focus:ring-opacity-50"/>
  </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="(image, index) in filteredImages"
        :key="index"
        class="max-w-sm rounded overflow-hidden shadow-lg"
      >
        <img :src="image.src" :alt="image.alt" class="w-full" />
        <div class="px-4 py-4 bg-blue-100 text-black hover:bg-blue-400">
          <div class="font-bold text-xl mb-2">{{ image.name }}</div>
          <p class="text-gray-700 text-base">
            {{ image.description }}
          </p>
          <p class="text-gray-700 text-base">
            Price/kg: {{ image.pricePerKg }}
          </p>
          
          <button @click="buyNow(item.pricePerKg)" class="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buy Now</button>

        </div>
        
      </div>
     
    </div>
    

  </div>
</template>

<script>
export default {
  data() {
    return {
      showPaymentPage: false,
      selectedItemPrice: '',
      methods: {
        handleBuyNow(price) {
          this.showPaymentPage = true;
          this.selectedItemPrice = price;
        },
      },
      searchQuery: '',
      images: [
        {
          src: 'https://i.pinimg.com/564x/a9/c6/26/a9c626fbe543c02f09d58b471b3ee2d6.jpg',
          alt: 'Description 1',
          name: 'EggPlant',
          description: 'This is an image description.',
          pricePerKg: '$15',
        },
        {
          src: 'https://i.pinimg.com/564x/cd/7e/33/cd7e331c127daea03982f6ad755fade1.jpg',
          alt: 'Description 2',
          name: 'Okra',
          description: 'This is another image description.',
          pricePerKg: '$10',
        },
        {
          src: 'https://i.pinimg.com/564x/58/5b/77/585b77b02308bf6fff48d251ab397674.jpg',
          alt: 'Description 2',
          name: 'Garlic',
          description: 'This is another image description.',
          pricePerKg: '$23',
        },
        {
          src: 'https://i.pinimg.com/564x/87/a7/b5/87a7b502c31b52afe2e01c58d4b803d8.jpg',
          alt: 'Description 2',
          name: 'Red Onion',
          description: 'This is another image description.',
          pricePerKg: '$12',
        },
        {
          src: 'https://i.pinimg.com/564x/4a/ec/f6/4aecf6bf4d0452afbfe09b53c47a87bd.jpg',
          alt: 'Description 2',
          name: 'Broccoli',
          description: 'This is another image description.',
          pricePerKg: '$16',
        },
        {
          src: 'https://i.pinimg.com/564x/6b/9e/3b/6b9e3bcde668351dbb1a800c03a82567.jpg',
          alt: 'Description 2',
          name: 'Cabbege',
          description: 'This is another image description.',
          pricePerKg: '$17',
        },
        {
          src: 'https://i.pinimg.com/564x/c3/87/d3/c387d385fd122bcc9e3ab1b33b714cf8.jpg',
          alt: 'Description 2',
          name: 'Red-Cabbege',
          description: 'This is another image description.',
          pricePerKg: '$30',
        },
        {
          src: 'https://i.pinimg.com/564x/36/48/04/364804cd67e23a1e33de7334e07e0ded.jpg',
          alt: 'Description 2',
          name: 'Sweet Potato',
          description: 'This is another image description.',
          pricePerKg: '$5',
        },{
          src: 'https://i.pinimg.com/564x/52/a7/79/52a7797cad546c47f4eafb9a45e3ded4.jpg',
          alt: 'Description 2',
          name: 'Potatoes',
          description: 'This is another image description.',
          pricePerKg: '$8',
        },
        {
          src: 'https://i.pinimg.com/736x/44/a3/6f/44a36ff7e3e2558f43141ffe8c77b775.jpg',
          alt: 'Description 2',
          name: 'Bean',
          description: 'This is another image description.',
          pricePerKg: '$21',
        },
        {
          src: 'https://i.pinimg.com/564x/c5/88/5d/c5885d63b564fbca6db40c252c11cff5.jpg',
          alt: 'Description 2',
          name: 'Radish',
          description: 'This is another image description.',
          pricePerKg: '$14',
        },
        {
          src: 'https://i.pinimg.com/564x/a8/58/10/a85810d49a0d4b22e2596f4e1f396d90.jpg',
          alt: 'Description 2',
          name: 'Calabrese Broccoli',
          description: 'This is another image description.',
          pricePerKg: '$6',
        },
        {
          src: 'https://i.pinimg.com/564x/7a/13/14/7a13144182a6dc831a37247134400fd3.jpg',
          alt: 'Description 2',
          name: 'Bell Pepers',
          description: 'This is another image description.',
          pricePerKg: '$21',
        },
        {
          src: 'https://i.pinimg.com/564x/ae/c7/eb/aec7eb11c321ac0e83e28ede0a4db581.jpg',
          alt: 'Peper',
          name: 'Ginger',
          description: 'This is another image description.',
          pricePerKg: '$99',
        },

        // ... more images
      ],
    };
  },
  computed: {
    filteredImages() {
      return this.images.filter((image) => {
        return image.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },
  },
};
</script>
