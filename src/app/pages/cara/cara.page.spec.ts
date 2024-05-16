import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaraPage } from './cara.page';

describe('CaraPage', () => {
  let component: CaraPage;
  let fixture: ComponentFixture<CaraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
