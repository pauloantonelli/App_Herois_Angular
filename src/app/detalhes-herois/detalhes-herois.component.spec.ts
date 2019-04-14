import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesHeroisComponent } from './detalhes-herois.component';

describe('DetalhesHeroisComponent', () => {
  let component: DetalhesHeroisComponent;
  let fixture: ComponentFixture<DetalhesHeroisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesHeroisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesHeroisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
