<template>
  <main>
    <div class="container">
      <div class="row gap-4">
        <div
          v-for="plan in plans"
          :key="plan.id"
          class="col-6 col-md w-100 p-4 border border-1 rounded-3"
        >
          <!-- User -->
          <div class="row gap-4 align-items-center" style="width: 270px">
            <div class="col-2">
              <div v-if="plan.title == 'Starter'">
                <Starter width="55px" height="55px" />
              </div>
              <div v-else-if="plan.title == 'Professional'">
                <Professional width="55px" height="55px" />
              </div>
            </div>

            <div class="col-8 d-flex flex-column">
              <span class="fw-bolder">{{ plan.title }}</span>
              <span
                >$ <b>{{ plan.price }}</b> / month</span
              >
            </div>
          </div>
          <!-- User End -->
          <!-- Description -->
          <p class="mt-4 mb-3 fw-bolder">Features include are.</p>
          <div
            v-for="{ id, qtdDescription, subDescriptions } in plan.descriptions"
            :key="id"
            class="d-flex align-items-center"
          >
            <div class="form-check my-1">
              <input
                class="form-check-input"
                type="checkbox"
                :value="qtdDescription + subDescriptions"
                :id="qtdDescription"
              />
              <label class="form-check-label" :for="qtdDescription">
                <span class="fw-bolder">
                  {{ qtdDescription }}
                </span>
                {{ subDescriptions }}
              </label>
            </div>
          </div>
          <!-- Description End -->
          <RouterLink
            :to="{ name: 'paymentmethod.show', params: { id: plan.id } }"
          >
            <button class="btn btn-primary w-100 py-3 mt-3">
              Choose Starter
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
    <p class="text-center mt-5">Do you need more information on plans ?</p>
    <p class="text-center fw-bolder" style="color: #0d6efd">Contact us</p>
  </main>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { usePlanStore } from "@/stores/plans";
import Starter from "../components/images/Starter.vue";
import Professional from "../components/images/Professional.vue";

const store = usePlanStore();
const plans = computed(() => store.plans);
</script>
