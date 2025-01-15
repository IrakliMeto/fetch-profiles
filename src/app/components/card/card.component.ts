import { Component, inject, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalConfirm } from "../modal-confirm/modal.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [CommonModule, ModalConfirm, FormsModule],
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent {
  public isEdit: boolean = false;

  @Input()
  fullName!: string;

  @Input()
  age!: string | number;

  @Input()
  imageSrc!: string;

  private modalService = inject(NgbModal);

  get removeButtonText(): string {
    return this.isEdit ? "Cancel" : "Remove";
  }

  get editButtonText(): string {
    return this.isEdit ? "Save" : "Edit";
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  remove() {
    if (this.isEdit) {
      return this.toggleEdit();
    }
    this.modalService.open(ModalConfirm);
  }

  validateNumber(event: any): void {
    const input = event.target;
    const regex = /^\d{0,3}$/;

    if (!regex.test(input.value)) {
      input.value = input.value.slice(0, -1);
    }
  }
}
