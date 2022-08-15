import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalRowComponent } from './proposal-row.component';

describe('ProposalRowComponent', () => {
  let component: ProposalRowComponent;
  let fixture: ComponentFixture<ProposalRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposalRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposalRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
