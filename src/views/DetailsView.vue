<template>
  <form>
    <label for="exampleFormControlInput1" class="form-label"
      >Card details</label
    >

    <div class="input-group">
      <span class="input-group-text col-1" style="height: 38px">
        <CreditCard :stroke="'#0d6efd'" />
      </span>
      <div class="col-6">
        <input
          type="text"
          aria-label="First name"
          class="form-control"
          placeholder="Card number"
          v-model="cardNumber"
        />
        <div class="valid-feedback">Looks good!</div>
      </div>
      <div class="col-3">
        <input
          type="text"
          aria-label="First name"
          class="form-control"
          placeholder="MM/YY"
          v-model="cardDate"
        />
      </div>

      <div class="col-2">
        <input
          type="text"
          class="form-control"
          placeholder="CVC"
          v-model="cardCvc"
        />
      </div>
    </div>

    <div class="d-flex justify-content-between mt-3">
      <div class="mb-3 col-5">
        <label for="fullName" class="form-label">Full name</label>
        <input
          type="text"
          class="form-control"
          id="fullName"
          placeholder="Joao Vitor Ribeiro"
          v-model="fullName"
        />
      </div>
      <div class="mb-3 col-5">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="name@example.com"
          v-model="email"
        />
      </div>
    </div>

    <button @click.prevent="validation" class="btn btn-primary w-100 py-3 mt-3">
      Pay
    </button>
  </form>
</template>

<script>
import CreditCard from "@/components/images/CreditCard.vue";

export default {
  name: "DetailsView",
  components: { CreditCard },
  data() {
    return {
      cardNumber: "",
      cardDate: "",
      cardCvc: "",
      fullName: "",
      email: "",
    };
  },
  methods: {
    successAlert() {
      this.$swal
        .fire(
          "Payment made successfully!",
          "You clicked the button!",
          "success"
        )
        .then((result) => {
          if (result.isConfirmed) {
            this.$router.push("/");
            (this.cardNumber = ""),
              (this.cardDate = ""),
              (this.cardCvc = ""),
              (this.fullName = ""),
              (this.email = "");
          }
        });
    },
    infoAlert() {
      this.$swal.fire(
        "Complete all the fields correctly!",
        "You clicked the button!",
        "error"
      );
    },
    validation() {
      if (
        this.cardNumber.length > 0 &&
        this.cardDate.length > 0 &&
        this.cardCvc.length > 0 &&
        this.fullName.length > 0 &&
        this.email.length > 0
      ) {
        this.successAlert();
      } else {
        this.infoAlert();
      }
    },
  },
};
</script>

