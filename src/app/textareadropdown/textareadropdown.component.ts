import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-textareadropdown',
  templateUrl: './textareadropdown.component.html',
  styleUrls: ['./textareadropdown.component.css']
})
export class TextareadropdownComponent {

  showDropdown!: boolean;
  
  inputText = '';
  
   selectedIndex = 0;
  
  @ViewChild ('dropdown') dropdown!: ElementRef
  
  
  
  constructor(private elementRef: ElementRef) { }
  
 ngOnInit(): void {

  }
   options = ["Gina Williams", "Jake Williams", "Jamie John", "John Doe", "Jeff Stewart", "Paula M.Keith"];
  

  
 keydown(event: KeyboardEvent) {
  
  if(event.key === "@") {
  
  this.showDropdown = true;
  
 this.selectedIndex = 0;
  
 } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp'){
  
this.selectedIndex = event.key === 'ArrowDown' ?
  
(this.selectedIndex+1) % this.options.length : (this.selectedIndex-1 + this.options.length) % this.options.length
  
}
  
 else if(event.key === 'Enter')  {
  
  if (this.showDropdown && this.selectedIndex !== -1) {
  
  this.submit(this.options[this.selectedIndex]);
  
 }
  
 }
  
 else {
  
 this.showDropdown = false;
  
  }
  
  }
  
  
  
  
 hidedropdown(event: any) {
  
 if (!this.elementRef.nativeElement.contains(event.target) || this.showDropdown === true) {
  
 this.showDropdown = false;
  
  }
  
 }
  
  
  
  submit(option: any) {
  
 console.log(option);
  
 this.inputText = this.inputText.slice(0,-1)+ option;
  
  console.log(this.inputText.slice(0,-1));
  
  
   this.showDropdown = false;
  
 this.selectedIndex = -1;
  
 this.dropdown.nativeElement.focus();
  
 const box = document.getElementById('box');
  
 if(box!=null) {
  
 box.style.color = 'darkviolet';

 }
  
  }

}
