<script setup>
  import { formatCurrency } from '@/helpers/price'
  import ImgTumbLightbox from '@/components/sistem/ImgTumbLightbox.vue'
  import { urlBack, urlFront } from '@/helpers/config'
  import { useListStore } from '@/stores/list';
  const apiList = useListStore()

    const props = defineProps({
        product: {type: Object, required: true},
        addToListButton: {type: Number},
    })
</script>

<template>
   
    <div class="my-2 px-2 py-1 bg-primary-400 rounded-3xl">

        <div class="flex flex-col items-start justify-between gap-1 my-2  text-gray-700 w-full min-h-36">
            <div class="w-full h-48 rounded-sm overflow-hidden self-center">
                <ImgTumbLightbox 
                    v-if="product.image_hero != ''"
                    class=""
                    :uri="urlBack()+product.image_hero_uri"
                    :name="product.image_hero"
                    :nameImg="product.category + ' - ' + product.name"
                    nameAlbum="offers"
                    tumb=true
                />
            </div>

            <div class=" py-1 px-2 flex flex-col gap-3 justify-between w-full">
                <hr class="border-primary-800 my-1">

                <div class="flex justify-between items-center">
                    <div v-if="product.price_original < product.price_seller || product.price_seller == '' || product.price_seller == '0'">
                        <p class="mb-1 text-base font-bold text-green-50 ">{{ formatCurrency(product.price_original)}}</p>
                    </div>
                    <div v-else>
                        <span class="mb-1 mr-5 font-bold text-base text-green-50 ">{{ formatCurrency(product.price_seller)}}</span>
                        <span class="line-through mb-1 text-xs text-red-200 ">{{ formatCurrency(product.price_original)}}</span>
                    </div>
                </div>

                <div>
                    <p class="text-gray-200 text-base font-bold">{{ product.name }}</p>

                    <p class="mb-1 text-gray-300 italic font-light text-xs line-clamp-2 ">{{ product.description }}</p>
                </div>

                <div class="my-1 flex items-center gap-1 overflow-x-auto overflow-hidden">

                <span v-for="tag in product.tags" class="block whitespace-nowrap  bg-primary-50 text-primary-900 text-xs font-bold my-2 me-2 px-2.5 py-0.5 rounded-xl">{{ tag.name }}</span>

                </div>

                <div v-if="addToListButton">
                    <button class="w-full bg-green-200 text-green-800 text-sm font-bold my-2 me-2 px-2.5 py-0.5 rounded" @click="apiList.addToList(product)">Agregar</button>
                </div>
            </div>

        </div>

        <hr class="border-primary-300">
    </div>


</template>

<style scoped>

</style>