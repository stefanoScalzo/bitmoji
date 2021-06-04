import { Component, OnInit } from '@angular/core'
import {isIOS, Page} from '@nativescript/core';

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.tns.html',
})
export class ItemsComponent implements OnInit {
  iconView = null;

  constructor(private page: Page) {}

  ngOnInit(): void {
    if(isIOS) {
      this.iconView = SCSDKBitmojiIconView.new();
      this.page.getViewById('bitmoji').setNativeView(this.iconView)

      // SCSDKBitmojiClient.fetchAvatarURLWithCompletion((completion)=> {

      // })

      // let stickerPicker = SCSDKBitmojiStickerPickerViewController.new();

    }
  }
}
