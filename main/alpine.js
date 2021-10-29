document.addEventListener("alpine:init", () => {
    Alpine.data("dropdown", () => ({
        open: false,
        toggle: {
            ["@click.prevent"]() {
                this.open = !this.open
            }
        },
        dialogue: {
            ["x-show"]() {
                return this.open
            },
            ["@click.outside"]() {
                this.open = !this.open
            }
        }
    }))
});