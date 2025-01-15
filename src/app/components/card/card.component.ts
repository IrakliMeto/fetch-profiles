import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirm } from '../modal-confirm/modal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ModalConfirm, FormsModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Output()
  deleteCard = new EventEmitter<string>();

  @Input()
  id!: string;

  @Input()
  fullName!: string;

  @Input()
  age!: string | number;

  @Input()
  imageSrc!: string;

  public isEdit: boolean = false;

  private modalService = inject(NgbModal);

  get removeButtonText(): string {
    return this.isEdit ? 'Cancel' : 'Remove';
  }

  get editButtonText(): string {
    return this.isEdit ? 'Save' : 'Edit';
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  async remove() {
    if (this.isEdit) {
      return this.toggleEdit();
    }

    const modal = this.modalService.open(ModalConfirm);

    try {
      await modal.result;

      this.deleteCard.emit(this.id);
    } catch (e) {}
  }

  validateNumber(event: any): void {
    const input = event.target;
    const regex = /^\d{0,3}$/;

    if (!regex.test(input.value)) {
      input.value = input.value.slice(0, -1);
    }
  }
}
