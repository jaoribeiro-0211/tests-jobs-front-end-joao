<template>
  <main>
    <!-- User -->
    <div class="row align-items-center gap-md-3">
      <div class="col-2 col-sm-2 col-md-1">
        <div v-if="plan.title == 'Starter'">
          <Starter width="55px" height="55px" />
        </div>
        <div v-else-if="plan.title == 'Professional'">
          <Professional width="55px" height="55px" />
        </div>
      </div>
      <!-- User End -->
      <div class="col-4 col-sm-6 d-flex flex-column">
        <span class="fw-bolder">
          {{ plan.title }}
        </span>
        <span
          >$ <b>{{ plan.price }}</b> / month</span
        >
      </div>
      <div class="col-6 col-sm-4">
        <button @click="validationsAction" class="btn btn-primary w-100 py-3">
          Change plan
        </button>
      </div>
    </div>
    <!-- Steppers -->
    <div class="d-flex align-items-center my-5">
      <p
        :class="validations == true ? 'active' : ''"
        class="fw-bolder numberItem"
      >
        <Check v-if="validations == false" />
        <span
          v-else-if="validations == true"
          class="me-2 px-2 py-1 rounded-3 border border-2"
          >1</span
        >Chosse a payment method
      </p>
      <p
        :class="validations == false ? 'active' : ''"
        class="fw-bolder ms-3 numberItem"
      >
        <span class="me-2 px-2 py-1 rounded-3 border border-2">2</span>Payment
        details
      </p>
    </div>
    <!-- Steppers End -->

    <RouterView />
  </main>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { usePlanStore } from "@/stores/plans";
import { useRoute, useRouter } from "vue-router";
import Starter from "@/components/images/Starter.vue";
import Professional from "@/components/images/Professional.vue";
import Check from "../components/images/Check.vue";

const store = usePlanStore();
const route = useRoute();
const router = useRouter();

const validations = computed(() => {
  return store.validation;
});

const validationsAction = () => {
  if (route.name == "Payment") {
    router.push({ name: "Plan" });
  } else {
    router.go(-1);
    store.unSetValitation();
  }
};

const destinationId = computed(() => parseInt(route.params.id));

const plan = computed(() =>
  store.plans.find((plan) => plan.id === destinationId.value)
);

onMounted(() => {
  router.push({ name: "Payment" });
});
</script>

<style scoped>
.numberItem {
  color: #b2b2b2;
}
.numberItem span {
  color: #b2b2b2;
}
.numberItem.active span {
  background-color: #0d6efd;
  border: none !important;
}
.numberItem.active {
  color: var(--subtitle-color);
}
.numberItem.active span {
  color: white;
}
</style>