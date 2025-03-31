import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { MaterialModules } from '../../modules/material.module';
import { SharedModules } from '../../modules/shared.module';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormBuilder, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'app-profile',
  providers: [provideNativeDateAdapter()],
  imports: [
    SharedModules,
    MaterialModules,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
  
})
export class ProfileComponent {
  protected appearance: MatFormFieldAppearance = 'outline';
  protected floatLabel: any = 'always';
  protected dataprivacyForm: FormGroup;
  protected profileForm: FormGroup;
  protected educationForm: FormGroup;
  protected familyForm: FormGroup;
  protected healthForm: FormGroup;
  protected governmentForm: FormGroup;
  protected otherinfoForm: FormGroup;
  protected completedForm: FormGroup;

   step = signal(0);

  constructor(private fb: FormBuilder) {
    this.dataprivacyForm = this.fb.group({
    });
    
    this.profileForm = this.fb.group({
      frmFirstName: [null, Validators.required],
      frmMiddleName: [null, Validators.required],
      frmLastName: [null, Validators.required],
      frmExtName: [null, Validators.required],
      frmDateBirth: [null, Validators.required],
      frmPlaceBirth: [null, Validators.required],
      frmCivilStatus: [null, Validators.required],
      frmSex: [null, Validators.required],
      frmRegion: [null, Validators.required],
      frmProvince: [null, Validators.required],
      frmCity: [null, Validators.required],
      frmBarangay: [null, Validators.required],
      frmHouseLot: [null, Validators.required],
      frmZipCode: [null, Validators.required],
      frmDisability: [null, Validators.required],
    });

    this.educationForm = this.fb.group({
      frmCollege: [null, Validators.required],
      frmProgram: [null, Validators.required],
      frmYearLevel: [null, Validators.required],
      frmScholarT: [null, Validators.required],
      frmElem: [null, Validators.required],
      frmYearG: [null, Validators.required],
      frmSHSHS: [null, Validators.required],
      frmYearSHSG: [null, Validators.required],
    });

    this.familyForm = this.fb.group({
      frmFatherFN: [null, Validators.required],
      frmFatherMN: [null, Validators.required],
      frmFatherLN: [null, Validators.required],
      frmFatherO: [null, Validators.required],
      frmMotherFN: [null, Validators.required],
      frmMotherMN: [null, Validators.required],
      frmMotherLN: [null, Validators.required],
      frmMotherO: [null, Validators.required],
    });

    this.healthForm = this.fb.group({
      frmVaccinated: [null, Validators.required],
    });

    this.governmentForm = this.fb.group({
    });

    this.otherinfoForm = this.fb.group({
    });

    this.completedForm = this.fb.group({
    });
  }

  isProfileFormValid(): boolean {
    return this.profileForm.valid;
  }

  isProfilePanelDisabled(): boolean {
    return this.profileForm.valid;
  }

  isEducationFormValid(): boolean {
    return this.educationForm.valid;
  }

  isEducationPanelDisabled(): boolean {
    return this.profileForm.valid;
  }

  isFamilyFormValid(): boolean {
    return this.familyForm.valid;
  }

  isFamilyPanelDisabled(): boolean {
    return this.educationForm.valid;
  }

  isHealthFormValid(): boolean {
    return this.healthForm.valid;
  }

  isHealthPanelDisabled(): boolean {
    return this.familyForm.valid;
  }

  isGovernmentPanelDisabled(): boolean {
    return this.healthForm.valid;
  }

  isOtherInfoPanelDisabled(): boolean {
    return this.healthForm.valid;
  }

  isCompletedDisabled(): boolean {
    return this.healthForm.valid;
  }
  
  setStep(index: number) {
    this.step.set(index);
  }

  nextStep() {
    this.step.update(i => i + 1);
  }
}


