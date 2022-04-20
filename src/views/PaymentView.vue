<template>
  <div class="row gap-3">
    <div
      @mouseover="active('Credit')"
      @mouseout="selectedCard = ''"
      @click="validationsAction"
      :class="selectedCard === 'Credit' ? 'border-primary' : ''"
      class="
        col
        p-4
        border border-2
        rounded-3
        d-flex
        align-items-center
        justify-content-center
        gap-3
        pointer
      "
    >
      <CreditCard
        :stroke="selectedCard === 'Credit' ? 'white' : '#0d6efd'"
        :class="selectedCard === 'Credit' ? 'imgCardActive' : 'imgCard'"
      />
      <p
        style="width: 110px"
        :style="
          selectedCard === 'Credit'
            ? 'color:var(--subtitle-color)'
            : 'color:#94a3b8'
        "
        class="fw-bolder fs-5 me-3"
      >
        Credit Card
      </p>
      <Arrow :stroke="selectedCard === 'Credit' ? '#0d6efd' : '#c8ccd0'" />
    </div>
    <div
      @mouseover="active('Pix')"
      @mouseout="selectedCard = ''"
      @click="validationsAction"
      :class="selectedCard === 'Pix' ? 'border-primary' : ''"
      class="
        col
        p-4
        border border-2
        rounded-3
        d-flex
        align-items-center
        justify-content-center
        gap-3
        pointer
      "
    >
      <CreditCard
        :stroke="selectedCard === 'Pix' ? 'white' : '#0d6efd'"
        :class="selectedCard === 'Pix' ? 'imgCardActive' : 'imgCard'"
      />
      <p
        style="width: 110px"
        :style="
          selectedCard === 'Pix'
            ? 'color:var(--subtitle-color)'
            : 'color:#94a3b8'
        "
        class="fw-bolder fs-5 me-3"
      >
        Pix
      </p>
      <Arrow :stroke="selectedCard === 'Pix' ? '#0d6efd' : '#c8ccd0'" />
    </div>
  </div>
</template>

<script setup>
import Arrow from "@/components/images/Arrow.vue";
import CreditCard from "@/components/images/CreditCard.vue";
import { useRouter } from "vue-router";
import { usePlanStore } from "@/stores/plans";
import { ref } from "vue";
const store = usePlanStore();
const router = useRouter();

const selectedCard = ref("");

const active = (paymentMethod) => {
  if (paymentMethod == "Credit") {
    selectedCard.value = "Credit";
  } else if (paymentMethod == "Pix") {
    selectedCard.value = "Pix";
  }
};
const validationsAction = () => {
  router.push({ name: "Details" });
  store.setValidation();
  /* store.plans.setValidation(false); */
};
</script>

<style scoped>
.imgCard {
  background-color: #d3d7db;
  padding: 8px;
  border-radius: 5px;
  box-shadow: 0 6px 24px 0 #d3d7db;
  transition: all 0.3s linear;
}
.imgCardActive {
  background-color: var(--primary-color);
  padding: 8px;
  border-radius: 5px;
  box-shadow: 0 6px 24px 0 var(--primary-color);
}
</style>