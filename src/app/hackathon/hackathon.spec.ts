import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hackathon } from './hackathon';

describe('Hackathon', () => {
  let component: Hackathon;
  let fixture: ComponentFixture<Hackathon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hackathon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hackathon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
