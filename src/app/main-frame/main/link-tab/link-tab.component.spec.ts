import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTabComponent } from './link-tab.component';

describe('LinkTabComponent', () => {
  let component: LinkTabComponent;
  let fixture: ComponentFixture<LinkTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
