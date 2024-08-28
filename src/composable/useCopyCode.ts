import { ref } from 'vue';

export function useCopyCode() {
  const copied = ref(false);

  const copyCode = (codeText: string) => {
    navigator.clipboard.writeText(codeText)
      .then(() => {
        copied.value = true;
        setTimeout(() => {
          copied.value = false;
        }, 3000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return { copied, copyCode };
}
