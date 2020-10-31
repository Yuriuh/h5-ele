<template>
  <div class="input-container">
    <div class="input-inner" :class="{ 'is-invalid': error }">
      <input
        :type="type"
        :value="value"
        :placeholder="placeholder"
        :name="name"
        @input="$emit('input', $event.target.value)"
      />
      <button
        v-if="buttonText"
        :disabled="disabled"
        @click="$emit('button-click')"
      >
        {{ buttonText }}
      </button>
    </div>
    <div v-if="error" class="invalid-feedback">{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    type: {
      type: String,
    },
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    name: {
      type: String,
    },
    buttonText: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    error: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.input-container {
  > .input-inner {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    > input {
      height: 100%;
      width: 60%;
      outline: none;
    }
    > button {
      border: none;
      outline: none;
      background: #fff;
      &[disabled] {
        color: #aaa;
      }
    }
    &.is-invalid {
      border: 1px solid red;
    }
    > .invalid-feedback {
      color: red;
      padding-top: 5px;
    }
  }
}
</style>
