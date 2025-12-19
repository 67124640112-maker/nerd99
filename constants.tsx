
import { ShiftType, WardStatus, WardShift } from './types';

export const SHIFT_LABELS: Record<ShiftType, string> = {
  [ShiftType.ALL]: 'ทั้งหมด',
  [ShiftType.MORNING]: 'เช้า',
  [ShiftType.AFTERNOON]: 'บ่าย',
  [ShiftType.NIGHT]: 'ดึก'
};

export const SHIFT_ICONS: Record<ShiftType, string> = {
  [ShiftType.ALL]: 'check',
  [ShiftType.MORNING]: 'wb_sunny',
  [ShiftType.AFTERNOON]: 'light_mode',
  [ShiftType.NIGHT]: 'bedtime'
};

export const MOCK_STAFF = [
  { id: '1', name: 'Nurse A', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtyO9MKB4tVhIpwjaQ3Jr48kWgKywcqtjPlRvSOkgBiyv-f_tSPTL2m3QQ9bDzP-kGhiiiNPmabzL-4GumE1KMwaWl9CzvTInXFg_EN1tWKMYOkFbmVPXesMDUoriAwHSggBlnn7a5dPtW8fbGMS_z5CN3iOBIyCKtAHfxoXYKtElKRDJEVWAc-EGNHEaFgOSbNbprdrn9Oasf4rPrcAY6IRPeGjbJiY_hfuPr5LgWgkp9RNrj5SwDRhUheQLvg6KIed4desvMI0SJ' },
  { id: '2', name: 'Nurse B', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsy9NNCC4IvDR4uyG_G5ihfdbpOGB1UnQX1WBtx2AmLJ0JLaJzKq05ErJHPzIry4C9LknNlsj7U9onYWa6SrwdxJ6sMekD3ekkG5aiWwkl6VpK0a5Mi2j8Regv8txOS8WnfGr4sVDZC5S_NEolG_1yGUxbhnIW6XlAZKrNidTXCr4KmnDB3BM6tSm2OK1d3t0Svygx-p9jhbLH1VwWm3qtmphxMfXsHjZMXfbFz7CgKoUC3YH16NB06RM4_gFLg39aOquCeNlC02Gj' },
  { id: '3', name: 'Nurse C', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANSBH3jbYY7-DO20ThB4Bh645eoAqf3XX4VX9hFGN7t_-OE5b7xI-krgRC1xW_RqHBaBlaeiwtz45Uc6Yy0w3ELOVTduKDOuX7_ZviEmQ3hA9n_VAignpX2ytPjX1KLgRw6DFHoG9K84H8zgIVmwa_MVzVIY8Vv9v5ufxsor4ngzxUizYhHjR_wWRrYk_rsiaq_c-g8AZCVjQmvOcaaOEsnbxPgzFisi5kEG92fihameiJmQtu8bXitPofLIT4Qe-bGRzPkqmEGaNj' },
  { id: '4', name: 'Nurse D', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCG8RNkaol1Gu23Ovtv78zdBpFE6573Qkb-_Y2YBRcfzJ7_1ekv0EJkH1zxryHTrGaNoY51yR8uwFNcV-iQcLbz4RuLbG5_tGA3H3r8MF3nvlUZT8rOSNvRsg0dANPab-fgKp3-4tKkvBD3aIE_NAsCTnsq5rLebF9OBRa4cXrtQjSfD48gNwpV77KHME7DfeQ0xXcFVfETg5TG-YynrcLqBkOujuorfR8BqwpeKXYJ2yPU1nD6AQce2EZPAqCJXE8Jv2hOijQnLsm2' },
  { id: '5', name: 'Nurse E', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSKg0wvQWG5Af8ED1f2JdNwWk4wgx3ReWa-4YAPIUHYBIROpkRj1n3V567PdHXvbLZJldZ2gsC3prCmKv6cKi2BRoHUcVi_OTLuotqOtPbqC-uTHl-aUkfTrJHdDu--vBE8MVb0718RXDJrtAqwFImhWgkBZCs9tLr88A8N0kIfJ5Gbxo9aLn0DLEIndhBxeawwgJBSkNLWCwrbPq1sG8U_QvtfUmeXayNqjgC58IHeiBRt4XE-vBqfmobU4LCnJ250TYUcNsr16DN' },
];

export const MOCK_SHIFTS: WardShift[] = [
  {
    id: 's1',
    wardName: 'หอผู้ป่วยวิกฤต (ICU)',
    type: ShiftType.MORNING,
    timeRange: '07:00 - 15:00',
    requiredStaffCount: 5,
    currentStaff: MOCK_STAFF.slice(0, 4),
    status: WardStatus.URGENT,
    vacancyMessage: 'ว่าง 1 ตำแหน่ง',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkAJ8WxjR0qIGBAxozGS9zzGCvNpIHRJGPf3EH-hymqYQ86HRs-PJJa4iBW13Fv3LJ9jfFPXhEnVE-ZqfcdifuUK8UuYZeXflrDY5W2w3MdmgP6DRTRAcX0fe0GmryRPZUA6wl1s5E_INmng6UlJ9M-0llb9I-j0XIX9hugYro3YQI7La00lpzB9WDyPJbaFRHE_qf2JL-5SWAn-4yRASa3YCTIIVIOklKXBj33GkHmlbj5wWVoHVrR2nt2EpuWy1YRWYL8dH0U1c3'
  },
  {
    id: 's2',
    wardName: 'หอผู้ป่วยสามัญ (General)',
    type: ShiftType.MORNING,
    timeRange: '07:00 - 15:00',
    requiredStaffCount: 3,
    currentStaff: MOCK_STAFF.slice(0, 3),
    status: WardStatus.FULL,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcFch9aoc_O3cvDuFPPo0MwQr4jSChPypD5mNlHxANU1MMsdwMW6Bn1SsE8ruZYPEQC1ivzyHrtA4DEPLxyYUNSzUDipldoB_QfWbrvKyP2KEVQmlxmK4TFCQUSwLc5VsCVj7Ou4AJWrUCjr7ZNZtdRXq515CkyuzZjd3srbcTbK--ltj5n3NSfMCNzxTEZ2WMxtJ0wxVV7fxSdwuWLdL_u2W2HYc20tPgqiTeV3z1Gzdrw9SVaIX1h0SNTldn2Zjc0Y6x2GsLMH67'
  },
  {
    id: 's3',
    wardName: 'ฉุกเฉิน (ER)',
    type: ShiftType.AFTERNOON,
    timeRange: '15:00 - 23:00',
    requiredStaffCount: 4,
    currentStaff: [],
    status: WardStatus.SHORTAGE,
    vacancyMessage: 'ขาด 2 คน',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYi7hyOeHInyMoQ0LL6Ac_qkjZAYrOfRB8HLn2AteHun8wH-P0WXpz-_C0SkdKRT_jSgy5hj8VOCbB-TSvy8_TOXNbbzkMgN4ji-TXvpNE7H9uje8f6bt1w1ba9FYRETd8a7mf0SHWGkJ_mDWnurAmnBmxVrOiL8UB2tuDq5Jq1BeGpBKcs8dyiAU1aQ7kjxs-QwdjjuwZctzvXwZcSTlIdrMpK8stTTTE6Yrg1l1djgYK5TrOcvJQyiyQi1AqxPVMO3gkPZ3LjoSS'
  },
  {
    id: 's4',
    wardName: 'ผู้ป่วยใน (IPD)',
    type: ShiftType.AFTERNOON,
    timeRange: '15:00 - 23:00',
    requiredStaffCount: 6,
    currentStaff: MOCK_STAFF.slice(1, 3),
    status: WardStatus.NORMAL,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFgh0jVkROZwd_t4bA5NdN3KTR8y55qcvQJkopLl3JLGRGBjyBcWCi6XLWVBFsZ8mxGG7LtLVLmvb_XMJvz56kxjFrRiaSbxN9zHkOy2Sgm5ePwHCWBEStUrDU751hJ9zS4aSWltB4xs7w-Yp57DRWwTaxKwUheM5ypPdnNK1-D2kQpmyWR2HBH2seHWSl7C-B0SJLwgEqz6kyPIVKw7HyrIbQudYsadg-movyjzph0w8b5CUA27PCXJepLorxzTVXrnXpkDCutqLB'
  }
];
