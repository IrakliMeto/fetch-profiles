import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirm',
  standalone: true,
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Remove Profile</h4>

      <button
        type="button"
        class="btn-close"
        aria-describedby="modal-title"
        (click)="modal.dismiss('Cross click')"
      ></button>
    </div>

    <div class="modal-body">
      <p>
        <strong> Are you fucking sure you want to delete </strong>
      </p>
    </div>

    <div class="modal__btn-parent">
      <button
        type="button"
        class="modal__cancel-btn"
        (click)="modal.dismiss('Cancel click')"
      >
        Cancel
      </button>

      <button
        type="button"
        class="modal__remove-btn"
        (click)="modal.close('Ok click')"
      >
        Remove
      </button>
    </div>
  `,
})
export class ModalConfirm {
  modal = inject(NgbActiveModal);
}

export class ModalComponent {}
