import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassLinksComponent } from './class-links.component';

describe('ClassLinksComponent', () => {
  let component: ClassLinksComponent;
  let fixture: ComponentFixture<ClassLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
