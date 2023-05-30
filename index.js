import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
window.Stimulus = Application.start()

Stimulus.register("copy", class extends Controller {
  static targets = [ "referral", "button", "output" ]

  copy() {
    console.log("button clicked!")
    this.copyReferral()
  }

  copyReferral() {
    const value = this.referralTarget.textContent
    console.log(value)
    navigator.clipboard.writeText(value).then(
      () => {
        console.log("success")
        this.confirmCopy()
      },
      () => {
        console.log("fail")
        this.failedCopy()
      }
    );
  }

  confirmCopy() {
    const output = this.outputTarget
    const message = "Copy successful"
    output.textContent = message
    // setTimeout(() => {
    //   this.deleteMessage(output)
    // }, 2000);
  }

  failedCopy() {
    const output = this.outputTarget
    const message = "Did not copy to clipboard :("
    output.textContent = message
    setTimeout(() => {
      this.deleteMessage(output)
    }, 2000);
  }

  deleteMessage(output) {
    output.textContent = ""
  }
})