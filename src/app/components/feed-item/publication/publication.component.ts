import { Component, Input, OnInit } from '@angular/core';

import { FeedItem } from '@services/wizbii.service';

export interface Publication {
  type: string;
  visibility: string;
  status: string;
  date_created: string;
  date_modified: string;
  content: string;
  tags: { name: string }[];
  attachment_title: string;
  attachment_picture: string;
  attachment_picture_source: string;
  attachment_picture_width: number;
  attachment_picture_height: number;
  comments: any[];
  likes: any[];
  reports: any[];
  poster?: {
    slug: string,
    type: string;
    displayName: string;
  };
}

export interface PublicationItem extends FeedItem {
  reasons: { type: string, reason_steps: any[] }[];
  publication: Publication;
}

@Component({
  selector: 'wizbii-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  @Input() feedItem: PublicationItem;

  constructor() {
  }

  ngOnInit() {
  }

}
