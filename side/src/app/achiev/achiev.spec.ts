import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Achiev } from './achiev';

describe('Achiev', () => {
  let component: Achiev;
  let fixture: ComponentFixture<Achiev>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Achiev]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Achiev);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
