let coveragesBaseArray = [
  {
    payer_id: '13162',
    payer_name: '1199 NATIONAL BENEFIT FUND',
  },
  {
    payer_id: '36273',
    payer_name: 'AARP UNITEDHEALTHCARE INSURANCE COMPANY',
  },
  {
    payer_id: 68069,
    payer_name: 'ABSOLUTE TOTAL CARE',
  },
  {
    payer_id: '11009',
    payer_name: 'ACS BENEFIT SERVICES',
  },
  {
    payer_id: 'ASINC',
    payer_name: 'ADMINISTRATIVE SERVICES INCORPORATED',
  },
  {
    payer_id: 'AETNA',
    payer_name: 'AETNA',
  },
  {
    payer_id: 'ABH01',
    payer_name: 'AETNA BETTER HEALTH',
  },
  {
    payer_id: '60054',
    payer_name: 'AETNA INSURANCE COMPANY',
  },
  {
    payer_id: '10897',
    payer_name: 'AETNA SENIOR SUPPLEMENTAL',
  },
  {
    payer_id: '11115',
    payer_name: 'AFFINITY ESSENTIALS',
  },
  {
    payer_id: 'AFLAC',
    payer_name: 'AFLAC',
  },
  {
    payer_id: '10398',
    payer_name: 'AFLAC DENTAL',
  },
  {
    payer_id: 'AFMES',
    payer_name: 'AFLAC MEDICARE SUPPLEMENTAL',
  },
  {
    payer_id: 'ALPBS',
    payer_name: 'ALBUQUERQUE PUBLIC SCHOOLS',
  },
  {
    payer_id: '81040',
    payer_name: 'ALLEGIANCE BENEFIT PLAN MANAGEMENT INCORPORATED',
  },
  {
    payer_id: 'ABSYS',
    payer_name: 'ALLIED BENEFIT SYSTEMS INCORPORATED',
  },
  {
    payer_id: '81400',
    payer_name: 'ALLSAVERS LIFE INSURANCE COMPANY',
  },
  {
    payer_id: '10377',
    payer_name: 'ALLWAYS HEALTH PARTNERS (NEHEN NEIGHBORHOOD HEALTH PLAN)',
  },
  {
    payer_id: '11002',
    payer_name: 'ALTERNATIVE INSURANCE RESOURCES INCORPORATED',
  },
  {
    payer_id: '68069',
    payer_name: 'AMBETTER',
  },
  {
    payer_id: '10985',
    payer_name: 'AMERIBEN SOLUTIONS INCORPORATED',
  },
  {
    payer_id: 'AMFAM',
    payer_name: 'AMERICAN FAMILY INSURANCE GROUP',
  },
  {
    payer_id: 'AFMES',
    payer_name: 'AMERICAN FAMILY LIFE ASSURANCE COMPANY',
  },
  {
    payer_id: '10986',
    payer_name: 'AMERICAN INCOME LIFE INSURANCE COMPANY',
  },
  {
    payer_id: '26119',
    payer_name: 'AMERICAN INSURANCE ADMINISTRATORS (AIA)',
  },
  {
    payer_id: '81400',
    payer_name: 'AMERICAN MEDICAL SECURITY (AMS)',
  },
  {
    payer_id: 'ANICO',
    payer_name: 'AMERICAN NATIONAL INSURANCE COMPANY',
  },
  {
    payer_id: '10899',
    payer_name: 'AMERICAN NETWORK INSURANCE',
  },
  {
    payer_id: 'APWU',
    payer_name: 'AMERICAN POSTAL WORKERS UNION',
  },
  {
    payer_id: 'ARIC',
    payer_name: 'AMERICAN REPUBLIC INSURANCE COMPANY',
  },
  {
    payer_id: 'ARLMS',
    payer_name: 'AMERICAN RETIREMENT LIFE INSURANCE COMPANY MEDICA',
  },
  {
    payer_id: 'ACNJ',
    payer_name: 'AMERICHOICE NEW JERSEY',
  },
  {
    payer_id: 'AGPMEDICAID',
    payer_name: 'AMERIGROUP',
  },
  {
    payer_id: '10416',
    payer_name: 'AMERIHEALTH ADMINISTRATORS',
  },
  {
    payer_id: '45056',
    payer_name: 'AMERIHEALTH CARITAS FLORIDA',
  },
  {
    payer_id: 'LCARE',
    payer_name: 'AMERIHEALTH CARITAS LOUISIANA (LACARE)',
  },
  {
    payer_id: '83148',
    payer_name: 'AMERIHEALTH CARITAS NEXT NORTH CAROLINA',
  },
  {
    payer_id: '81671',
    payer_name: 'AMERIHEALTH CARITAS NORTH CAROLINA',
  },
  {
    payer_id: '77001',
    payer_name: 'AMERIHEALTH CARITAS NORTHEAST (AMERIHEALTH NORTHEAST)',
  },
  {
    payer_id: 'AHMHP',
    payer_name: 'AMERIHEALTH CARITAS PENNSYLVANIA',
  },
  {
    payer_id: '77062',
    payer_name: 'AMERIHEALTH CARITAS VIP CARE',
  },
  {
    payer_id: '77799',
    payer_name: 'AMERIHEALTH DELAWARE',
  },
  {
    payer_id: 'DCCHH',
    payer_name: 'AMERIHEALTH DISTRICT OF COLUMBIA',
  },
  {
    payer_id: '101339',
    payer_name: 'AMERIHEALTH PA COMMUNITY HEALTHCHOICES',
  },
  {
    payer_id: 'AMTAS00425',
    payer_name: 'AMERITAS',
  },
  {
    payer_id: 'AMTAS00428',
    payer_name: 'AMERITAS DENTAL FIRST RELIANCE STANDARD LIFE',
  },
  {
    payer_id: '47009',
    payer_name: 'AMERITAS LIFE INSURANCE CORPORATION',
  },
  {
    payer_id: 'ANTAR',
    payer_name: 'ANTARES MANAGEMENT SOLUTIONS',
  },
  {
    payer_id: '101',
    payer_name: 'ANTHEM - GA',
  },
  {
    payer_id: '040',
    payer_name: 'ANTHEM BC CALIFORNIA',
  },
  {
    payer_id: '84103',
    payer_name: 'ANTHEM BC CALIFORNIA DENTAL',
  },
  {
    payer_id: '0002937',
    payer_name: 'ANTHEM BCBS (OHIO MEDICAID)',
  },
  {
    payer_id: '050',
    payer_name: 'ANTHEM BCBS COLORADO',
  },
  {
    payer_id: 'AD050',
    payer_name: 'ANTHEM BCBS COLORADO DENTAL',
  },
  {
    payer_id: '060',
    payer_name: 'ANTHEM BCBS CONNECTICUT',
  },
  {
    payer_id: 'AD060',
    payer_name: 'ANTHEM BCBS CONNECTICUT DENTAL',
  },
  {
    payer_id: '130',
    payer_name: 'ANTHEM BCBS INDIANA',
  },
  {
    payer_id: 'AD130',
    payer_name: 'ANTHEM BCBS INDIANA DENTAL',
  },
  {
    payer_id: '160',
    payer_name: 'ANTHEM BCBS KENTUCKY',
  },
  {
    payer_id: 'AD160',
    payer_name: 'ANTHEM BCBS KENTUCKY DENTAL',
  },
  {
    payer_id: '180',
    payer_name: 'ANTHEM BCBS MAINE',
  },
  {
    payer_id: 'AD180',
    payer_name: 'ANTHEM BCBS MAINE DENTAL',
  },
  {
    payer_id: '241',
    payer_name: 'ANTHEM BCBS MISSOURI',
  },
  {
    payer_id: 'AD241',
    payer_name: 'ANTHEM BCBS MISSOURI DENTAL',
  },
  {
    payer_id: '265',
    payer_name: 'ANTHEM BCBS NEVADA',
  },
  {
    payer_id: 'AD265',
    payer_name: 'ANTHEM BCBS NEVADA DENTAL',
  },
  {
    payer_id: '270',
    payer_name: 'ANTHEM BCBS NEW HAMPSHIRE',
  },
  {
    payer_id: 'AD270',
    payer_name: 'ANTHEM BCBS NEW HAMPSHIRE DENTAL',
  },
  {
    payer_id: '332',
    payer_name: 'ANTHEM BCBS OHIO',
  },
  {
    payer_id: 'AD332',
    payer_name: 'ANTHEM BCBS OHIO DENTAL',
  },
  {
    payer_id: '423',
    payer_name: 'ANTHEM BCBS VIRGINIA',
  },
  {
    payer_id: 'AD423',
    payer_name: 'ANTHEM BCBS VIRGINIA DENTAL',
  },
  {
    payer_id: '450',
    payer_name: 'ANTHEM BCBS WISCONSIN',
  },
  {
    payer_id: 'AD450',
    payer_name: 'ANTHEM BCBS WISCONSIN DENTAL',
  },
  {
    payer_id: '958',
    payer_name: 'ANTHEM MAINEHEALTH',
  },
  {
    payer_id: '265',
    payer_name: 'ANTHEM MEDICAID NEVADA',
  },
  {
    payer_id: 'CBGA1',
    payer_name: 'ANTHEM-GA DENTAL',
  },
  {
    payer_id: 'ARCHB',
    payer_name: 'ARCHBOLD MEDICAL CENTER',
  },
  {
    payer_id: '68069',
    payer_name: 'ARIZONA COMPLETE HEALTH',
  },
  {
    payer_id: '03432',
    payer_name: 'ARIZONA PHYSICIANS IPA',
  },
  {
    payer_id: '00520',
    payer_name: 'ARKANSAS BCBS',
  },
  {
    payer_id: 'ARKANSASBCBSOTHERBLUEPLANS',
    payer_name: 'ARKANSAS BCBS OTHER BLUE PLANS',
  },
  {
    payer_id: '68069',
    payer_name: 'ARKANSAS TOTAL CARE',
  },
  {
    payer_id: '87726',
    payer_name: 'ARNETT HEALTH PLANS',
  },
  {
    payer_id: '68069',
    payer_name: 'ASCENSION COMPLETE',
  },
  {
    payer_id: '10984',
    payer_name: 'ASR HEALTH BENEFITS',
  },
  {
    payer_id: '93221',
    payer_name: 'ASURIS NORTHWEST HEALTH',
  },
  {
    payer_id: 'ASURIS NORTHWEST HEALTH',
    payer_name: 'ASURIS NORTHWEST HEALTH',
  },
  {
    payer_id: '93221D',
    payer_name: 'ASURIS NORTHWEST HEALTH DENTAL',
  },
  {
    payer_id: '87020',
    payer_name: 'ATLANTIC COAST LIFE INSURANCE',
  },
  {
    payer_id: 'ATRIO',
    payer_name: 'ATRIO HEALTH PLANS',
  },
  {
    payer_id: '10472',
    payer_name: 'AULTCARE',
  },
  {
    payer_id: '10890',
    payer_name: 'AUTOMATED BENEFIT SERVICES (ABS)',
  },
  {
    payer_id: '10900',
    payer_name: 'AUXIANT',
  },
  {
    payer_id: '10869',
    payer_name: 'AVERA HEALTH PLANS',
  },
  {
    payer_id: '592742907',
    payer_name: 'AVMED',
  },
  {
    payer_id: '11238',
    payer_name: 'BANKERS FIDELITY LIFE INSURANCE COMPANY',
  },
  {
    payer_id: '10813',
    payer_name: 'BANKERS LIFE AND CASUALTY',
  },
  {
    payer_id: '12X42',
    payer_name: 'BANNER HEALTH',
  },
  {
    payer_id: '12X42',
    payer_name: 'BANNER HEALTH (HEALTHNET SENIOR)',
  },
  {
    payer_id: '12X42',
    payer_name: 'BANNER HEALTH (UHC MEDICARE ADVANTAGE)',
  },
  {
    payer_id: '12X42',
    payer_name: 'BANNER PLAN ADMINISTRATION (CHOICE PLUS AND SELECT 500) ',
  },
  {
    payer_id: '66901',
    payer_name: 'BANNER UNIVERSITY FAMILY CARE (UNIVERSITY OF ARIZONA HEALTH PLANS)',
  },
  {
    payer_id: '12265',
    payer_name: 'BAYCARE SELECT HEALTH PLANS INCORPORATED',
  },
  {
    payer_id: 'BCIDC',
    payer_name: 'BC IDAHO',
  },
  {
    payer_id: '100954',
    payer_name: 'BC NEW YORK NORTHEASTERN',
  },
  {
    payer_id: '00510BC',
    payer_name: 'BCBS ALABAMA INSTITUTIONAL',
  },
  {
    payer_id: '00510BS',
    payer_name: 'BCBS ALABAMA PROFESSIONAL',
  },
  {
    payer_id: '10993',
    payer_name: 'BCBS ANTHEM VIVITY',
  },
  {
    payer_id: '53589',
    payer_name: 'BCBS ARIZONA',
  },
  {
    payer_id: '00520',
    payer_name: 'BCBS ARKANSAS',
  },
  {
    payer_id: '100026',
    payer_name: 'BCBS DELAWARE',
  },
  {
    payer_id: '47181',
    payer_name: 'BCBS DELAWARE HIGHMARK HEALTH OPTIONS INCORPORATED',
  },
  {
    payer_id: '100937',
    payer_name: 'BCBS HAWAII',
  },
  {
    payer_id: 'G00621',
    payer_name: 'BCBS ILLINOIS',
  },
  {
    payer_id: '100032',
    payer_name: 'BCBS IOWA',
  },
  {
    payer_id: 'BCBSKS',
    payer_name: 'BCBS KANSAS',
  },
  {
    payer_id: '10034',
    payer_name: 'BCBS KANSAS',
  },
  {
    payer_id: '53120',
    payer_name: 'BCBS LOUISIANA',
  },
  {
    payer_id: '700',
    payer_name: 'BCBS MASSACHUSETTS',
  },
  {
    payer_id: '00710P',
    payer_name: 'BCBS MICHIGAN',
  },
  {
    payer_id: 'BCMIC00710D',
    payer_name: 'BCBS MICHIGAN (DENTAL)',
  },
  {
    payer_id: '00720',
    payer_name: 'BCBS MINNESOTA',
  },
  {
    payer_id: '100041',
    payer_name: 'BCBS MISSISSIPPI',
  },
  {
    payer_id: 'BCMS',
    payer_name: 'BCBS MISSISSIPPI',
  },
  {
    payer_id: 'G00751',
    payer_name: 'BCBS MONTANA',
  },
  {
    payer_id: '100043',
    payer_name: 'BCBS NEBRASKA',
  },
  {
    payer_id: 'BCNEC',
    payer_name: 'BCBS NEBRASKA',
  },
  {
    payer_id: '100046',
    payer_name: 'BCBS NEW JERSEY',
  },
  {
    payer_id: 'G00790',
    payer_name: 'BCBS NEW MEXICO',
  },
  {
    payer_id: '100948',
    payer_name: 'BCBS NEW YORK WESTERN',
  },
  {
    payer_id: 'BCSNC',
    payer_name: 'BCBS NORTH CAROLINA',
  },
  {
    payer_id: '100050',
    payer_name: 'BCBS NORTH DAKOTA',
  },
  {
    payer_id: 'BCNDC',
    payer_name: 'BCBS NORTH DAKOTA',
  },
  {
    payer_id: 'G00840',
    payer_name: 'BCBS OKLAHOMA',
  },
  {
    payer_id: '100900',
    payer_name: 'BCBS PENNSYLVANIA NORTHEAST',
  },
  {
    payer_id: '100338',
    payer_name: 'BCBS PENNSYLVANIA NORTHWEST',
  },
  {
    payer_id: 'BCPRC',
    payer_name: 'BCBS PUERTO RICO (TRIPLE S SALUD)',
  },
  {
    payer_id: 'BCRIC',
    payer_name: 'BCBS RHODE ISLAND',
  },
  {
    payer_id: '00401',
    payer_name: 'BCBS SOUTH CAROLINA',
  },
  {
    payer_id: '100054',
    payer_name: 'BCBS SOUTH CAROLINA',
  },
  {
    payer_id: 'BCSCC',
    payer_name: 'BCBS SOUTH CAROLINA',
  },
  {
    payer_id: '100896',
    payer_name: 'BCBS SOUTH DAKOTA',
  },
  {
    payer_id: 'BCSDC',
    payer_name: 'BCBS SOUTH DAKOTA',
  },
  {
    payer_id: 'SB890',
    payer_name: 'BCBS TENNESSEE',
  },
  {
    payer_id: 'G84980',
    payer_name: 'BCBS TEXAS',
  },
  {
    payer_id: '10624',
    payer_name: 'BCBS VERMONT',
  },
  {
    payer_id: '100947',
    payer_name: 'BCBS WEST VIRGINIA',
  },
  {
    payer_id: '53767',
    payer_name: 'BCBS WYOMING',
  },
  {
    payer_id: '00562',
    payer_name: 'BCBSMN BLUE PLUS MEDICAID',
  },
  {
    payer_id: 'BMNKS',
    payer_name: 'BENEFIT MANAGEMENT INCORPORATED OF KANSAS',
  },
  {
    payer_id: 'BHPTN',
    payer_name: 'BETTER HEALTH PLAN (UNISON HEALTH PLAN)',
  },
  {
    payer_id: '25463',
    payer_name: 'BIND',
  },
  {
    payer_id: '10803',
    payer_name: 'BLUE BENEFIT ADMINISTRATORS MASSACHUSETTS',
  },
  {
    payer_id: '772',
    payer_name: 'BLUE MEDICARE ADVANTAGE',
  },
  {
    payer_id: 'BLRDE',
    payer_name: 'BLUERIDE NON-EMERG TRANSPORTATION',
  },
  {
    payer_id: '101043',
    payer_name: 'BOON CHAPMAN BENEFIT ADMINISTRATORS',
  },
  {
    payer_id: '100957',
    payer_name: 'BOSTON MEDICAL CENTER HEALTHNET PLAN',
  },
  {
    payer_id: '84367',
    payer_name: 'BRAVEN HEALTH',
  },
  {
    payer_id: 'BRIDG',
    payer_name: 'BRIDGESPAN',
  },
  {
    payer_id: 'BRIDGD',
    payer_name: 'BRIDGESPAN HEALTH COMPANY DENTAL',
  },
  {
    payer_id: 'BRFRX',
    payer_name: 'BRIDGESTONE AMERICAS INCORPORATED',
  },
  {
    payer_id: '68069',
    payer_name: 'BRIDGEWAY HEALTH SOLUTIONS',
  },
  {
    payer_id: 'BRGHT',
    payer_name: 'BRIGHT HEALTHCARE',
  },
  {
    payer_id: '100935',
    payer_name: 'BS CALIFORNIA',
  },
  {
    payer_id: '100062',
    payer_name: 'BS WASHINGTON',
  },
  {
    payer_id: '68069',
    payer_name: 'BUCKEYE HEALTH PLAN',
  },
  {
    payer_id: '68069',
    payer_name: 'CALIFORNIA HEALTH AND WELLNESS',
  },
  {
    payer_id: '101160',
    payer_name: 'CALOPTIMA',
  },
  {
    payer_id: '100952',
    payer_name: 'CAPITAL BLUE CROSS PENNSYLVANIA',
  },
  {
    payer_id: '10458',
    payer_name: 'CAPITAL DISTRICT PHYSICIANS HEALTH PLAN (CDPHP)',
  },
  {
    payer_id: '95112',
    payer_name: 'CAPITAL HEALTH PLAN',
  },
  {
    payer_id: '10903',
    payer_name: 'CAPITOL ADMINISTRATORS',
  },
  {
    payer_id: 'CAPHP',
    payer_name: 'CAPROCK HEALTH PLANS',
  },
  {
    payer_id: '10981',
    payer_name: 'CARE 1ST HEALTH PLAN ARIZONA',
  },
  {
    payer_id: '57116',
    payer_name: 'CARE 1ST HEALTH PLAN ARIZONA',
  },
  {
    payer_id: '87726',
    payer_name: 'CARE IMPROVEMENT PLUS',
  },
  {
    payer_id: '101222',
    payer_name: 'CARE MANAGEMENT COMPANY',
  },
  {
    payer_id: '66010',
    payer_name: 'CARE N CARE',
  },
  {
    payer_id: '68069',
    payer_name: 'Care1st Health Plan Arizona (AHCCS Complete Care)',
  },
  {
    payer_id: '68069',
    payer_name: 'Care1st Health Plan Arizona (RHBA)',
  },
  {
    payer_id: '190',
    payer_name: 'CAREFIRST BCBS',
  },
  {
    payer_id: 'BCDCC',
    payer_name: 'CAREFIRST BCBS DISTRICT OF COLUMBIA',
  },
  {
    payer_id: 'BHOVO',
    payer_name: 'CARELON BEHAVIORAL HEALTH',
  },
  {
    payer_id: 'CARMO',
    payer_name: 'CAREMORE',
  },
  {
    payer_id: '95092',
    payer_name: 'CAREPLUS',
  },
  {
    payer_id: 'CRSCK',
    payer_name: 'CARESOURCE (FHM)',
  },
  {
    payer_id: 'KYCS1',
    payer_name: 'CARESOURCE HUMANA',
  },
  {
    payer_id: 'INCS1',
    payer_name: 'CARESOURCE INDIANA',
  },
  {
    payer_id: 'NCCS1',
    payer_name: 'CARESOURCE NORTH CAROLINA',
  },
  {
    payer_id: 'GACS1',
    payer_name: 'CARESOURCE OF GEORGIA',
  },
  {
    payer_id: 'CARESOURCE OF OHIO',
    payer_name: 'CARESOURCE OHIO',
  },
  {
    payer_id: '31114',
    payer_name: 'CARESOURCE OHIO',
  },
  {
    payer_id: '0003150',
    payer_name: 'CARESOURCE OHIO MEDICAID MCE',
  },
  {
    payer_id: 'WVCS1',
    payer_name: 'CARESOURCE WEST VIRGINIA',
  },
  {
    payer_id: '68069',
    payer_name: 'CAROLINA COMPLETE HEALTH',
  },
  {
    payer_id: 'CHWSL',
    payer_name: 'CARPENTERS HEALTH AND WELFARE TRUST FUND ST LOUIS',
  },
  {
    payer_id: '87020',
    payer_name: 'CATHOLIC LIFE INSURANCE',
  },
  {
    payer_id: '87020',
    payer_name: 'CATHOLIC UNITED FINANCIAL',
  },
  {
    payer_id: '68069',
    payer_name: 'CELTICARE HEALTH',
  },
  {
    payer_id: '101173',
    payer_name: 'CENCAL',
  },
  {
    payer_id: '68068',
    payer_name: 'CENPATICO BEHAVIORAL HEALTH',
  },
  {
    payer_id: '68069',
    payer_name: 'CENTENE',
  },
  {
    payer_id: '68069',
    payer_name: 'CENTENE MEDICARE',
  },
  {
    payer_id: '0004202',
    payer_name: 'CENTENE OHIO MEDICAID MCE',
  },
  {
    payer_id: '45564',
    payer_name: 'CENTIVO',
  },
  {
    payer_id: '10621',
    payer_name: 'CENTRAL BENEFITS',
  },
  {
    payer_id: '10884',
    payer_name: 'CENTRAL CALIFORNIA ALLIANCE FOR HEALTH',
  },
  {
    payer_id: '13193',
    payer_name: 'CENTRAL RESERVE LIFE INSURANCE COMPANY',
  },
  {
    payer_id: '10539',
    payer_name: 'CENTRAL RESERVE LIFE INSURANCE COMPANY (MEDICARE SUPPLEMENT)',
  },
  {
    payer_id: 'CSFND',
    payer_name: 'CENTRAL STATES FUND',
  },
  {
    payer_id: '100429',
    payer_name: 'CENTRAL STATES HEALTH AND LIFE (TEAMCARE)',
  },
  {
    payer_id: '77153',
    payer_name: 'CGS HEALTH',
  },
  {
    payer_id: '100901',
    payer_name: 'CHAMP VA',
  },
  {
    payer_id: '10061',
    payer_name: 'CHAMPVA SPINA BIFIDA CHILDREN OF WOMEN VIETNAM VETS',
  },
  {
    payer_id: 'CHCS',
    payer_name: 'CHCS SERVICES INCORPORATED',
  },
  {
    payer_id: '10906',
    payer_name: 'CHILDRENS MERCY PCN',
  },
  {
    payer_id: '10907',
    payer_name: 'CHP DIRECT',
  },
  {
    payer_id: 'CBSAB',
    payer_name: 'CHRISTIAN BROTHERS SERVICES',
  },
  {
    payer_id: '10908',
    payer_name: 'CHRISTIAN BROTHERS SERVICES',
  },
  {
    payer_id: '59355',
    payer_name: 'CHRISTIAN CARE MINISTRIES',
  },
  {
    payer_id: '62308',
    payer_name: 'CIGNA',
  },
  {
    payer_id: 'ELDER',
    payer_name: 'CIGNA HEALTHSPRING (BRAVO HEALTH ELDER HEALTH)',
  },
  {
    payer_id: '13193',
    payer_name: 'CIGNA SUPPLEMENTAL',
  },
  {
    payer_id: '11001T',
    payer_name: 'CLAIMS MANAGEMENT SERVICE INCORPORATED',
  },
  {
    payer_id: 'CLEAR',
    payer_name: 'CLEAR HEALTH ALLIANCE',
  },
  {
    payer_id: 'CRPHP',
    payer_name: 'CLOVER HEALTH',
  },
  {
    payer_id: '10909',
    payer_name: 'CMFG LIFE INSURANCE',
  },
  {
    payer_id: '10852',
    payer_name: 'COLONIAL PENN LIFE',
  },
  {
    payer_id: 'COACC',
    payer_name: 'COLORADO ACCESS ',
  },
  {
    payer_id: 'COCHA',
    payer_name: 'COLORADO COMMUNITY HEALTH ALLIANCE',
  },
  {
    payer_id: 'A2793',
    payer_name: 'COMMONWEALTH CARE ALLIANCE (CCA)',
  },
  {
    payer_id: 'CCOOK',
    payer_name: 'COMMUNITY CARE OKLAHOMA',
  },
  {
    payer_id: 'COMMF',
    payer_name: 'COMMUNITY FIRST HEALTH PLANS',
  },
  {
    payer_id: '48145',
    payer_name: 'COMMUNITY HEALTH CHOICE',
  },
  {
    payer_id: '95376',
    payer_name: 'COMMUNITY HEALTH GROUP',
  },
  {
    payer_id: '60495',
    payer_name: 'COMMUNITY HEALTH PLAN INCORPORATED',
  },
  {
    payer_id: 'CHPWA',
    payer_name: 'COMMUNITY HEALTH PLAN OF WASHINGTON',
  },
  {
    payer_id: '10421',
    payer_name: 'COMMUNITY HEALTHFIRST MEDICARE ADVANTAGE',
  },
  {
    payer_id: '37363',
    payer_name: 'COMPSYCH',
  },
  {
    payer_id: '100347',
    payer_name: 'CONNECTICARE',
  },
  {
    payer_id: '101259',
    payer_name: 'CONNECTICARE MEDICARE',
  },
  {
    payer_id: 'CARIL',
    payer_name: 'CONSOLIDATED ASSOCIATES RAILROAD',
  },
  {
    payer_id: '10669',
    payer_name: 'CONSOLIDATED ASSOCIATES RAILROAD',
  },
  {
    payer_id: 'CGIMS',
    payer_name: 'CONTINENTAL GENERAL INSURANCE COMPANY',
  },
  {
    payer_id: 'CTLGN',
    payer_name: 'CONTINENTAL GENERAL INSURANCE COMPANY',
  },
  {
    payer_id: '13193',
    payer_name: 'CONTINENTAL GENERAL INSURANCE COMPANY MEDICARE SUPPLEMENT',
  },
  {
    payer_id: '10610',
    payer_name: 'COOK CHILDRENS HEALTH PLAN',
  },
  {
    payer_id: '77153',
    payer_name: 'COOK GROUP SOLUTIONS',
  },
  {
    payer_id: '60065',
    payer_name: 'COOK MEDICAL GROUP',
  },
  {
    payer_id: '68069',
    payer_name: 'COORDINATED CARE',
  },
  {
    payer_id: '10311',
    payer_name: 'CORESOURCE (FMH)',
  },
  {
    payer_id: 'CORSE00204',
    payer_name: 'CORESOURCE (FMH)',
  },
  {
    payer_id: 'CORSE00205',
    payer_name: 'CORESOURCE (LITTLE ROCK)',
  },
  {
    payer_id: 'CRSAR',
    payer_name: 'CORESOURCE (LITTLE ROCK)',
  },
  {
    payer_id: 'CRSMD',
    payer_name: 'CORESOURCE (MARYLAND PENNSYLVANIA ILLINOIS)',
  },
  {
    payer_id: '38225',
    payer_name: 'CORESOURCE DETROIT',
  },
  {
    payer_id: '41124',
    payer_name: 'CORPORATE BENEFIT SERVICES OF AMERICA (CBSA)',
  },
  {
    payer_id: 'CNTYF',
    payer_name: 'COUNTRY LIFE INSURANCE COMPANY',
  },
  {
    payer_id: 'CTYCR',
    payer_name: 'COUNTYCARE',
  },
  {
    payer_id: '10838',
    payer_name: 'COX HEALTH PLAN',
  },
  {
    payer_id: 'CREAT',
    payer_name: 'CREATE',
  },
  {
    payer_id: 'CREA8',
    payer_name: 'CREATE HEALTH PLAN',
  },
  {
    payer_id: '10775',
    payer_name: 'CULINARY HEALTH FUND',
  },
  {
    payer_id: '10775T',
    payer_name: 'CULINARY HEALTH FUND UNITE HERE HEALTH',
  },
  {
    payer_id: '100442',
    payer_name: 'DAKOTA CARE',
  },
  {
    payer_id: '10577',
    payer_name: 'DAKOTACARE',
  },
  {
    payer_id: 'A3326',
    payer_name: 'DECENT',
  },
  {
    payer_id: '10828',
    payer_name: 'DEFINITY HEALTH',
  },
  {
    payer_id: '68069',
    payer_name: 'DELAWARE FIRST HEALTH',
  },
  {
    payer_id: 'DDPNM',
    payer_name: 'DELTA DENTAL NEW MEXICO',
  },
  {
    payer_id: 'CX014',
    payer_name: 'DENTAQUEST',
  },
  {
    payer_id: '84135',
    payer_name: 'DENVER HEALTH MEDICAL PLAN',
  },
  {
    payer_id: 'DMBAU',
    payer_name: 'DESERET MUTUAL (DMBA)',
  },
  {
    payer_id: '10578',
    payer_name: 'DESERET MUTUAL (DMBA)',
  },
  {
    payer_id: 'DEVOT',
    payer_name: 'DEVOTED HEALTH',
  },
  {
    payer_id: '77153',
    payer_name: 'DH COOK ASSOCIATES',
  },
  {
    payer_id: 'BC001',
    payer_name: 'DIRECTORS GUILD OF AMERICA',
  },
  {
    payer_id: '16565',
    payer_name: 'EASTERN MAINE HEALTHCARE SYSTEMS (EMHS) EMPLOYEE HEALTH PLAN',
  },
  {
    payer_id: '14163',
    payer_name: 'EASY CHOICE HEALTH PLAN CALIFORNIA',
  },
  {
    payer_id: '81039',
    payer_name: 'EBMS',
  },
  {
    payer_id: 'EPF03',
    payer_name: 'EL PASO FIRST HEALTH PLANS CHIP',
  },
  {
    payer_id: '31625',
    payer_name: 'ELDERPLAN',
  },
  {
    payer_id: 'EMBLM',
    payer_name: 'EMBLEM HEALTH',
  },
  {
    payer_id: '13551',
    payer_name: 'EMBLEM HEALTH - GROUP HEALTH INCORPORATED (GHI)',
  },
  {
    payer_id: 'SX110',
    payer_name: 'EMI HEALTH',
  },
  {
    payer_id: '303',
    payer_name: 'EMPIRE BC NEW YORK',
  },
  {
    payer_id: 'CBNY1',
    payer_name: 'EMPIRE BC NEW YORK DENTAL',
  },
  {
    payer_id: '84105',
    payer_name: 'EMPIRE BCBS NEW YORK',
  },
  {
    payer_id: '803',
    payer_name: 'EMPIRE BCBS NEW YORK',
  },
  {
    payer_id: '81039',
    payer_name: 'EMPLOYEE BENEFIT MANAGEMENT SYSTEM (EBMS)',
  },
  {
    payer_id: '10621',
    payer_name: 'EMPLOYERS HEALTH COALITION (HEALTHSCOPE)',
  },
  {
    payer_id: '12956',
    payer_name: 'EMPOWER ARKANSAS',
  },
  {
    payer_id: '36878',
    payer_name: 'ENTRUST',
  },
  {
    payer_id: '10601',
    payer_name: 'ESSENCE HEALTHCARE',
  },
  {
    payer_id: '10807',
    payer_name: 'EVERCARE',
  },
  {
    payer_id: 'EVERC',
    payer_name: 'EVERENCE FINANCIAL',
  },
  {
    payer_id: '93240',
    payer_name: 'EVERGREEN HEALTH COOPERATIVE',
  },
  {
    payer_id: 'EH001',
    payer_name: 'EVRY HEALTH',
  },
  {
    payer_id: '10323',
    payer_name: 'EXCELLUS BCBS NEW YORK',
  },
  {
    payer_id: '100940',
    payer_name: 'EXCELLUS BCBS NEW YORK',
  },
  {
    payer_id: '71412',
    payer_name: 'EXCLUSICARE',
  },
  {
    payer_id: 'FALLN',
    payer_name: 'FALLON COMMUNITY HEALTH PLAN',
  },
  {
    payer_id: '11315',
    payer_name: 'FIDELIS CARE NEW YORK',
  },
  {
    payer_id: 'AMTAS00426',
    payer_name: 'FIRST AMERITAS NEW YORK',
  },
  {
    payer_id: 'FCC01',
    payer_name: 'FIRST CAROLINA CARE',
  },
  {
    payer_id: '91131',
    payer_name: 'FIRST CHOICE HEALTH NETWORK',
  },
  {
    payer_id: 'FCHRT',
    payer_name: 'FIRST COMMUNITY HEALTH PLAN',
  },
  {
    payer_id: '10916',
    payer_name: 'FIRST MEDICAL NETWORK',
  },
  {
    payer_id: '10987',
    payer_name: 'FIRST UNITED AMERICAN INSURANCE COMPANY',
  },
  {
    payer_id: 'FCC01',
    payer_name: 'FIRSTMEDICARE DIRECT',
  },
  {
    payer_id: 'BCBSF',
    payer_name: 'FLORIDA BLUE (BCBS FLORIDA)',
  },
  {
    payer_id: '593222484',
    payer_name: 'FLORIDA HEALTH CARE PLANS',
  },
  {
    payer_id: '15460I',
    payer_name: 'FREEDOM BLUE MEDICARE ADANTAGE INSTITUTIONAL',
  },
  {
    payer_id: '15460P',
    payer_name: 'FREEDOM BLUE MEDICARE ADANTAGE PROFESSIONAL',
  },
  {
    payer_id: '41212',
    payer_name: 'FREEDOM HEALTH PLAN',
  },
  {
    payer_id: '62308',
    payer_name: 'Freedom Life Insurance Company of America',
  },
  {
    payer_id: '11069',
    payer_name: 'FRINGE BENEFITS',
  },
  {
    payer_id: '10629T',
    payer_name: 'GATEWAY HEALTH PLAN',
  },
  {
    payer_id: '60550',
    payer_name: 'GATEWAY HEALTH PLAN MEDICARE ASSURED',
  },
  {
    payer_id: '44054',
    payer_name: 'GEHA CONNECTION DENTAL FEDERAL',
  },
  {
    payer_id: '75273',
    payer_name: 'GEISINGER HEALTH PLAN',
  },
  {
    payer_id: '11065',
    payer_name: 'GEMCARE',
  },
  {
    payer_id: '10808',
    payer_name: 'GHI GROUP HEALTH INCORPORATED',
  },
  {
    payer_id: '07205',
    payer_name: 'GILSBAR',
  },
  {
    payer_id: '10988',
    payer_name: 'GLOBE LIFE AND ACCIDENT INSURANCE COMPANY',
  },
  {
    payer_id: 'A6865',
    payer_name: 'GOLD KIDNEY HEALTH PLAN',
  },
  {
    payer_id: '37602',
    payer_name: 'GOLDEN RULE',
  },
  {
    payer_id: '10652',
    payer_name: 'GOLDEN RULE INSURANCE',
  },
  {
    payer_id: 'GWD01',
    payer_name: 'GOLDEN WEST DENTAL',
  },
  {
    payer_id: '44054',
    payer_name: 'GOVERNMENT EMPLOYEES HEALTH ASSOCIATION (GEHA)',
  },
  {
    payer_id: '68069',
    payer_name: 'GRANITE STATE HEALTH PLAN',
  },
  {
    payer_id: 'GAIMS',
    payer_name: 'GREAT AMERICAN LIFE ASSURANCE COMPANY',
  },
  {
    payer_id: '101045',
    payer_name: 'GROUP AND PENSION ADMINISTRATORS',
  },
  {
    payer_id: 'CGRPR',
    payer_name: 'GROUP PRACTICE AFFILIATES',
  },
  {
    payer_id: '08135',
    payer_name: 'GUNDERSON HEALTH PLAN',
  },
  {
    payer_id: '14163',
    payer_name: 'HARMONY HEALTH PLAN',
  },
  {
    payer_id: '100141',
    payer_name: 'HARVARD PILGRIM HEALTH CARE',
  },
  {
    payer_id: '86066',
    payer_name: 'HAWAII MAINLAND ADMINISTRATORS',
  },
  {
    payer_id: '48330',
    payer_name: 'HAWAII MANAGEMENT ALLIANCE ASSOCIATION (HMAA)',
  },
  {
    payer_id: '100937',
    payer_name: 'HAWAII MEDICAL SERVICES ASSOCIATION (HMSA)',
  },
  {
    payer_id: '10871',
    payer_name: 'HEALTH ALLIANCE MEDICAL PLAN ILLINOIS',
  },
  {
    payer_id: 'HAPMC',
    payer_name: 'HEALTH ALLIANCE PLAN',
  },
  {
    payer_id: '25126',
    payer_name: 'HEALTH AMERICA INCORPORATED HEALTH ASSURANCE ADVANTRA',
  },
  {
    payer_id: 'HCOAZ',
    payer_name: 'HEALTH CHOICE ARIZONA',
  },
  {
    payer_id: '13054',
    payer_name: 'HEALTH CHOICE GENERATIONS UTAH',
  },
  {
    payer_id: '45399',
    payer_name: 'HEALTH CHOICE UTAH',
  },
  {
    payer_id: '62111',
    payer_name: 'HEALTH COST SOLUTIONS',
  },
  {
    payer_id: '10673',
    payer_name: 'HEALTH FIRST HEALTH PLAN',
  },
  {
    payer_id: 'HFRST',
    payer_name: 'HEALTH FIRST INSURANCE',
  },
  {
    payer_id: 'HNNC',
    payer_name: 'HEALTH NET',
  },
  {
    payer_id: '100146',
    payer_name: 'HEALTH NET NATIONAL',
  },
  {
    payer_id: '10627',
    payer_name: 'HEALTH NEW ENGLAND',
  },
  {
    payer_id: 'HPPA',
    payer_name: 'HEALTH PARTNERS PHILADELPHIA',
  },
  {
    payer_id: '10804',
    payer_name: 'HEALTH PLAN NEVADA',
  },
  {
    payer_id: '68035',
    payer_name: 'HEALTH PLAN SAN JOAQUIN',
  },
  {
    payer_id: '10362',
    payer_name: 'HEALTH PLAN SAN MATEO',
  },
  {
    payer_id: '10657',
    payer_name: 'HEALTH PLAN UPPER OHIO VALLEY',
  },
  {
    payer_id: '44273',
    payer_name: 'HEALTH PLANS INCORPORATED',
  },
  {
    payer_id: 'HSCSN',
    payer_name: 'HEALTH SERVICES FOR CHILDREN WITH SPECIAL NEEDS',
  },
  {
    payer_id: 'ORHSM',
    payer_name: 'HEALTH SHARE OREGON',
  },
  {
    payer_id: 'HLTHT',
    payer_name: 'HEALTH TRADITION',
  },
  {
    payer_id: 'HCH01',
    payer_name: 'HEALTHCARE HIGHWAYS',
  },
  {
    payer_id: 'HMA01',
    payer_name: 'HEALTHCARE MANAGEMENT ADMINISTRATORS (HMA)',
  },
  {
    payer_id: '71064',
    payer_name: 'HEALTHCHOICE',
  },
  {
    payer_id: '95376',
    payer_name: 'HealthChoice of Connecticut',
  },
  {
    payer_id: '71070',
    payer_name: 'HEALTHCHOICE SELECT',
  },
  {
    payer_id: 'HCOMP',
    payer_name: 'HEALTHCOMP (COMMUNITY FIRST STAR HEALTH PLAN)',
  },
  {
    payer_id: 'THEXI',
    payer_name: 'HEALTHE EXCHANGE',
  },
  {
    payer_id: '14163',
    payer_name: 'HEALTHEASE',
  },
  {
    payer_id: '14163',
    payer_name: 'HEALTHEASE KIDS',
  },
  {
    payer_id: '41178',
    payer_name: 'HEALTHEZ',
  },
  {
    payer_id: '80141',
    payer_name: 'HEALTHFIRST HEALTH PLAN NEW JERSEY',
  },
  {
    payer_id: 'HFNJ',
    payer_name: 'HEALTHFIRST HEALTH PLAN NEW JERSEY',
  },
  {
    payer_id: '80141',
    payer_name: 'HEALTHFIRST INCORPORATED NEW YORK',
  },
  {
    payer_id: 'PRMPC',
    payer_name: 'HEALTHGRAM INCORPORATED',
  },
  {
    payer_id: '10500',
    payer_name: 'HEALTHNOW',
  },
  {
    payer_id: '80142',
    payer_name: 'HEALTHPARTNERS PENNSYLVANIA',
  },
  {
    payer_id: '10802',
    payer_name: 'HEALTHPLANS INCORPORATED',
  },
  {
    payer_id: 'HLTPM',
    payer_name: 'HEALTHPLUS MICHIGAN',
  },
  {
    payer_id: '10621',
    payer_name: 'HEALTHSCOPE BENEFITS',
  },
  {
    payer_id: '71063',
    payer_name: 'HEALTHSCOPE BENEFITS INCORPORATED',
  },
  {
    payer_id: '35092',
    payer_name: 'HEALTHSCOPE BENEFITS INCORPORATED (MORRIS ASSOCIATES)',
  },
  {
    payer_id: '71084',
    payer_name: 'HEALTHSCOPE HSB',
  },
  {
    payer_id: 'HSBS',
    payer_name: 'HEALTHSMART BENEFIT SOLUTIONS',
  },
  {
    payer_id: 'AN',
    payer_name: 'HEALTHSMART BENEFIT SOLUTIONS - WEST VIRGINIA',
  },
  {
    payer_id: '101008',
    payer_name: 'HEALTHSPRING',
  },
  {
    payer_id: '10552',
    payer_name: 'HEALTHSPRINGS',
  },
  {
    payer_id: '551',
    payer_name: 'HEALTHY BLUE DUAL ADVANTAGE LOUISIANA',
  },
  {
    payer_id: '661',
    payer_name: 'HEALTHY BLUE LOUISIANA',
  },
  {
    payer_id: '541',
    payer_name: 'HEALTHY BLUE MISSOURI',
  },
  {
    payer_id: '544',
    payer_name: 'HEALTHY BLUE NEBRASKA',
  },
  {
    payer_id: '602',
    payer_name: 'HEALTHY BLUE NORTH CAROLINA',
  },
  {
    payer_id: '383',
    payer_name: 'HEALTHY BLUE SOUTH CAROLINA',
  },
  {
    payer_id: 'CHLTX',
    payer_name: 'HEALTHY TEXAS',
  },
  {
    payer_id: '60058',
    payer_name: 'HENNEPIN HEALTH',
  },
  {
    payer_id: '47181',
    payer_name: 'HIGHMARK BCBS DELAWARE HEALTH OPTIONS INCORPORATED',
  },
  {
    payer_id: '54771I',
    payer_name: 'HIGHMARK BCBS PENNSYLVANIA INSTITUTIONAL',
  },
  {
    payer_id: '54771',
    payer_name: 'HIGHMARK BCBS PENNSYLVANIA PROFESSIONAL',
  },
  {
    payer_id: '54828',
    payer_name: 'HIGHMARK BCBS WEST VIRGINIA',
  },
  {
    payer_id: '246',
    payer_name: 'HIGHMARK BLUE CROSS BLUE SHIELD OF WESTERN NEW YORK',
  },
  {
    payer_id: 'BCBSCAIDWNY',
    payer_name: 'HIGHMARK BLUE CROSS BLUE SHIELD OF WESTERN NEW YORK',
  },
  {
    payer_id: '10406',
    payer_name: 'HIP NEW YORK',
  },
  {
    payer_id: '68069',
    payer_name: 'HOME STATE HEALTH PLAN',
  },
  {
    payer_id: '10335',
    payer_name: 'HOMETOWN HEALTH',
  },
  {
    payer_id: '34150',
    payer_name: 'HOMETOWN HEALTH NETWORK',
  },
  {
    payer_id: 'BCNJC',
    payer_name: 'HORIZON BCBS NEW JERSEY',
  },
  {
    payer_id: '22326',
    payer_name: 'HORIZON NEW JERSEY HEALTH',
  },
  {
    payer_id: '141650868',
    payer_name: 'HUDSON HEALTH PLAN',
  },
  {
    payer_id: 'HUMANA',
    payer_name: 'HUMANA',
  },
  {
    payer_id: '61103',
    payer_name: 'HUMANA - HEALTHY HORIZONS (OHIO MEDICAID)',
  },
  {
    payer_id: 'HUMANA-CARESOURCE',
    payer_name: 'HUMANA CARESOURCE',
  },
  {
    payer_id: '61115',
    payer_name: 'HUMANA LONG TERM CARE',
  },
  {
    payer_id: 'IBMOS',
    payer_name: 'IBM INSURANCE OUTSOURCING SERVICES',
  },
  {
    payer_id: '68069',
    payer_name: 'ILLINICARE HEALTH PLAN',
  },
  {
    payer_id: '10417',
    payer_name: 'INDEPENDENCE ADMINISTRATORS',
  },
  {
    payer_id: 'TA720',
    payer_name: 'INDEPENDENCE ADMINISTRATORS',
  },
  {
    payer_id: '100337',
    payer_name: 'INDEPENDENCE BC PENNSYLVANIA',
  },
  {
    payer_id: '10536',
    payer_name: 'INDEPENDENT HEALTH',
  },
  {
    payer_id: 'PRO-HEALTH',
    payer_name: 'INDIANA PRO HEALTH NETWORK',
  },
  {
    payer_id: '26212',
    payer_name: 'INDIANA UNIVERISTY HEALTH PLAN COMMERCIAL',
  },
  {
    payer_id: '95444',
    payer_name: 'INDIANA UNIVERSITY HEALTH PLAN',
  },
  {
    payer_id: 'IEHP1',
    payer_name: 'INLAND EMPIRE HEALTH PLAN',
  },
  {
    payer_id: '10104',
    payer_name: 'INLAND EMPIRE HEALTH PLAN',
  },
  {
    payer_id: '40025',
    payer_name: 'INNOVATION HEALTH',
  },
  {
    payer_id: '51020',
    payer_name: 'INTEGRA ADMINISTRATIVE GROUP',
  },
  {
    payer_id: '10585',
    payer_name: 'INTEGRATED MENTAL HEALTH SERVICES',
  },
  {
    payer_id: '68069',
    payer_name: 'IOWA TOTAL CARE',
  },
  {
    payer_id: 'ISLAH',
    payer_name: 'ISLAND HOME INSURANCE',
  },
  {
    payer_id: 'PFINL00143',
    payer_name: 'J F MALLOY AND ASSOCIATES',
  },
  {
    payer_id: 'JAI01',
    payer_name: 'JAI MEDICAL SYSTEMS HC',
  },
  {
    payer_id: 'JHFHP',
    payer_name: 'JOHN HOPKINS US FAMILY HEALTH PLAN',
  },
  {
    payer_id: 'JNHPS',
    payer_name: 'JOHNS HOPKINS ADVANTAGE MD',
  },
  {
    payer_id: '52189',
    payer_name: 'JOHNS HOPKINS EMPLOYEE HEALTH PLAN',
  },
  {
    payer_id: '52189',
    payer_name: 'JOHNS HOPKINS EMPLOYER HEALTH PROGRAMS (EHP)',
  },
  {
    payer_id: '52189',
    payer_name: 'JOHNS HOPKINS HEALTHCARE LLC',
  },
  {
    payer_id: '52189',
    payer_name: 'JOHNS HOPKINS PRIORITY PARTNERS',
  },
  {
    payer_id: '100173',
    payer_name: 'KAISER FOUNDATION COLORADO',
  },
  {
    payer_id: 'KSRHI',
    payer_name: 'KAISER FOUNDATION HEALTH PLAN HAWAII',
  },
  {
    payer_id: 'KSRA',
    payer_name: 'KAISER FOUNDATION HEALTH PLAN MID ATLANTIC',
  },
  {
    payer_id: 'NW002',
    payer_name: 'KAISER FOUNDATION HEALTH PLAN NORTHWEST',
  },
  {
    payer_id: 'KSERD',
    payer_name: 'Kaiser Foundation Health Plan of Hawaii (DHMO Choice)',
  },
  {
    payer_id: '91051',
    payer_name: 'KAISER FOUNDATION HEALTH PLAN WASHINGTON',
  },
  {
    payer_id: '00278',
    payer_name: 'KAISER FOUNDATION HEALTH PLAN, INC. - HAWAII REGION',
  },
  {
    payer_id: '100181',
    payer_name: 'KAISER FOUNDATION MID ATLANTIC',
  },
  {
    payer_id: '100178',
    payer_name: 'KAISER FOUNDATION NORTHWEST',
  },
  {
    payer_id: '100186',
    payer_name: 'KAISER PERMANENTE GEORGIA',
  },
  {
    payer_id: 'KSRCN',
    payer_name: 'KAISER PERMANENTE NORTHERN CALIFORNIA',
  },
  {
    payer_id: 'KSRCS',
    payer_name: 'KAISER PERMANENTE SOUTHERN CALIFORNIA',
  },
  {
    payer_id: '73066',
    payer_name: 'KEMPER HEALTH',
  },
  {
    payer_id: '11067',
    payer_name: 'KEY BENEFIT ADMINISTRATORS (INDIANAPOLIS INDIANA)',
  },
  {
    payer_id: '37217',
    payer_name: 'KEY BENEFIT ADMINISTRATORS (INDIANAPOLIS INDIANA)',
  },
  {
    payer_id: '23284',
    payer_name: 'KEYSTONE FIRST',
  },
  {
    payer_id: '42344',
    payer_name: 'KEYSTONE FIRST COMMUNITY HEALTHCHOICES',
  },
  {
    payer_id: 'KYMHP',
    payer_name: 'KEYSTONE MERCY HEALTH PLAN',
  },
  {
    payer_id: '10341',
    payer_name: 'KITSAP PHYSICIAN SERVICES',
  },
  {
    payer_id: '10748',
    payer_name: 'KSKJ LIFE',
  },
  {
    payer_id: 'LACAR',
    payer_name: 'LA CARE HEALTH PLAN (CALIFORNIA)',
  },
  {
    payer_id: 'LMCHP',
    payer_name: 'LEON MEDICAL CENTER HEALTH PLAN',
  },
  {
    payer_id: '10989',
    payer_name: 'LIBERTY NATIONAL LIFE INSURANCE COMPANY',
  },
  {
    payer_id: '10843',
    payer_name: 'LIFEWISE ARIZONA',
  },
  {
    payer_id: '93095',
    payer_name: 'LIFEWISE ASSURANCE COMPANY',
  },
  {
    payer_id: '93093',
    payer_name: 'LIFEWISE HEALTH PLAN OF OREGON',
  },
  {
    payer_id: '93094',
    payer_name: 'LIFEWISE HEALTH PLAN OF WASHINGTON',
  },
  {
    payer_id: '10749',
    payer_name: 'LINCOLN HERITAGE',
  },
  {
    payer_id: '100580',
    payer_name: 'LOOMIS COMPANY',
  },
  {
    payer_id: '10830',
    payer_name: 'LOUISIANA HEALTH EXCHANGE',
  },
  {
    payer_id: '68069',
    payer_name: 'LOUISIANA HEALTHCARE CONNECTIONS',
  },
  {
    payer_id: '13193',
    payer_name: 'LOYAL AMERICAN LIFE INSURANCE COMPANY',
  },
  {
    payer_id: 'LALMS',
    payer_name: 'LOYAL AMERICAN LIFE INSURANCE COMPANY',
  },
  {
    payer_id: '01260',
    payer_name: 'MAGELLAN HEALTHCARE',
  },
  {
    payer_id: '10867',
    payer_name: 'MAGNACARE',
  },
  {
    payer_id: '68069',
    payer_name: 'MAGNOLIA HEALTH',
  },
  {
    payer_id: 'MNCHO',
    payer_name: 'MAINE COMMUNITY HEALTH OPTIONS',
  },
  {
    payer_id: '10122',
    payer_name: 'MAMSI HEALTH PLAN',
  },
  {
    payer_id: 'MGDCA',
    payer_name: 'MANAGED CARE OF AMERICA',
  },
  {
    payer_id: '65030',
    payer_name: 'MANAGED CARE OF NORTH AMERICA (MCNA) DENTAL',
  },
  {
    payer_id: '22771',
    payer_name: 'MANAGED HEALTH NETWORKS (MHN)',
  },
  {
    payer_id: '68069',
    payer_name: 'MANAGED HEALTH SERVICES INDIANA',
  },
  {
    payer_id: '52461',
    payer_name: 'MARCH VISION CARE INCORPORATED',
  },
  {
    payer_id: 'MCAA',
    payer_name: 'MARICOPA CARE ADVANTAGE (ARIZONA)',
  },
  {
    payer_id: '53275',
    payer_name: 'MARTINS POINT HEALTH CARE',
  },
  {
    payer_id: '83269',
    payer_name: 'MARY WASHINGTON HEALTH PLAN',
  },
  {
    payer_id: 'MPCSA',
    payer_name: 'MARYLAND PHYSICIANS CARE',
  },
  {
    payer_id: '76498',
    payer_name: 'MARYLAND PHYSICIANS CARE',
  },
  {
    payer_id: '86220',
    payer_name: 'MASS ADVANTAGE',
  },
  {
    payer_id: 'BHOMA',
    payer_name: 'MASSACHUSETTS BEHAVIORAL HEALTH (BHO)',
  },
  {
    payer_id: '3833A',
    payer_name: 'MCLAREN HEALTH ADVANTAGE',
  },
  {
    payer_id: '38338',
    payer_name: 'MCLAREN HEALTH PLAN',
  },
  {
    payer_id: '3833C',
    payer_name: 'MCLAREN MEDICAID',
  },
  {
    payer_id: '3833S',
    payer_name: 'MCLAREN MEDICARE SUPPLEMENT',
  },
  {
    payer_id: 'MEDPY',
    payer_name: 'MED PAY',
  },
  {
    payer_id: 'MBMLF',
    payer_name: 'MEDBEN',
  },
  {
    payer_id: '10272',
    payer_name: 'MEDCOST BENEFIT SERVICES',
  },
  {
    payer_id: '59355',
    payer_name: 'Medi-Share',
  },
  {
    payer_id: '94265',
    payer_name: 'MEDICA',
  },
  {
    payer_id: 'MEDM1',
    payer_name: 'MEDICA GOVERNMENT PROGRAMS',
  },
  {
    payer_id: '71890',
    payer_name: 'MEDICA HEALTH PLAN SOLUTIONS',
  },
  {
    payer_id: '12422',
    payer_name: 'MEDICA IFB',
  },
  {
    payer_id: '100005',
    payer_name: 'MEDICAID ALABAMA',
  },
  {
    payer_id: 'SKAK0',
    payer_name: 'MEDICAID ALASKA',
  },
  {
    payer_id: 'AZ',
    payer_name: 'MEDICAID ARIZONA',
  },
  {
    payer_id: 'ARMCD',
    payer_name: 'MEDICAID ARKANSAS',
  },
  {
    payer_id: '100065',
    payer_name: 'MEDICAID CALIFORNIA MEDI-CAL',
  },
  {
    payer_id: '100083',
    payer_name: 'MEDICAID COLORADO',
  },
  {
    payer_id: 'CTMCD',
    payer_name: 'MEDICAID CONNECTICUT',
  },
  {
    payer_id: '100371',
    payer_name: 'MEDICAID DELAWARE',
  },
  {
    payer_id: '100121',
    payer_name: 'MEDICAID DISTRICT OF COLUMBIA',
  },
  {
    payer_id: '77027',
    payer_name: 'MEDICAID FLORIDA',
  },
  {
    payer_id: 'GAMEDICAID',
    payer_name: 'MEDICAID GEORGIA',
  },
  {
    payer_id: 'HI',
    payer_name: 'MEDICAID HAWAII',
  },
  {
    payer_id: 'ID',
    payer_name: 'MEDICAID IDAHO',
  },
  {
    payer_id: 'IL621',
    payer_name: 'MEDICAID ILLINOIS',
  },
  {
    payer_id: 'IHCP',
    payer_name: 'MEDICAID INDIANA',
  },
  {
    payer_id: '100171',
    payer_name: 'MEDICAID IOWA',
  },
  {
    payer_id: '10116',
    payer_name: 'MEDICAID KANSAS',
  },
  {
    payer_id: 'KYMEDICAID',
    payer_name: 'MEDICAID KENTUCKY',
  },
  {
    payer_id: '100193',
    payer_name: 'MEDICAID LOUISIANA',
  },
  {
    payer_id: '100196',
    payer_name: 'MEDICAID MAINE',
  },
  {
    payer_id: '100198',
    payer_name: 'MEDICAID MARYLAND',
  },
  {
    payer_id: '526002033',
    payer_name: 'MEDICAID MARYLAND DHMH',
  },
  {
    payer_id: '100199',
    payer_name: 'MEDICAID MASSACHUSETTS',
  },
  {
    payer_id: 'D00111',
    payer_name: 'MEDICAID MICHIGAN',
  },
  {
    payer_id: 'DPWMN',
    payer_name: 'MEDICAID MINNESOTA',
  },
  {
    payer_id: '100209',
    payer_name: 'MEDICAID MISSISSIPPI',
  },
  {
    payer_id: '100211',
    payer_name: 'MEDICAID MISSOURI',
  },
  {
    payer_id: '100222',
    payer_name: 'MEDICAID MONTANA',
  },
  {
    payer_id: 'MT',
    payer_name: 'MEDICAID MONTANA',
  },
  {
    payer_id: 'A8512',
    payer_name: 'MEDICAID NEBRASKA',
  },
  {
    payer_id: '10152',
    payer_name: 'MEDICAID NEVADA',
  },
  {
    payer_id: 'NV',
    payer_name: 'MEDICAID NEVADA',
  },
  {
    payer_id: '100228',
    payer_name: 'MEDICAID NEW HAMPSHIRE',
  },
  {
    payer_id: '100229',
    payer_name: 'MEDICAID NEW JERSEY',
  },
  {
    payer_id: 'NM',
    payer_name: 'MEDICAID NEW MEXICO',
  },
  {
    payer_id: 'NY',
    payer_name: 'MEDICAID NEW YORK',
  },
  {
    payer_id: '100231',
    payer_name: 'MEDICAID NEW YORK',
  },
  {
    payer_id: 'NCMCD',
    payer_name: 'MEDICAID NORTH CAROLINA',
  },
  {
    payer_id: 'MMISODJFS',
    payer_name: 'MEDICAID OHIO',
  },
  {
    payer_id: 'OHCA1',
    payer_name: 'MEDICAID OKLAHOMA',
  },
  {
    payer_id: '100237',
    payer_name: 'MEDICAID OREGON',
  },
  {
    payer_id: '236003113',
    payer_name: 'MEDICAID PENNSYLVANIA',
  },
  {
    payer_id: 'SCMED',
    payer_name: 'MEDICAID SOUTH CAROLINA',
  },
  {
    payer_id: 'SD',
    payer_name: 'MEDICAID SOUTH DAKOTA',
  },
  {
    payer_id: 'TN',
    payer_name: 'MEDICAID TENNESSEE',
  },
  {
    payer_id: '10186',
    payer_name: 'MEDICAID TEXAS',
  },
  {
    payer_id: '00350',
    payer_name: 'MEDICAID TEXAS AND TEXAS HEALTH STEPS',
  },
  {
    payer_id: '10648',
    payer_name: 'MEDICAID UTAH',
  },
  {
    payer_id: '100302',
    payer_name: 'MEDICAID VERMONT',
  },
  {
    payer_id: '10198',
    payer_name: 'MEDICAID VIRGINIA',
  },
  {
    payer_id: 'AIDWA',
    payer_name: 'MEDICAID WASHINGTON (PROVIDER ONE)',
  },
  {
    payer_id: '100305',
    payer_name: 'MEDICAID WEST VIRGINIA',
  },
  {
    payer_id: '100306',
    payer_name: 'MEDICAID WISCONSIN',
  },
  {
    payer_id: '100307',
    payer_name: 'MEDICAID WYOMING',
  },
  {
    payer_id: 'WY',
    payer_name: 'MEDICAID WYOMING',
  },
  {
    payer_id: 'MASHP',
    payer_name: 'MEDICAL ASSOCIATES HEALTH PLAN HEALTH CHOICES',
  },
  {
    payer_id: '29076',
    payer_name: 'MEDICAL MUTUAL',
  },
  {
    payer_id: '11000',
    payer_name: 'MEDICARE ADVANTAGE  PENNSYLVANIA',
  },
  {
    payer_id: 'FBM01',
    payer_name: 'MEDICARE FLORIDA BLUE',
  },
  {
    payer_id: 'MEDMC',
    payer_name: 'MEDICARE Y MUCHO MAS',
  },
  {
    payer_id: 'L0210',
    payer_name: 'MEDICARE Y MUCHO MAS (MMM)',
  },
  {
    payer_id: 'MEDCO',
    payer_name: 'MEDICO INSURANCE COMPANY',
  },
  {
    payer_id: '10800',
    payer_name: 'MEDIGOLD HEALTH PLANS',
  },
  {
    payer_id: 'DCMED',
    payer_name: 'MEDSTAR FAMILY CARE',
  },
  {
    payer_id: '10844',
    payer_name: 'MEDSTAR FAMILY CHOICE',
  },
  {
    payer_id: '10845',
    payer_name: 'MEDSTAR HEALTH PLAN',
  },
  {
    payer_id: 'AZM01',
    payer_name: 'MERCY CARE ARIZONA',
  },
  {
    payer_id: '86052',
    payer_name: 'MERCY CARE PLAN (AHCCCS)',
  },
  {
    payer_id: '10133',
    payer_name: 'MERCY CARE PLAN (ARIZONA)',
  },
  {
    payer_id: '22326',
    payer_name: 'MERCY HEALTH PLAN OF NEW JERSEY',
  },
  {
    payer_id: '33628',
    payer_name: 'MERCY MARICOPA INTEGRATED CARE',
  },
  {
    payer_id: 'MHPIL',
    payer_name: 'MERIDIAN HEALTH PLAN ILLINOIS',
  },
  {
    payer_id: '13189',
    payer_name: 'MERIDIAN HEALTH PLAN ILLINOIS',
  },
  {
    payer_id: '13189',
    payer_name: 'MERIDIAN HEALTH PLAN ILLINOIS COMPLETE',
  },
  {
    payer_id: 'MHPIL',
    payer_name: 'MERIDIAN HEALTH PLAN ILLINOIS COMPLETE',
  },
  {
    payer_id: '13189',
    payer_name: 'MERIDIAN HEALTH PLAN ILLINOIS MEDICAID',
  },
  {
    payer_id: 'MHPMI',
    payer_name: 'MERIDIAN HEALTH PLAN MICHIGAN COMPLETE',
  },
  {
    payer_id: 'MTAIN',
    payer_name: 'MERITAIN HEALTH',
  },
  {
    payer_id: '41124',
    payer_name: 'MERITAIN HEALTH MINNEAPOLIS',
  },
  {
    payer_id: '10134',
    payer_name: 'METLIFE DENTAL FAMILY',
  },
  {
    payer_id: '13265',
    payer_name: 'METROPLUS HEALTH PLAN',
  },
  {
    payer_id: '87726',
    payer_name: 'Metropolitan Property and Casualty Insurance Company',
  },
  {
    payer_id: '87726',
    payer_name: 'METROPOLITAN PROPERTY AND CASUALTY INSURANCE COMPANY',
  },
  {
    payer_id: '68069',
    payer_name: 'MHS WISCONSIN HEALTH',
  },
  {
    payer_id: '82832',
    payer_name: "MIAMI CHILDREN'S HEALTH PLAN",
  },
  {
    payer_id: '87726',
    payer_name: 'MICHAEL REESE',
  },
  {
    payer_id: '68069',
    payer_name: 'MICHIGAN COMPLETE HEALTH',
  },
  {
    payer_id: '68069',
    payer_name: 'MICHIGAN COMPLETE HEALTH (FIDELIS SECURE LIFE)',
  },
  {
    payer_id: '10138',
    payer_name: 'MICHILD MICHIGAN',
  },
  {
    payer_id: '10140',
    payer_name: 'MISSISSIPPI CHILDRENS HEALTH INSURANCE PROGRAM',
  },
  {
    payer_id: 'SEHP',
    payer_name: 'MISSISSIPPI STATE EMPLOYEE HEALTH PLAN (SEHP)',
  },
  {
    payer_id: '13350',
    payer_name: 'MODA HEALTH (ODS HEALTH PLAN)',
  },
  {
    payer_id: 'MLNAZ',
    payer_name: 'MOLINA COMPLETE CARE OF ARIZONA MEDICAID',
  },
  {
    payer_id: 'MLNVA',
    payer_name: 'MOLINA COMPLETE CARE OF VIRGINIA',
  },
  {
    payer_id: 'MLNCA',
    payer_name: 'MOLINA HEALTHCARE CALIFORNIA',
  },
  {
    payer_id: 'MLNFL',
    payer_name: 'MOLINA HEALTHCARE FLORIDA',
  },
  {
    payer_id: '12270',
    payer_name: 'MOLINA HEALTHCARE IDAHO',
  },
  {
    payer_id: 'MLNIL',
    payer_name: 'MOLINA HEALTHCARE ILLINOIS',
  },
  {
    payer_id: 'MLNMI',
    payer_name: 'MOLINA HEALTHCARE MICHIGAN',
  },
  {
    payer_id: 'MLNNV',
    payer_name: 'MOLINA HEALTHCARE NEVADA',
  },
  {
    payer_id: 'CIMS',
    payer_name: 'MOLINA HEALTHCARE NEW MEXICO',
  },
  {
    payer_id: 'MLNOH',
    payer_name: 'MOLINA HEALTHCARE OHIO',
  },
  {
    payer_id: 'MLNSC',
    payer_name: 'MOLINA HEALTHCARE SOUTH CAROLINA',
  },
  {
    payer_id: 'MLNTX',
    payer_name: 'MOLINA HEALTHCARE TEXAS',
  },
  {
    payer_id: 'MLNUT',
    payer_name: 'MOLINA HEALTHCARE UTAH',
  },
  {
    payer_id: 'MLNWA',
    payer_name: 'MOLINA HEALTHCARE WASHINGTON',
  },
  {
    payer_id: 'MLNWI',
    payer_name: 'MOLINA HEALTHCARE WISCONSIN',
  },
  {
    payer_id: '0007316',
    payer_name: 'MOLINA OHIO MEDICAID MCE',
  },
  {
    payer_id: '65465',
    payer_name: 'MORECARE',
  },
  {
    payer_id: '10621',
    payer_name: 'MORRIS ASSOCIATES',
  },
  {
    payer_id: 'MTNST',
    payer_name: 'MOUNTAIN STATE BCBS WEST VIRGINIA',
  },
  {
    payer_id: 'MNHBF',
    payer_name: 'MUNICIPAL HEALTH BENEFIT FUND',
  },
  {
    payer_id: '71412',
    payer_name: 'MUTUAL COMMERCIAL',
  },
  {
    payer_id: '10775',
    payer_name: 'Mutual Group The US',
  },
  {
    payer_id: '34192',
    payer_name: 'MUTUAL HEALTH SERVICES',
  },
  {
    payer_id: '71412',
    payer_name: 'MUTUAL OF OMAHA',
  },
  {
    payer_id: '71412',
    payer_name: 'MUTUALLY PREFERRED',
  },
  {
    payer_id: '14165',
    payer_name: 'MVP CHILD HEALTH PLUS',
  },
  {
    payer_id: '14165',
    payer_name: 'MVP HEALTH CARE',
  },
  {
    payer_id: '14165',
    payer_name: 'MVP HEALTH PLAN',
  },
  {
    payer_id: 'MVP',
    payer_name: 'MVP HEALTH PLAN NEW YORK',
  },
  {
    payer_id: '14165',
    payer_name: 'MVP HEALTH PLAN NEW YORK',
  },
  {
    payer_id: '14165',
    payer_name: 'MVP MEDICAID MANAGED CARE',
  },
  {
    payer_id: 'NALC',
    payer_name: 'NATIONAL ASSOCIATION OF LETTER CARRIERS (NALC)',
  },
  {
    payer_id: '87020',
    payer_name: 'NATIONAL GUARDIAN LIFE INSURANCE',
  },
  {
    payer_id: 'CMS',
    payer_name: 'NATIONAL MEDICARE CMS',
  },
  {
    payer_id: '10812',
    payer_name: 'NATIONAL TELECOMMUNICATIONS COOPERATIVE ASSOCIATION (NTCA)',
  },
  {
    payer_id: '68069',
    payer_name: 'NEBRASKA TOTAL CARE',
  },
  {
    payer_id: '10377',
    payer_name: 'NEHEN NEIGHBORHOOD HEALTH PLAN',
  },
  {
    payer_id: '87726',
    payer_name: 'Neighborhood Health Partnership',
  },
  {
    payer_id: '10151',
    payer_name: 'NEIGHBORHOOD HEALTH PARTNERSHIP (NHP)',
  },
  {
    payer_id: '10630',
    payer_name: 'NEIGHBORHOOD HEALTH PLAN RHODE ISLAND',
  },
  {
    payer_id: '04332',
    payer_name: 'NETWORK HEALTH',
  },
  {
    payer_id: '77076',
    payer_name: 'NETWORK HEALTH INSURANCE CORPORATION MEDICARE  NHIC',
  },
  {
    payer_id: 'NETHP',
    payer_name: 'NETWORK HEALTH PLAN',
  },
  {
    payer_id: '10991',
    payer_name: 'NEW ERA LIFE INSURANCE COMPANY',
  },
  {
    payer_id: '14165',
    payer_name: 'NEW YORK PREFERRED CARE',
  },
  {
    payer_id: '38225',
    payer_name: 'NGS AMERICAN INCORPORATED',
  },
  {
    payer_id: '68069',
    payer_name: 'NH HEALTHY FAMILIES',
  },
  {
    payer_id: 'NIPON',
    payer_name: 'NIPPON LIFE BENEFITS',
  },
  {
    payer_id: '10537',
    payer_name: 'NOVA HEALTHCARE',
  },
  {
    payer_id: 'NOVAS',
    payer_name: 'NOVASYS HEALTH',
  },
  {
    payer_id: 'A5236',
    payer_name: 'OCHSNER HEALTH PLAN',
  },
  {
    payer_id: '13350',
    payer_name: 'OEA CHOICE TRUST',
  },
  {
    payer_id: '14163',
    payer_name: 'OHANA HEALTH PLAN',
  },
  {
    payer_id: '10995',
    payer_name: 'OKLAHOMA EMPLOYEES GROUP INSURANCE',
  },
  {
    payer_id: 'OKSTE',
    payer_name: 'OKLAHOMA EMPLOYEES GROUP INSURANCE DIVISION HEALTHCHOICE',
  },
  {
    payer_id: 'COVTY00413',
    payer_name: 'OMNICARE',
  },
  {
    payer_id: '100663',
    payer_name: 'OPERATING ENGINEERS LOCAL 428',
  },
  {
    payer_id: '10477',
    payer_name: 'OPTIMA SENTARA',
  },
  {
    payer_id: 'OPT01',
    payer_name: 'OPTIMUM HEALTHCARE INCORPORATED',
  },
  {
    payer_id: '00773',
    payer_name: 'OPTUM HEALTH VISION',
  },
  {
    payer_id: 'LIFE1',
    payer_name: 'OPTUM MEDICAL NETWORK (LIFEPRINT NETWORK)',
  },
  {
    payer_id: '87726',
    payer_name: 'OPTUM UNITED HEALTH BEHAVIORAL SOLUTIONS',
  },
  {
    payer_id: 'OSCAR',
    payer_name: 'OSCAR HEALTH',
  },
  {
    payer_id: '00430',
    payer_name: 'OTHER BLUE PLANS PREMERA BLUEEXCHANGE (SHARED ADMIN)',
  },
  {
    payer_id: '10161',
    payer_name: 'OXFORD HEALTH PLANS',
  },
  {
    payer_id: 'PCA',
    payer_name: 'PACIFICARE ARIZONA',
  },
  {
    payer_id: '20416',
    payer_name: 'PACIFICSOURCE COMMUNITY SOLUTIONS',
  },
  {
    payer_id: '10375',
    payer_name: 'PACIFICSOURCE HEALTH PLAN',
  },
  {
    payer_id: '93029',
    payer_name: 'PACIFICSOURCE HEALTH PLANS',
  },
  {
    payer_id: '20377',
    payer_name: 'PACIFICSOURCE MEDICARE',
  },
  {
    payer_id: '87020',
    payer_name: 'PAN AMERICAN LIFE INSURANCE',
  },
  {
    payer_id: '04218',
    payer_name: 'PAN AMERICAN LIFE INSURANCE GROUP',
  },
  {
    payer_id: 'PAMPR',
    payer_name: 'PAN AMERICAN LIFE PUERTO RICO (PALIC)',
  },
  {
    payer_id: 'SX158',
    payer_name: 'PARAMOUNT',
  },
  {
    payer_id: '66917',
    payer_name: 'PARKLAND COMMUNITY HEALTH PLAN',
  },
  {
    payer_id: '68069',
    payer_name: 'PARTNERS HEALTH MANAGEMENT PHYSICAL HEALTH',
  },
  {
    payer_id: '10369',
    payer_name: 'PARTNERS NATIONAL HEALTH PLANS NORTH CAROLINA',
  },
  {
    payer_id: '10164',
    payer_name: 'PARTNERSHIP HEALTH PLAN CALIFORNIA',
  },
  {
    payer_id: 'PPHPC',
    payer_name: 'PASSPORT HEALTH PLAN',
  },
  {
    payer_id: '68069',
    payer_name: 'PEACH STATE HEALTH PLAN',
  },
  {
    payer_id: 'PEAK0',
    payer_name: 'PEAK HEALTH',
  },
  {
    payer_id: '100674',
    payer_name: 'PENN TREATY LIFE INSURANCE (CHCS SERVICES)',
  },
  {
    payer_id: '10924',
    payer_name: 'PENN TREATY NETWORK AMERICA INSURANCE COMPANY',
  },
  {
    payer_id: '68069',
    payer_name: 'PENNSYLVANIA HEALTH AND WELLNESS',
  },
  {
    payer_id: 'PPLSH',
    payer_name: 'PEOPLES HEALTH',
  },
  {
    payer_id: 'PIANC',
    payer_name: 'PERSONAL INSURANCE ADMINISTRATORS (PIA)',
  },
  {
    payer_id: '10658',
    payer_name: 'PHYSICIANS HEALTH PLAN (PHP) NORTHERN INDIANA',
  },
  {
    payer_id: '11015',
    payer_name: 'PHYSICIANS HEALTH PLAN MID MICHIGAN',
  },
  {
    payer_id: 'PHYMU',
    payer_name: 'PHYSICIANS MUTUAL INSURANCE COMPANY',
  },
  {
    payer_id: 'PITMN',
    payer_name: 'PITTMAN AND ASSOCIATES',
  },
  {
    payer_id: 'PDSHM',
    payer_name: 'PLAN DE SALUD HOSPITAL MENONITA',
  },
  {
    payer_id: '10621',
    payer_name: 'PLAN HANDLERS',
  },
  {
    payer_id: 'PLNDA',
    payer_name: 'PLANNED ADMINISTRATORS INCORPORATED',
  },
  {
    payer_id: '87020',
    payer_name: 'POISH FALCONS AMERICA',
  },
  {
    payer_id: '65088',
    payer_name: 'PREFERRED CARE PARTNERS FLORIDA',
  },
  {
    payer_id: 'PREMD',
    payer_name: 'PREFERRED MEDICARE CHOICE (PMC)',
  },
  {
    payer_id: '100694',
    payer_name: 'PREFERRED ONE',
  },
  {
    payer_id: '00430',
    payer_name: 'PREMERA BLUE CROSS (WA)',
  },
  {
    payer_id: '00934',
    payer_name: 'PREMERA BLUE CROSS BLUE SHIELD OF ALASKA',
  },
  {
    payer_id: '10848',
    payer_name: 'PREMIER HEALTH',
  },
  {
    payer_id: '00143MC',
    payer_name: 'PRINCIPAL FINANCIAL GROUP',
  },
  {
    payer_id: 'PRHTH',
    payer_name: 'PRIORITY HEALTH',
  },
  {
    payer_id: '36331',
    payer_name: 'PROFESSIONAL BENEFIT ADMINISTRATORS INCORPORATED (OAK BROOK ILLINOIS)',
  },
  {
    payer_id: '88029',
    payer_name: 'PROMINENCE HEALTH PLAN',
  },
  {
    payer_id: '93082',
    payer_name: 'PROMINENCE HEALTH PLAN OF NEVADA',
  },
  {
    payer_id: '11199',
    payer_name: 'PROMINENCE HEALTH PLAN OF TEXAS',
  },
  {
    payer_id: '101039',
    payer_name: 'PROVIDENCE HEALTH PLAN',
  },
  {
    payer_id: '13193',
    payer_name: 'PROVIDENT AMERICAN LIFE &amp; HEALTH INSURANCE COMPANY',
  },
  {
    payer_id: 'PRVMS',
    payer_name: 'PROVIDENT AMERICAN LIFE AND HEALTH INSURANCE COMPANY',
  },
  {
    payer_id: '10574',
    payer_name: 'PUBLIC EMPLOYEES HEALTH PLAN (PEHP)',
  },
  {
    payer_id: '10743',
    payer_name: 'PURITAN LIFE INSURANCE',
  },
  {
    payer_id: '35174',
    payer_name: 'QUALCHOICE ARKANSAS',
  },
  {
    payer_id: '10349',
    payer_name: 'QUARTZ',
  },
  {
    payer_id: 'QKTRP',
    payer_name: 'QUIKTRIP CORPORATION',
  },
  {
    payer_id: '00851D',
    payer_name: 'REGENCE BCBS OF OREGON DENTAL',
  },
  {
    payer_id: '00910D',
    payer_name: 'REGENCE BCBS OF UTAH DENTAL',
  },
  {
    payer_id: '00851',
    payer_name: 'REGENCE BCBS OREGON',
  },
  {
    payer_id: '00910',
    payer_name: 'REGENCE BCBS UTAH',
  },
  {
    payer_id: '00932D',
    payer_name: 'REGENCE BLUESHIELD DENTAL',
  },
  {
    payer_id: '00611D',
    payer_name: 'REGENCE BLUESHIELD OF IDAHO DENTAL',
  },
  {
    payer_id: '00611',
    payer_name: 'REGENCE BS IDAHO',
  },
  {
    payer_id: '00932',
    payer_name: 'REGENCE BS WASHINGTON',
  },
  {
    payer_id: 'RGA01',
    payer_name: 'REGENCE GROUP ADMINISTRATORS',
  },
  {
    payer_id: 'AMTAS00427',
    payer_name: 'RELIANCE STANDARD LIFE INSURANCE COMPANY',
  },
  {
    payer_id: '87020',
    payer_name: 'RENAISSANCE LIFE AND HEALTH INSURANCE COMPANY AMERICA',
  },
  {
    payer_id: '73066',
    payer_name: 'RESERVE NATIONAL INSURANCE',
  },
  {
    payer_id: 'RMHP',
    payer_name: 'ROCKY MOUNTAIN COLORADO',
  },
  {
    payer_id: 'AD050',
    payer_name: 'ROCKY MOUNTAIN LIFE',
  },
  {
    payer_id: '10751',
    payer_name: 'ROYAL NEIGHBORS OF AMERICA',
  },
  {
    payer_id: '31441',
    payer_name: 'S AND S HEALTHCARE STRATEGIES',
  },
  {
    payer_id: 'SAMBA',
    payer_name: 'SAMBA HEALTH BENEFIT PLAN',
  },
  {
    payer_id: '06280',
    payer_name: 'SAN FRANCISCO HEALTH ACCESS PLAN ( NOT OPEN TO PROVIDERS)',
  },
  {
    payer_id: '02735',
    payer_name: 'SAN FRANCISCO HEALTH PLAN',
  },
  {
    payer_id: '68035',
    payer_name: 'SAN JOAQUIN HEALTH ADMINISTRATORS',
  },
  {
    payer_id: 'SPSJH',
    payer_name: 'SAN JOAQUIN HEALTH PLAN',
  },
  {
    payer_id: '50114',
    payer_name: 'SANA BENEFITS',
  },
  {
    payer_id: '91184',
    payer_name: 'SANFORD HEALTH PLAN',
  },
  {
    payer_id: '10876',
    payer_name: 'SANTA CLARA FAMILY HEALTH PLAN',
  },
  {
    payer_id: 'SPSCN',
    payer_name: 'SCAN HMO CALIFORNIA',
  },
  {
    payer_id: 'ICQFL',
    payer_name: 'SCHALLER ANDERSON INTEGRAL QUALITY CARE FLORIDA',
  },
  {
    payer_id: 'AEMED',
    payer_name: 'SCHALLER ANDERSON MERCY CARE PLAN',
  },
  {
    payer_id: 'MOSCA',
    payer_name: 'SCHALLER ANDERSON MISSOURI CARE',
  },
  {
    payer_id: 'TXCSA',
    payer_name: 'SCHALLER ANDERSON TEXAS CHRISTUS',
  },
  {
    payer_id: 'SWHP',
    payer_name: 'SCOTT AND WHITE HEALTH CARE PLAN',
  },
  {
    payer_id: '10360',
    payer_name: 'SCOTT AND WHITE HEALTH PLAN',
  },
  {
    payer_id: '39045',
    payer_name: 'SECURITY HEALTH PLAN',
  },
  {
    payer_id: 'SHSC',
    payer_name: 'SELECT HEALTH SOUTH CAROLINA',
  },
  {
    payer_id: '10575',
    payer_name: 'SELECT HEALTH UTAH',
  },
  {
    payer_id: '15460I',
    payer_name: 'SENIOR HEALTH COMPANY INSTITUTIONAL',
  },
  {
    payer_id: '15460P',
    payer_name: 'SENIOR HEALTH COMPANY PROFESSIONAL',
  },
  {
    payer_id: '80141',
    payer_name: 'SENIOR HEALTH PARTNERS',
  },
  {
    payer_id: '10962',
    payer_name: 'SENIOR WHOLE HEALTH',
  },
  {
    payer_id: 'SWHMA',
    payer_name: 'SENIOR WHOLE HEALTH MASSACHUSETTS',
  },
  {
    payer_id: 'SWHNY',
    payer_name: 'SENIOR WHOLE HEALTH NEW YORK',
  },
  {
    payer_id: '00191',
    payer_name: 'SENTINEL MANAGEMENT SERVICES',
  },
  {
    payer_id: '87020',
    payer_name: 'SENTINEL SECURITY LIFE INSURANCE',
  },
  {
    payer_id: 'SHMS1',
    payer_name: 'SHARED HEALTH MISSISSIPPI',
  },
  {
    payer_id: '10967',
    payer_name: 'SHARP HEALTH PLAN',
  },
  {
    payer_id: '10752',
    payer_name: 'SHENANDOAH LIFE INSURANCE',
  },
  {
    payer_id: '10282',
    payer_name: 'SIERRA HEALTH SERVICES',
  },
  {
    payer_id: 'ERIN',
    payer_name: 'SIGNIFICA BENEFITS SERVICES INCORPORATED',
  },
  {
    payer_id: '68069',
    payer_name: 'SILVERSUMMIT',
  },
  {
    payer_id: 'SMPLY',
    payer_name: 'SIMPLY HEALTHCARE NEW',
  },
  {
    payer_id: '00540',
    payer_name: 'SISCO',
  },
  {
    payer_id: '77153',
    payer_name: 'SOUTHEASTERN INDIANA HEALTH ORGANIZATION SIHO',
  },
  {
    payer_id: '00773',
    payer_name: 'SPECTERA UNITEDHEALTHCARE VISION',
  },
  {
    payer_id: '10936',
    payer_name: 'SPECTRUM HEALTH',
  },
  {
    payer_id: 'SPJMS',
    payer_name: 'SPJST',
  },
  {
    payer_id: 'AMTAS00429',
    payer_name: 'STANDARD INSURANCE COMPANY',
  },
  {
    payer_id: '100928',
    payer_name: 'STANDARD LIFE AND ACCIDENT INSURANCE COMPANY',
  },
  {
    payer_id: 'AMTAS00430',
    payer_name: 'STANDARD LIFE INSURANCE COMPANY OF NEW YORK',
  },
  {
    payer_id: '10645',
    payer_name: 'STATE FARM',
  },
  {
    payer_id: '10750',
    payer_name: 'STATE MUTUAL',
  },
  {
    payer_id: '14163',
    payer_name: 'STAYWELL',
  },
  {
    payer_id: 'ISLAH',
    payer_name: 'STAYWELL GUAM',
  },
  {
    payer_id: '14163',
    payer_name: 'STAYWELL KIDS',
  },
  {
    payer_id: '10937',
    payer_name: 'STEWART C MILLER AND COMPANY',
  },
  {
    payer_id: '10183',
    payer_name: 'STUDENT INSURANCE',
  },
  {
    payer_id: '74227',
    payer_name: 'STUDENT RESOURCES (UNITEDHEALTHCARE)',
  },
  {
    payer_id: '10294',
    payer_name: 'SUMMACARE HEALTH PLAN',
  },
  {
    payer_id: 'PASSE',
    payer_name: 'SUMMIT COMMUNITY CARE',
  },
  {
    payer_id: '68069',
    payer_name: 'SUNFLOWER HEALTH PLAN',
  },
  {
    payer_id: '68069',
    payer_name: 'SUNSHINE HEALTH',
  },
  {
    payer_id: '68069',
    payer_name: 'SUPERIOR HEALTHPLAN',
  },
  {
    payer_id: '13287',
    payer_name: 'SUTTER HEALTH PLUS',
  },
  {
    payer_id: '10941',
    payer_name: 'SUTTER SELECT',
  },
  {
    payer_id: '76048',
    payer_name: "TEXAS CHILDREN'S HEALTH PLAN (MEDICAID) CHIP",
  },
  {
    payer_id: '76048',
    payer_name: 'TEXAS CHILDRENS HEALTH PLAN',
  },
  {
    payer_id: 'TX1ST',
    payer_name: 'TEXAS FIRST HEALTH PLAN (NORTH TEXAS)',
  },
  {
    payer_id: '64246',
    payer_name: 'THE GUARDIAN LIFE INSURANCE COMPANY OF AMERICA',
  },
  {
    payer_id: '34150',
    payer_name: 'THE HEALTH PLAN WEST VIRGINIA',
  },
  {
    payer_id: '10945',
    payer_name: 'THE ULLICO FAMILY OF COMPANIES',
  },
  {
    payer_id: 'TRHPA',
    payer_name: 'THREE RIVERS HEALTH PLAN (UNISON HEALTH PLAN)',
  },
  {
    payer_id: '10688',
    payer_name: 'TMG HEALTH INSURANCE',
  },
  {
    payer_id: '14163',
    payer_name: 'TODAYS HEALTH',
  },
  {
    payer_id: '14163',
    payer_name: 'TODAYS OPTIONS (AMERICAN PROGRESSIVE AND PYRAMID LIFE)',
  },
  {
    payer_id: '59222',
    payer_name: 'TRANSAMERICA LIFE INSURANCE COMPANY',
  },
  {
    payer_id: 'HMTRN',
    payer_name: 'TRANSAMERICA LIFE INSURANCE HEALTHMARKETS',
  },
  {
    payer_id: 'TRICE',
    payer_name: 'TRICARE CHAMPUS',
  },
  {
    payer_id: 'TREST',
    payer_name: 'TRICARE EAST',
  },
  {
    payer_id: '101159',
    payer_name: 'TRICARE FOR LIFE',
  },
  {
    payer_id: '10947',
    payer_name: 'TRICARE OVERSEAS',
  },
  {
    payer_id: '99726',
    payer_name: 'TRICARE WEST REGION',
  },
  {
    payer_id: '68069',
    payer_name: 'TRILLIUM COMMUNITY HEALTH PLAN',
  },
  {
    payer_id: '973MA',
    payer_name: 'TRIPLE-S ADVANTAGE',
  },
  {
    payer_id: '82288',
    payer_name: 'TRUE HEALTH NEW MEXICO',
  },
  {
    payer_id: 'TRULI',
    payer_name: 'TRULI FOR HEALTH',
  },
  {
    payer_id: 'TRSMK',
    payer_name: 'TRUSTMARK INSURANCE COMPANY',
  },
  {
    payer_id: 'TUFTS',
    payer_name: 'TUFTS HEALTH PLAN',
  },
  {
    payer_id: '04298',
    payer_name: 'TUFTS HEALTH PLAN',
  },
  {
    payer_id: '100804',
    payer_name: 'UCARE MINNESOTA',
  },
  {
    payer_id: '10888',
    payer_name: 'ULTIMATE HEALTH PLANS',
  },
  {
    payer_id: '39026',
    payer_name: 'UMR (UMR WAUSAU)',
  },
  {
    payer_id: '52180',
    payer_name: 'UMWA HEALTH AND RETIREMENT FUNDS',
  },
  {
    payer_id: 'UNI',
    payer_name: 'UNICARE',
  },
  {
    payer_id: 'UNICR',
    payer_name: 'UNICARE',
  },
  {
    payer_id: '80314D',
    payer_name: 'UNICARE DENTAL',
  },
  {
    payer_id: 'UPREH',
    payer_name: 'UNION PACIFIC RAILROAD EMPLOYEES HEALTH SYSTEMS',
  },
  {
    payer_id: '10990',
    payer_name: 'UNITED AMERICAN INSURANCE COMPANY',
  },
  {
    payer_id: 'UHSEC',
    payer_name: 'UNITED HEALTHCARE SECURE HORIZONS MEDICARE',
  },
  {
    payer_id: '74227',
    payer_name: 'UNITED HEALTHCARE STUDENT RESOURCES',
  },
  {
    payer_id: '71412',
    payer_name: 'UNITED OF OMAHA',
  },
  {
    payer_id: 'UTAMS',
    payer_name: 'UNITED TEACHER ASSOCIATES INSURANCE COMPANY',
  },
  {
    payer_id: '87726',
    payer_name: 'UNITEDHEALTHCARE',
  },
  {
    payer_id: '87726',
    payer_name: 'UNITEDHEALTHCARE COMMUNITY CARE INDIANA',
  },
  {
    payer_id: '87726',
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN (AMERICHOICE PENNSYLVANIA PCP)',
  },
  {
    payer_id: '03432',
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN ARIZONA',
  },
  {
    payer_id: '96385',
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN KANSAS (KANCARE)',
  },
  {
    payer_id: '101133',
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN TENNESSEE',
  },
  {
    payer_id: '87726',
    payer_name: 'UNITEDHEALTHCARE DEFINITY HEALTH PLAN',
  },
  {
    payer_id: '10836',
    payer_name: 'UNITEDHEALTHCARE FACETS DETROIT',
  },
  {
    payer_id: '81400',
    payer_name: 'UNITEDHEALTHCARE LIFE INSURANCE COMPANY',
  },
  {
    payer_id: '87726',
    payer_name: 'UNITEDHEALTHCARE MAHP MARYLAND IPA OPTIMUM CHOICE MAMSI',
  },
  {
    payer_id: '87726',
    payer_name: 'UNITEDHEALTHCARE MEDICARE SOLUTIONS UHC CHRONIC COMPLETE (EVERCARE)',
  },
  {
    payer_id: '87726',
    payer_name: 'UNITEDHEALTHCARE MEDICARE SOLUTIONS UHC MEDICARECOMPLETE (SECUREHORIZONS)',
  },
  {
    payer_id: '10837',
    payer_name: 'UNITEDHEALTHCARE NEVADA MARKET',
  },
  {
    payer_id: '06111',
    payer_name: 'UNITEDHEALTHCARE OXFORD',
  },
  {
    payer_id: '87726',
    payer_name: 'UNITEDHEALTHCARE PLAN OF THE RIVER VALLEY',
  },
  {
    payer_id: 'UHIS',
    payer_name: 'UNITEDHEALTHCARE SHARED SERVICES',
  },
  {
    payer_id: 'STDNT',
    payer_name: 'UNITEDHEALTHCARE STUDENT RESOURCES',
  },
  {
    payer_id: '87726',
    payer_name: 'UNITEDHEALTHCARE WEST (PACIFICARE ARIZONA COLORADO NEVADA)',
  },
  {
    payer_id: '10535',
    payer_name: 'UNIVERA',
  },
  {
    payer_id: '100842',
    payer_name: 'UNIVERSAL AMERICAN',
  },
  {
    payer_id: 'UFC',
    payer_name: 'UNIVERSITY FAMILY CARE ARIZONA',
  },
  {
    payer_id: '10889',
    payer_name: 'UNIVERSITY OF ARIZONA HEALTH PLAN',
  },
  {
    payer_id: 'SX155',
    payer_name: 'UNIVERSITY OF UTAH HEALTH PLANS',
  },
  {
    payer_id: 'UPCAA',
    payer_name: 'UNIVERSITY PHYSICIANS CARE ADVANTAGE (ARIZONA)',
  },
  {
    payer_id: 'UPCAA',
    payer_name: 'UNIVERSITY PHYSICIANS CARE ADVANTAGE ARIZONA',
  },
  {
    payer_id: '23281',
    payer_name: 'UPMC HEALTH PLAN',
  },
  {
    payer_id: '10288',
    payer_name: 'UPMC HEALTH PLAN (TRISTATE)',
  },
  {
    payer_id: 'USFHP',
    payer_name: 'US FAMILY HEALTH PLAN (USFHP) TEXAS AND LOUISIANA',
  },
  {
    payer_id: '10195',
    payer_name: 'USAA LIFE INSURANCE COMPANY',
  },
  {
    payer_id: 'USAAM',
    payer_name: 'USAA MEDICARE SUPPLEMENTAL',
  },
  {
    payer_id: '10196',
    payer_name: 'VA FEE BASIS PROGRAM',
  },
  {
    payer_id: 'VAHAC',
    payer_name: 'VA HEALTH ADMINISTRATOR CENTER',
  },
  {
    payer_id: '10948',
    payer_name: 'VALLEY CARE PROGRAM',
  },
  {
    payer_id: 'VHP01',
    payer_name: 'VALLEY HEALTH PLAN',
  },
  {
    payer_id: '10949',
    payer_name: 'VALLEY HEALTH PLAN',
  },
  {
    payer_id: 'VHPLA',
    payer_name: 'VANTAGE HEALTH PLAN INCORPORATED',
  },
  {
    payer_id: '72187',
    payer_name: 'VARIPRO',
  },
  {
    payer_id: 'VAFEE',
    payer_name: 'VETERANS AFFAIRS FEE BASIS PROGRAM',
  },
  {
    payer_id: '15976',
    payer_name: 'VIBRA HEALTH PLAN',
  },
  {
    payer_id: 'VIVA',
    payer_name: 'VIVA HEALTH INCORPORATED',
  },
  {
    payer_id: 'VNSNY',
    payer_name: 'VNSNY CHOICE',
  },
  {
    payer_id: '10407',
    payer_name: 'VYTRA',
  },
  {
    payer_id: '22264',
    payer_name: 'VYTRA HEALTHCARE',
  },
  {
    payer_id: '10853',
    payer_name: 'WASHINGTON NATIONAL',
  },
  {
    payer_id: '39151',
    payer_name: 'WEA TRUST',
  },
  {
    payer_id: 'WBTPA',
    payer_name: 'WEB TPA INCORPORATED',
  },
  {
    payer_id: '10814',
    payer_name: 'WELL SENSE',
  },
  {
    payer_id: '68069',
    payer_name: 'WELLCARE',
  },
  {
    payer_id: '14163',
    payer_name: 'WELLCARE',
  },
  {
    payer_id: '68069',
    payer_name: 'WELLCARE BY ALLWELL',
  },
  {
    payer_id: '11315',
    payer_name: 'WELLCARE BY FIDELIS CARE',
  },
  {
    payer_id: '68069',
    payer_name: 'WELLCARE BY HEALTH NET',
  },
  {
    payer_id: '14163',
    payer_name: 'WELLCARE BY OHANA',
  },
  {
    payer_id: '68069',
    payer_name: 'WELLCARE BY TRILLIUM ADVANTAGE',
  },
  {
    payer_id: '14163',
    payer_name: 'WELLCARE HEALTH PLANS',
  },
  {
    payer_id: '88848',
    payer_name: 'WELLMARK BCBS (IOWA, SOUTH DAKOTA)',
  },
  {
    payer_id: '25711',
    payer_name: 'WELLNET HEALTH PLANS',
  },
  {
    payer_id: 'AGPMEDICAID',
    payer_name: 'WELLPOINT',
  },
  {
    payer_id: 'WVCS1',
    payer_name: 'WEST VIRGINIA CARESOURCE MARKETPLACE',
  },
  {
    payer_id: 'WSTHA',
    payer_name: 'WESTERN HEALTH ADVANTAGE',
  },
  {
    payer_id: '68069',
    payer_name: 'WESTERN SKY COMMUNITY CARE',
  },
  {
    payer_id: '31048',
    payer_name: 'WESTERN SOUTHERN FINANCIAL GROUP (CINCINNATI OHIO)',
  },
  {
    payer_id: '41095',
    payer_name: 'WILSON MCSHANE',
  },
  {
    payer_id: '10576',
    payer_name: 'WINDSOR MEDICARE EXTRA',
  },
  {
    payer_id: 'WICDP',
    payer_name: 'WISCONSIN CHRONIC DISEASE PROGRAM',
  },
  {
    payer_id: '10878',
    payer_name: 'WISCONSIN PHYSICIANS SERVICE INSURANCE CORPORATION (WPS)',
  },
  {
    payer_id: 'WIWWP',
    payer_name: 'WISCONSIN WELL WOMAN PROGRAM',
  },
  {
    payer_id: '39185',
    payer_name: 'WPS HEALTH PLAN',
  },
  {
    payer_id: 'YAMHL',
    payer_name: 'YAMHILL COMMUNITY CARE ORGANIZATION (CCO)',
  },
  {
    payer_id: 'MHPIL',
    payer_name: 'YOUTHCARE HEALTHCHOICE ILLINOIS',
  },
];
let finalArray = [];
let stateWiseCombinations = [
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'DEVOTED HEALTH':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth\n',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'OTHER BLUE PLANS PREMERA BLUEEXCHANGE SHARED ADMIN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'PREMERA FEDERAL EMPLOYEE PROGRAM (FEP)':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'PREMERA BLUE CROSS BLUE SHIELD OF ALASKA':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'MOLINA HEALTHCARE ARIZONA':
      'Patient ID, Date of Birth, Patient State of Residence\nPatient Last Name, Patient First Name, Date of Birth, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient State of Residence\nPatient ID, Date of Birth, Patient Gender, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient Gender, Patient State of Residence',
    AMERIGROUP:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'DEVOTED HEALTH':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CENPATICO BEHAVIORAL HEALTH': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'BRIDGEWAY HEALTH SOLUTIONS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'WELLCARE BY ALLWELL': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    AMBETTER: 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'ARIZONA COMPLETE HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'BCBS ARIZONA':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'MERCY CARE - ARIZONA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    'ARKANSAS TOTAL CARE': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ARKANSAS BCBS':
      'Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'WELLCARE BY ALLWELL': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'ARKANSAS BCBS OTHER BLUE PLANS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name',
    'CARESOURCE ARKANSAS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nMedicaid ID, Date of Birth',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    AMBETTER: 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'QUALCHOICE ARKANSAS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'SUMMIT COMMUNITY CARE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'BLUE MEDICARE ADVANTAGE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CENPATICO BEHAVIORAL HEALTH': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'AETNA BETTER HEALTH (AETNA MEDICAID) NJ-VA FIDE SNP - DSNP':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'MANAGED CARE SERVICES MCS - CA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'MOLINA HEALTHCARE CALIFORNIA':
      'Patient ID, Date of Birth, Patient State of Residence\nPatient Last Name, Patient First Name, Date of Birth, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient State of Residence\nPatient ID, Date of Birth, Patient Gender, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient Gender, Patient State of Residence',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'CALIFORNIA HEALTH AND WELLNESS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'OTHER BLUE PLANS ANTHEM - CA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'ANTHEM - CA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'WELLCARE BY HEALTH NET': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'BLUE MEDICARE ADVANTAGE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'DEVOTED HEALTH':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MANAGED CARE SERVICES MCS - CO':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COLORADO COMMUNITY HEALTH ALLIANCE - BEHAVIORAL HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'OTHER BLUE PLANS ANTHEM - CO':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'ANTHEM - CO':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'BLUE MEDICARE ADVANTAGE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'OTHER BLUE PLANS ANTHEM - CT':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'VNS HEALTH':
      'Patient ID, Patient Last Name, Date of Birth\nPatient ID, Date of Birth\nPatient ID, Patient First Name, Date of Birth',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
    'ANTHEM - CT':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DELAWARE FIRST HEALTH': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'CAREFIRST MEDICARE ADVANTAGE': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    AMERIGROUP:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    'CAREFIRST BLUECROSS BLUESHIELD':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    AMERIGROUP:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'BLUE MEDICARE ADVANTAGE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'CARESOURCE OF GEORGIA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nMedicaid ID, Date of Birth',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CENPATICO BEHAVIORAL HEALTH': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'PEACH STATE HEALTH PLAN': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'WELLCARE BY ALLWELL': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ANTHEM - GA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    AMBETTER: 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'OTHER BLUE PLANS ANTHEM - GA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'REGENCE GROUP ADMINISTRATORS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'ASURIS NORTHWEST HEALTH':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Group Number, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'BRIDGESPAN HEALTH COMPANY':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'MOLINA HEALTHCARE IDAHO':
      'Patient ID, Date of Birth, Patient State of Residence\nPatient Last Name, Patient First Name, Date of Birth, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient State of Residence\nPatient ID, Date of Birth, Patient Gender, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient Gender, Patient State of Residence',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'REGENCE BLUESHIELD OF IDAHO':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number\nPatient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HARMONY HEALTH PLAN': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'DEVOTED HEALTH':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CENPATICO BEHAVIORAL HEALTH': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'AETNA BETTER HEALTH (AETNA MEDICAID) NJ-VA FIDE SNP - DSNP':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ILLINICARE HEALTH PLAN': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    BCBSIL:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number\nPatient ID, Date of Birth, Group Number',
    'ASCENSION COMPLETE': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'BLUE CROSS MEDICARE ADVANTAGE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Group Number, Date of Birth\nPatient ID, Group Number, Date of Birth',
    'BLUE CROSS COMMUNITY HEALTH PLANS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'OTHER BLUE PLANS-BCBSIL':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    AMBETTER: 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'MOLINA HEALTHCARE ILLINOIS':
      'Patient ID, Date of Birth, Patient State of Residence\nPatient Last Name, Patient First Name, Date of Birth, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient State of Residence\nPatient ID, Date of Birth, Patient Gender, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient Gender, Patient State of Residence',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HARMONY HEALTH PLAN': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'BLUE MEDICARE ADVANTAGE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CENPATICO BEHAVIORAL HEALTH': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'OTHER BLUE PLANS ANTHEM - IN':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'WELLCARE BY ALLWELL': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'CARESOURCE OF INDIANA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nMedicaid ID, Date of Birth',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    AMBETTER: 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ANTHEM - IN':
      'Patient ID, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth, Patient ZIP Code\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MUTUAL HEALTH SERVICES':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'MANAGED HEALTH SERVICES - IN': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    AMERIGROUP:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'IOWA TOTAL CARE': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    KYMEDICAID:
      'Patient ID\nPatient Last Name, Patient First Name, Patient SSN\nPatient Last Name, Patient First Name, Date of Birth, Patient Gender',
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'BLUE MEDICARE ADVANTAGE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'AETNA BETTER HEALTH (AETNA MEDICAID) NJ-VA FIDE SNP - DSNP':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'OTHER BLUE PLANS ANTHEM - KY':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'PASSPORT BY MOLINA HEALTHCARE':
      'Patient ID, Date of Birth, Patient State of Residence\nPatient Last Name, Patient First Name, Date of Birth, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient State of Residence\nPatient ID, Date of Birth, Patient Gender, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient Gender, Patient State of Residence',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MUTUAL HEALTH SERVICES':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HUMANA-CARESOURCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nMedicaid ID, Date of Birth',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ANTHEM - KY':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHY BLUE DUAL ADVANTAGE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CENPATICO BEHAVIORAL HEALTH': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'AETNA BETTER HEALTH (AETNA MEDICAID) NJ-VA FIDE SNP - DSNP':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHY BLUE LOUISIANA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'WELLCARE BY ALLWELL': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'LOUISIANA HEALTHCARE CONNECTIONS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'BLUE MEDICARE ADVANTAGE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'ANTHEM MAINEHEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ANTHEM - ME':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'OTHER BLUE PLANS ANTHEM - ME':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'CAREFIRST MEDICARE ADVANTAGE': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    'CAREFIRST BLUECROSS BLUESHIELD':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'AETNA BETTER HEALTH (AETNA MEDICAID) NJ-VA FIDE SNP - DSNP':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    WELLPOINT:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'JOHNS HOPKINS EMPLOYER HEALTH PROGRAMS (EHP)':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'MASSACHUSETTS BEHAVIORAL HEALTH PARTNERSHIP - BHO':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'CENPATICO BEHAVIORAL HEALTH': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'CELTICARE HEALTH PLAN': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'UNICARE MASSACHUSETTS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'SENIOR WHOLE HEALTH MASSACHUSETTS':
      'Patient ID, Date of Birth, Patient State of Residence\nPatient Last Name, Patient First Name, Date of Birth, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient State of Residence\nPatient ID, Date of Birth, Patient Gender, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient Gender, Patient State of Residence',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'MICHIGAN COMPLETE HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'AETNA BETTER HEALTH (AETNA MEDICAID) NJ-VA FIDE SNP - DSNP':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MOLINA HEALTHCARE MICHIGAN':
      'Patient ID, Date of Birth, Patient State of Residence\nPatient Last Name, Patient First Name, Date of Birth, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient State of Residence\nPatient ID, Date of Birth, Patient Gender, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient Gender, Patient State of Residence',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'BCBS MICHIGAN AND BLUE CARE NETWORK':
      'Patient ID\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'MEDICAID MICHIGAN':
      'Patient ID\nPatient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Patient SSN\nDate of Birth, Patient SSN\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'BCBSMN BLUE PLUS MEDICAID':
      'Patient ID, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    BCBSMN:
      'Patient ID, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'BLUERIDE NON-EMERG TRANSPORTATION':
      'Patient ID, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CENPATICO BEHAVIORAL HEALTH': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MOLINA HEALTHCARE MISSISSIPPI':
      'Patient ID, Date of Birth, Patient State of Residence\nPatient Last Name, Patient First Name, Date of Birth, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient State of Residence\nPatient ID, Date of Birth, Patient Gender, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient Gender, Patient State of Residence',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'MAGNOLIA HEALTH PLAN': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'WELLCARE BY ALLWELL': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'SHARED HEALTH MISSISSIPPI': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    AMBETTER: 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HARMONY HEALTH PLAN': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'HOME STATE HEALTH PLAN': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'BLUE MEDICARE ADVANTAGE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CENPATICO BEHAVIORAL HEALTH': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'WELLCARE BY ALLWELL': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'OTHER BLUE PLANS ANTHEM - MO':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    AMBETTER: 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ANTHEM - MO':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
    'HEALTHY BLUE MISSOURI':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Group Number, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    BCBSMT:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Group Number, Date of Birth\nPatient ID, Group Number, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'BLUE CROSS MEDICARE ADVANTAGE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Group Number, Date of Birth\nPatient ID, Group Number, Date of Birth',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
    'OTHER BLUE PLANS-BCBSMT':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient First Name, Date of Birth',
  },
  {
    'HEALTHY BLUE NEBRASKA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Group Number, Date of Birth',
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'NEBRASKA TOTAL CARE': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    AMERIGROUP:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    SILVERSUMMIT: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'BLUE MEDICARE ADVANTAGE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'ANTHEM MEDICAID - NV':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MOLINA HEALTHCARE NEVADA':
      'Patient ID, Date of Birth, Patient State of Residence\nPatient Last Name, Patient First Name, Date of Birth, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient State of Residence\nPatient ID, Date of Birth, Patient Gender, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient Gender, Patient State of Residence',
    'ANTHEM - NV':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    AMBETTER: 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MANAGED CARE SERVICES MCS - NV':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
    'OTHER BLUE PLANS ANTHEM - NV':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
  },
  {
    'ANTHEM - NH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'OTHER BLUE PLANS ANTHEM - NH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'BLUE MEDICARE ADVANTAGE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CENPATICO BEHAVIORAL HEALTH': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    AMBETTER: 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'GRANITE STATE HEALTH PLAN': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
    'NH HEALTHY FAMILIES': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    AMERIGROUP:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'AETNA BETTER HEALTH (AETNA MEDICAID) NJ-VA FIDE SNP - DSNP':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'VNS HEALTH':
      'Patient ID, Patient Last Name, Date of Birth\nPatient ID, Date of Birth\nPatient ID, Patient First Name, Date of Birth',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    AMERIGROUP:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'BLUE CROSS COMMUNITY CENTENNIAL':
      'Medicaid ID\nPatient ID or SSN, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'OTHER BLUE PLANS-BCBSNM':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'WESTERN SKY COMMUNITY CARE': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    'MOLINA HEALTHCARE NEW MEXICO':
      'Patient ID, Date of Birth, Patient State of Residence\nPatient Last Name, Patient First Name, Date of Birth, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient State of Residence\nPatient ID, Date of Birth, Patient Gender, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient Gender, Patient State of Residence',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'BLUE CROSS MEDICARE ADVANTAGE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Group Number, Date of Birth\nPatient ID, Group Number, Date of Birth',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
    BCBSNM:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number\nPatient ID, Date of Birth, Group Number',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'DEVOTED HEALTH':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'CARESOURCE NORTH CAROLINA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nMedicaid ID, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'CAROLINA COMPLETE HEALTH': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHY BLUE NORTH CAROLINA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    NEXTBLUE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    BCBSND:
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'BLUE MEDICARE ADVANTAGE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'DEVOTED HEALTH':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    'CARESOURCE OF OHIO':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nMedicaid ID, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MOLINA HEALTHCARE OHIO':
      'Patient ID, Date of Birth, Patient State of Residence\nPatient Last Name, Patient First Name, Date of Birth, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient State of Residence\nPatient ID, Date of Birth, Patient Gender, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient Gender, Patient State of Residence',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CENPATICO BEHAVIORAL HEALTH': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'AETNA BETTER HEALTH (AETNA MEDICAID) NJ-VA FIDE SNP - DSNP':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'BUCKEYE COMMUNITY HEALTH PLAN': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'WELLCARE BY ALLWELL': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    AMBETTER: 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'ANTHEM - OH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MUTUAL HEALTH SERVICES':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'OTHER BLUE PLANS ANTHEM - OH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    BCBSOK:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number\nPatient ID, Date of Birth, Group Number',
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'BLUE CROSS MEDICARE ADVANTAGE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Group Number, Date of Birth\nPatient ID, Group Number, Date of Birth',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'OTHER BLUE PLANS-BCBSOK':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCHOICE SELECT': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'DEVOTED HEALTH':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'REGENCE BCBS OF OREGON':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'REGENCE GROUP ADMINISTRATORS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'ASURIS NORTHWEST HEALTH':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Group Number, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'WELLCARE BY TRILLIUM ADVANTAGE': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'LIFEWISE HEALTH PLAN OF OREGON':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BRIDGESPAN HEALTH COMPANY':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'WELLCARE BY HEALTH NET': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'TRILLIUM COMMUNITY HEALTH PLAN': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'DEVOTED HEALTH':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'AETNA BETTER HEALTH (AETNA MEDICAID) NJ-VA FIDE SNP - DSNP':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'WELLCARE BY ALLWELL': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'CAPITAL BLUE CROSS':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'OTHER BLUE PLANS-CAPITAL BLUE CROSS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient Last Name, Patient First Name, Date of Birth',
    'PENNSYLVANIA HEALTH AND WELLNESS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'ABSOLUTE TOTAL CARE': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'DEVOTED HEALTH':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CENPATICO BEHAVIORAL HEALTH': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'WELLCARE BY ALLWELL': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MOLINA HEALTHCARE SOUTH CAROLINA':
      'Patient ID, Date of Birth, Patient State of Residence\nPatient Last Name, Patient First Name, Date of Birth, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient State of Residence\nPatient ID, Date of Birth, Patient Gender, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient Gender, Patient State of Residence',
    'HEALTHY BLUE SOUTH CAROLINA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    AMERIGROUP:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'DEVOTED HEALTH':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'BCBS TENNESSEE': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'OTHER BLUE PLANS-TN': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'OTHER BLUE PLANS-BCBSTX':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient First Name, Date of Birth',
    'BCBSTX MEDICAID STAR/CHIP':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth\nPatient ID, Patient First Name, Date of Birth',
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    AMERIGROUP:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'DEVOTED HEALTH':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    'SUPERIOR HEALTHPLAN': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CENPATICO BEHAVIORAL HEALTH': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'AETNA BETTER HEALTH (AETNA MEDICAID) NJ-VA FIDE SNP - DSNP':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'EVRY HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth',
    'MOLINA HEALTHCARE TEXAS':
      'Patient ID, Date of Birth, Patient State of Residence\nPatient Last Name, Patient First Name, Date of Birth, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient State of Residence\nPatient ID, Date of Birth, Patient Gender, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient Gender, Patient State of Residence',
    'WELLCARE BY ALLWELL': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'BLUE CROSS MEDICARE ADVANTAGE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Group Number, Date of Birth\nPatient ID, Group Number, Date of Birth',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BCBSTX MEDICAID STAR KIDS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    AMBETTER: 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'CARE N CARE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    BCBSTX:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number\nPatient ID, Date of Birth, Group Number',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MOLINA HEALTHCARE UTAH':
      'Patient ID, Date of Birth, Patient State of Residence\nPatient Last Name, Patient First Name, Date of Birth, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient State of Residence\nPatient ID, Date of Birth, Patient Gender, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient Gender, Patient State of Residence',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'REGENCE GROUP ADMINISTRATORS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'ASURIS NORTHWEST HEALTH':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Group Number, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'BRIDGESPAN HEALTH COMPANY':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'REGENCE BCBS OF UTAH':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'CAREFIRST MEDICARE ADVANTAGE': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    VAMEDICAID:
      'Patient ID\nDate of Birth, Patient SSN\nPatient Last Name, Patient First Name, Patient SSN\nPatient Last Name, Patient First Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'BLUE MEDICARE ADVANTAGE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    'CAREFIRST BLUECROSS BLUESHIELD':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'AETNA BETTER HEALTH (AETNA MEDICAID) NJ-VA FIDE SNP - DSNP':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'OTHER BLUE PLANS ANTHEM - VA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HUMANA LONG TERM CARE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MOLINA HEALTHCARE VIRGINIA':
      'Patient ID, Date of Birth, Patient State of Residence\nPatient Last Name, Patient First Name, Date of Birth, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient State of Residence\nPatient ID, Date of Birth, Patient Gender, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient Gender, Patient State of Residence',
    'ANTHEM - VA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    AMERIGROUP:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'PREMERA BLUE CROSS (WA)':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    WELLCARE: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CENPATICO BEHAVIORAL HEALTH': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'REGENCE GROUP ADMINISTRATORS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'ASURIS NORTHWEST HEALTH':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Group Number, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'BRIDGESPAN HEALTH COMPANY':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'WELLCARE BY ALLWELL': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE HEALTH PLANS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient First Name, Patient Last Name, Date of Birth\nPatient ID, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    AMBETTER: 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'OTHER BLUE PLANS PREMERA BLUEEXCHANGE SHARED ADMIN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'MOLINA HEALTHCARE WASHINGTON':
      'Patient ID, Date of Birth, Patient State of Residence\nPatient Last Name, Patient First Name, Date of Birth, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient State of Residence\nPatient ID, Date of Birth, Patient Gender, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient Gender, Patient State of Residence',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'PREMERA FEDERAL EMPLOYEE PROGRAM (FEP)':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA BLUE CROSS HMO':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'WELLCARE BY HEALTH NET': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'COORDINATED CARE': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'LIFEWISE ASSURANCE COMPANY':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'REGENCE BLUESHIELD':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number\nPatient Last Name, Patient First Name, Date of Birth',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'AETNA BETTER HEALTH (AETNA MEDICAID) NJ-VA FIDE SNP - DSNP':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
    'CARESOURCE OF WEST VIRGINIA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nMedicaid ID, Date of Birth',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'BLUE MEDICARE ADVANTAGE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CENPATICO BEHAVIORAL HEALTH': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'ANTHEM - WI':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'WELLCARE BY ALLWELL': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'OTHER BLUE PLANS ANTHEM - WI':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth, Group Number',
    'MOLINA HEALTHCARE WISCONSIN':
      'Patient ID, Date of Birth, Patient State of Residence\nPatient Last Name, Patient First Name, Date of Birth, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient State of Residence\nPatient ID, Date of Birth, Patient Gender, Patient State of Residence\nPatient ID, Patient Last Name, Date of Birth, Patient Gender, Patient State of Residence',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'MHS WISCONSIN HEALTH': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
    'MANAGED HEALTH SERVICES - WI': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
  },
  {
    'HEALTHCARE MANAGEMENT ADMINISTRATORS':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Date of Birth',
    'MEDICAL MUTUAL':
      'Patient ID, Date of Birth\nPatient ID, Patient First Name, Patient Last Name\nPatient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient First Name, Patient Last Name, Date of Birth',
    'HEALTH NET': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'SUTTER HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMONWEALTH CARE ALLIANCE':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth',
    'AETNA (COMMERCIAL & MEDICARE)':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'ALLEGIANCE BENEFIT PLAN':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'BRIGHT HEALTHCARE': 'Patient ID, Patient First Name, Patient Last Name, Date of Birth',
    UNICARE:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name',
    'CARELON BEHAVIORAL HEALTH': 'Patient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHCARE HIGHWAYS': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    BCBSWY:
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name\nPatient ID, Patient Last Name\nPatient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name',
    'PREMERA DENTAL':
      'Patient ID\nPatient ID, Date of Birth\nPatient ID, Patient Last Name\nPatient ID, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ZING HEALTH':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'ALLINA HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'COMMUNITY HEALTH OPTIONS':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    EBMS: 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'INNOVATION HEALTH':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'TEXAS HEALTH AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    'HEALTHSCOPE BENEFITS INC AKA MORRIS ASSOCIATES':
      'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'HEALTHSCOPE HSB': 'Patient ID\nPatient Last name\nPatient First name\nDate of Birth\nGender\n',
    'MAGELLAN HEALTHCARE':
      'Patient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'BANNER AETNA':
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name\nPatient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth',
    HUMANA:
      'Patient ID, Date of Birth\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nMedicaid ID, Date of Birth, Patient State of Residence',
    'NATIONAL MEDICARE/CMS':
      'Patient ID, Patient First Name, Patient Last Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient ID, Patient First Name, Patient Last Name',
    'LASSO HEALTHCARE MSA':
      'Patient ID, Patient Last Name, Patient First Name\nPatient ID, Patient Last Name, Patient First Name, Date of Birth\nPatient ID, Patient Last Name, Date of Birth\nPatient Last Name, Patient First Name, Date of Birth',
    'DOCTORS HEALTHCARE PLANS': 'Patient ID, Date of Birth',
  },
];
let payerNames = [
  {
    Payer_Name: 'ABSOLUTE TOTAL CARE',
  },
  {
    Payer_Name: 'ALBUQUERQUE PUBLIC SCHOOLS',
  },
  {
    Payer_Name: 'AMBETTER',
  },
  {
    Payer_Name: 'AMERIGROUP',
  },
  {
    Payer_Name: 'ANTHEM - GA',
  },
  {
    Payer_Name: 'ANTHEM BC CALIFORNIA',
  },
  {
    Payer_Name: 'ANTHEM BC CALIFORNIA DENTAL',
  },
  {
    Payer_Name: 'ANTHEM BCBS (OHIO MEDICAID)',
  },
  {
    Payer_Name: 'ANTHEM BCBS COLORADO',
  },
  {
    Payer_Name: 'ANTHEM BCBS COLORADO DENTAL',
  },
  {
    Payer_Name: 'ANTHEM BCBS CONNECTICUT',
  },
  {
    Payer_Name: 'ANTHEM BCBS CONNECTICUT DENTAL',
  },
  {
    Payer_Name: 'ANTHEM BCBS INDIANA',
  },
  {
    Payer_Name: 'ANTHEM BCBS INDIANA DENTAL',
  },
  {
    Payer_Name: 'ANTHEM BCBS KENTUCKY',
  },
  {
    Payer_Name: 'ANTHEM BCBS KENTUCKY DENTAL',
  },
  {
    Payer_Name: 'ANTHEM BCBS MAINE',
  },
  {
    Payer_Name: 'ANTHEM BCBS MAINE DENTAL',
  },
  {
    Payer_Name: 'ANTHEM BCBS MISSOURI',
  },
  {
    Payer_Name: 'ANTHEM BCBS MISSOURI DENTAL',
  },
  {
    Payer_Name: 'ANTHEM BCBS NEVADA',
  },
  {
    Payer_Name: 'ANTHEM BCBS NEVADA DENTAL',
  },
  {
    Payer_Name: 'ANTHEM BCBS NEW HAMPSHIRE',
  },
  {
    Payer_Name: 'ANTHEM BCBS NEW HAMPSHIRE DENTAL',
  },
  {
    Payer_Name: 'ANTHEM BCBS OHIO',
  },
  {
    Payer_Name: 'ANTHEM BCBS OHIO DENTAL',
  },
  {
    Payer_Name: 'ANTHEM BCBS VIRGINIA',
  },
  {
    Payer_Name: 'ANTHEM BCBS VIRGINIA DENTAL',
  },
  {
    Payer_Name: 'ANTHEM BCBS WISCONSIN',
  },
  {
    Payer_Name: 'ANTHEM BCBS WISCONSIN DENTAL',
  },
  {
    Payer_Name: 'ANTHEM MAINEHEALTH',
  },
  {
    Payer_Name: 'ANTHEM MEDICAID NEVADA',
  },
  {
    Payer_Name: 'ANTHEM-GA DENTAL',
  },
  {
    Payer_Name: 'ARIZONA COMPLETE HEALTH',
  },
  {
    Payer_Name: 'ARKANSAS BCBS',
  },
  {
    Payer_Name: 'ARKANSAS BCBS OTHER BLUE PLANS',
  },
  {
    Payer_Name: 'ARKANSAS TOTAL CARE',
  },
  {
    Payer_Name: 'ASCENSION COMPLETE',
  },
  {
    Payer_Name: 'ASURIS NORTHWEST HEALTH',
  },
  {
    Payer_Name: 'ASURIS NORTHWEST HEALTH DENTAL',
  },
  {
    Payer_Name: 'BCBS ANTHEM VIVITY',
  },
  {
    Payer_Name: 'BCBS ARKANSAS',
  },
  {
    Payer_Name: 'BCBS ILLINOIS',
  },
  {
    Payer_Name: 'BCBS MICHIGAN',
  },
  {
    Payer_Name: 'BCBS MINNESOTA',
  },
  {
    Payer_Name: 'BCBS MONTANA',
  },
  {
    Payer_Name: 'BCBS NEW MEXICO',
  },
  {
    Payer_Name: 'BCBS NORTH DAKOTA',
  },
  {
    Payer_Name: 'BCBS NORTH DAKOTA',
  },
  {
    Payer_Name: 'BCBS OKLAHOMA',
  },
  {
    Payer_Name: 'BCBS TEXAS',
  },
  {
    Payer_Name: 'BCBS WYOMING',
  },
  {
    Payer_Name: 'BCBSMN BLUE PLUS MEDICAID',
  },
  {
    Payer_Name: 'BLUE MEDICARE ADVANTAGE',
  },
  {
    Payer_Name: 'BLUERIDE NON-EMERG TRANSPORTATION',
  },
  {
    Payer_Name: 'BRIDGESPAN',
  },
  {
    Payer_Name: 'BRIDGESPAN HEALTH COMPANY DENTAL',
  },
  {
    Payer_Name: 'BRIDGEWAY HEALTH SOLUTIONS',
  },
  {
    Payer_Name: 'BRIGHT HEALTHCARE',
  },
  {
    Payer_Name: 'BUCKEYE HEALTH PLAN',
  },
  {
    Payer_Name: 'CALIFORNIA HEALTH AND WELLNESS',
  },
  {
    Payer_Name: 'CAPITAL HEALTH PLAN',
  },
  {
    Payer_Name: 'CARE N CARE',
  },
  {
    Payer_Name: 'Care1st Health Plan Arizona (AHCCS Complete Care)',
  },
  {
    Payer_Name: 'Care1st Health Plan Arizona (RHBA)',
  },
  {
    Payer_Name: 'CARELON BEHAVIORAL HEALTH',
  },
  {
    Payer_Name: 'CAREPLUS',
  },
  {
    Payer_Name: 'CARESOURCE HUMANA',
  },
  {
    Payer_Name: 'CARESOURCE INDIANA',
  },
  {
    Payer_Name: 'CARESOURCE NORTH CAROLINA',
  },
  {
    Payer_Name: 'CARESOURCE OF GEORGIA',
  },
  {
    Payer_Name: 'CARESOURCE OHIO',
  },
  {
    Payer_Name: 'CARESOURCE OHIO',
  },
  {
    Payer_Name: 'CARESOURCE OHIO MEDICAID MCE',
  },
  {
    Payer_Name: 'CARESOURCE WEST VIRGINIA',
  },
  {
    Payer_Name: 'CAROLINA COMPLETE HEALTH',
  },
  {
    Payer_Name: 'CELTICARE HEALTH',
  },
  {
    Payer_Name: 'CENPATICO BEHAVIORAL HEALTH',
  },
  {
    Payer_Name: 'CENTENE',
  },
  {
    Payer_Name: 'CENTENE MEDICARE',
  },
  {
    Payer_Name: 'CENTENE OHIO MEDICAID MCE',
  },
  {
    Payer_Name: 'CLEAR HEALTH ALLIANCE',
  },
  {
    Payer_Name: 'COLORADO COMMUNITY HEALTH ALLIANCE',
  },
  {
    Payer_Name: 'COOK MEDICAL GROUP',
  },
  {
    Payer_Name: 'COORDINATED CARE',
  },
  {
    Payer_Name: 'COUNTYCARE',
  },
  {
    Payer_Name: 'DELAWARE FIRST HEALTH',
  },
  {
    Payer_Name: 'EASTERN MAINE HEALTHCARE SYSTEMS (EMHS) EMPLOYEE HEALTH PLAN',
  },
  {
    Payer_Name: 'EASY CHOICE HEALTH PLAN CALIFORNIA',
  },
  {
    Payer_Name: 'EBMS',
  },
  {
    Payer_Name: 'EMPIRE BC NEW YORK',
  },
  {
    Payer_Name: 'EMPIRE BC NEW YORK DENTAL',
  },
  {
    Payer_Name: 'EMPIRE BCBS NEW YORK',
  },
  {
    Payer_Name: 'EMPIRE BCBS NEW YORK',
  },
  {
    Payer_Name: 'EMPLOYEE BENEFIT MANAGEMENT SYSTEM (EBMS)',
  },
  {
    Payer_Name: 'EMPOWER ARKANSAS',
  },
  {
    Payer_Name: 'FIDELIS CARE NEW YORK',
  },
  {
    Payer_Name: 'FLORIDA BLUE (BCBS FLORIDA)',
  },
  {
    Payer_Name: 'GOLDEN WEST DENTAL',
  },
  {
    Payer_Name: 'GRANITE STATE HEALTH PLAN',
  },
  {
    Payer_Name: 'HARMONY HEALTH PLAN',
  },
  {
    Payer_Name: 'HEALTH NET',
  },
  {
    Payer_Name: 'HEALTH NET NATIONAL',
  },
  {
    Payer_Name: 'HEALTH TRADITION',
  },
  {
    Payer_Name: 'HEALTHCARE MANAGEMENT ADMINISTRATORS (HMA)',
  },
  {
    Payer_Name: 'HEALTHEASE',
  },
  {
    Payer_Name: 'HEALTHEASE KIDS',
  },
  {
    Payer_Name: 'HEALTHY BLUE DUAL ADVANTAGE LOUISIANA',
  },
  {
    Payer_Name: 'HEALTHY BLUE LOUISIANA',
  },
  {
    Payer_Name: 'HEALTHY BLUE MISSOURI',
  },
  {
    Payer_Name: 'HEALTHY BLUE NEBRASKA',
  },
  {
    Payer_Name: 'HEALTHY BLUE NORTH CAROLINA',
  },
  {
    Payer_Name: 'HEALTHY BLUE SOUTH CAROLINA',
  },
  {
    Payer_Name: 'HIGHMARK BLUE CROSS BLUE SHIELD OF WESTERN NEW YORK',
  },
  {
    Payer_Name: 'HIGHMARK BLUE CROSS BLUE SHIELD OF WESTERN NEW YORK',
  },
  {
    Payer_Name: 'HOME STATE HEALTH PLAN',
  },
  {
    Payer_Name: 'HUDSON HEALTH PLAN',
  },
  {
    Payer_Name: 'HUMANA',
  },
  {
    Payer_Name: 'HUMANA - HEALTHY HORIZONS (OHIO MEDICAID)',
  },
  {
    Payer_Name: 'HUMANA CARESOURCE',
  },
  {
    Payer_Name: 'HUMANA LONG TERM CARE',
  },
  {
    Payer_Name: 'ILLINICARE HEALTH PLAN',
  },
  {
    Payer_Name: 'IOWA TOTAL CARE',
  },
  {
    Payer_Name: 'LIFEWISE ASSURANCE COMPANY',
  },
  {
    Payer_Name: 'LIFEWISE HEALTH PLAN OF OREGON',
  },
  {
    Payer_Name: 'LIFEWISE HEALTH PLAN OF WASHINGTON',
  },
  {
    Payer_Name: 'LOUISIANA HEALTHCARE CONNECTIONS',
  },
  {
    Payer_Name: 'MAGNOLIA HEALTH',
  },
  {
    Payer_Name: 'MAINE COMMUNITY HEALTH OPTIONS',
  },
  {
    Payer_Name: 'MANAGED HEALTH SERVICES INDIANA',
  },
  {
    Payer_Name: 'MARYLAND PHYSICIANS CARE',
  },
  {
    Payer_Name: 'MARYLAND PHYSICIANS CARE',
  },
  {
    Payer_Name: 'MASSACHUSETTS BEHAVIORAL HEALTH (BHO)',
  },
  {
    Payer_Name: 'MEDICA GOVERNMENT PROGRAMS',
  },
  {
    Payer_Name: 'MEDICA HEALTH PLAN SOLUTIONS',
  },
  {
    Payer_Name: 'MEDICA IFB',
  },
  {
    Payer_Name: 'MEDICARE FLORIDA BLUE',
  },
  {
    Payer_Name: 'MERIDIAN HEALTH PLAN ILLINOIS',
  },
  {
    Payer_Name: 'MERIDIAN HEALTH PLAN ILLINOIS',
  },
  {
    Payer_Name: 'MERIDIAN HEALTH PLAN ILLINOIS COMPLETE',
  },
  {
    Payer_Name: 'MERIDIAN HEALTH PLAN ILLINOIS COMPLETE',
  },
  {
    Payer_Name: 'MERIDIAN HEALTH PLAN ILLINOIS MEDICAID',
  },
  {
    Payer_Name: 'MERIDIAN HEALTH PLAN MICHIGAN COMPLETE',
  },
  {
    Payer_Name: 'MHS WISCONSIN HEALTH',
  },
  {
    Payer_Name: 'MICHIGAN COMPLETE HEALTH',
  },
  {
    Payer_Name: 'MICHIGAN COMPLETE HEALTH (FIDELIS SECURE LIFE)',
  },
  {
    Payer_Name: 'MORECARE',
  },
  {
    Payer_Name: 'NEBRASKA TOTAL CARE',
  },
  {
    Payer_Name: 'NH HEALTHY FAMILIES',
  },
  {
    Payer_Name: 'OHANA HEALTH PLAN',
  },
  {
    Payer_Name: 'OTHER BLUE PLANS PREMERA BLUEEXCHANGE (SHARED ADMIN)',
  },
  {
    Payer_Name: 'PARTNERS HEALTH MANAGEMENT PHYSICAL HEALTH',
  },
  {
    Payer_Name: 'PEACH STATE HEALTH PLAN',
  },
  {
    Payer_Name: 'PENNSYLVANIA HEALTH AND WELLNESS',
  },
  {
    Payer_Name: 'PREMERA BLUE CROSS (WA)',
  },
  {
    Payer_Name: 'PREMERA BLUE CROSS BLUE SHIELD OF ALASKA',
  },
  {
    Payer_Name: 'PROFESSIONAL BENEFIT ADMINISTRATORS INCORPORATED (OAK BROOK ILLINOIS)',
  },
  {
    Payer_Name: 'QUALCHOICE ARKANSAS',
  },
  {
    Payer_Name: 'REGENCE BCBS OF OREGON DENTAL',
  },
  {
    Payer_Name: 'REGENCE BCBS OF UTAH DENTAL',
  },
  {
    Payer_Name: 'REGENCE BCBS OREGON',
  },
  {
    Payer_Name: 'REGENCE BCBS UTAH',
  },
  {
    Payer_Name: 'REGENCE BLUESHIELD DENTAL',
  },
  {
    Payer_Name: 'REGENCE BLUESHIELD OF IDAHO DENTAL',
  },
  {
    Payer_Name: 'REGENCE BS IDAHO',
  },
  {
    Payer_Name: 'REGENCE BS WASHINGTON',
  },
  {
    Payer_Name: 'REGENCE GROUP ADMINISTRATORS',
  },
  {
    Payer_Name: 'ROCKY MOUNTAIN LIFE',
  },
  {
    Payer_Name: 'SHARED HEALTH MISSISSIPPI',
  },
  {
    Payer_Name: 'SILVERSUMMIT',
  },
  {
    Payer_Name: 'SIMPLY HEALTHCARE NEW',
  },
  {
    Payer_Name: 'STAYWELL',
  },
  {
    Payer_Name: 'STAYWELL KIDS',
  },
  {
    Payer_Name: 'SUMMIT COMMUNITY CARE',
  },
  {
    Payer_Name: 'SUNFLOWER HEALTH PLAN',
  },
  {
    Payer_Name: 'SUNSHINE HEALTH',
  },
  {
    Payer_Name: 'SUPERIOR HEALTHPLAN',
  },
  {
    Payer_Name: 'TODAYS HEALTH',
  },
  {
    Payer_Name: 'TODAYS OPTIONS (AMERICAN PROGRESSIVE AND PYRAMID LIFE)',
  },
  {
    Payer_Name: 'TRILLIUM COMMUNITY HEALTH PLAN',
  },
  {
    Payer_Name: 'TRUE HEALTH NEW MEXICO',
  },
  {
    Payer_Name: 'TRULI FOR HEALTH',
  },
  {
    Payer_Name: 'UNICARE',
  },
  {
    Payer_Name: 'UNICARE',
  },
  {
    Payer_Name: 'UNICARE DENTAL',
  },
  {
    Payer_Name: 'VNSNY CHOICE',
  },
  {
    Payer_Name: 'WEA TRUST',
  },
  {
    Payer_Name: 'WELLCARE',
  },
  {
    Payer_Name: 'WELLCARE',
  },
  {
    Payer_Name: 'WELLCARE BY ALLWELL',
  },
  {
    Payer_Name: 'WELLCARE BY FIDELIS CARE',
  },
  {
    Payer_Name: 'WELLCARE BY HEALTH NET',
  },
  {
    Payer_Name: 'WELLCARE BY OHANA',
  },
  {
    Payer_Name: 'WELLCARE BY TRILLIUM ADVANTAGE',
  },
  {
    Payer_Name: 'WELLCARE HEALTH PLANS',
  },
  {
    Payer_Name: 'WELLMARK BCBS (IOWA, SOUTH DAKOTA)',
  },
  {
    Payer_Name: 'WELLPOINT',
  },
  {
    Payer_Name: 'WEST VIRGINIA CARESOURCE MARKETPLACE',
  },
  {
    Payer_Name: 'WESTERN SKY COMMUNITY CARE',
  },
  {
    Payer_Name: 'YOUTHCARE HEALTHCHOICE ILLINOIS',
  },
];
let claimStatusBaseArray = [
  {
    payer_id: '36273',
    payer_name: 'AARP UNITEDHEALTHCARE INSURANCE COMPANY',
  },
  {
    payer_id: '68069',
    payer_name: 'ABSOLUTE TOTAL CARE',
  },
  {
    payer_id: '11009',
    payer_name: 'ACS BENEFIT SERVICES',
  },
  {
    payer_id: 'AETNA',
    payer_name: 'AETNA',
  },
  {
    payer_id: 'ABH01',
    payer_name: 'AETNA BETTER HEALTH',
  },
  {
    payer_id: 'ABHFL',
    payer_name: 'AETNA BETTER HEALTH FLORIDA',
  },
  {
    payer_id: '10892',
    payer_name: 'AETNA BETTER HEALTH ILLINOIS',
  },
  {
    payer_id: 'ABHKY',
    payer_name: 'AETNA BETTER HEALTH KENTUCKY',
  },
  {
    payer_id: 'ABHLA',
    payer_name: 'AETNA BETTER HEALTH LOUISIANA',
  },
  {
    payer_id: '128MD',
    payer_name: 'AETNA BETTER HEALTH MARYLAND',
  },
  {
    payer_id: '128MI',
    payer_name: 'AETNA BETTER HEALTH MICHIGAN',
  },
  {
    payer_id: '46320',
    payer_name: 'AETNA BETTER HEALTH NEW JERSEY',
  },
  {
    payer_id: '50023',
    payer_name: 'AETNA BETTER HEALTH OHIO',
  },
  {
    payer_id: '23228',
    payer_name: 'AETNA BETTER HEALTH PENNSYLVANIA',
  },
  {
    payer_id: '10895T',
    payer_name: 'AETNA BETTER HEALTH TEXAS',
  },
  {
    payer_id: 'ABHVA',
    payer_name: 'AETNA BETTER HEALTH VIRGINIA',
  },
  {
    payer_id: 'COVTY00182',
    payer_name: 'AETNA BETTER HEALTH WEST VIRGINIA',
  },
  {
    payer_id: '60054',
    payer_name: 'AETNA INSURANCE COMPANY',
  },
  {
    payer_id: '10897',
    payer_name: 'AETNA SENIOR SUPPLEMENTAL',
  },
  {
    payer_id: 'AFLAC',
    payer_name: 'AFLAC',
  },
  {
    payer_id: '81040',
    payer_name: 'ALLEGIANCE BENEFIT PLAN MANAGEMENT INCORPORATED',
  },
  {
    payer_id: 'ABSYS',
    payer_name: 'ALLIED BENEFIT SYSTEMS INCORPORATED',
  },
  {
    payer_id: '54398',
    payer_name: 'ALLINA HEALTH',
  },
  {
    payer_id: '81400',
    payer_name: 'ALLSAVERS LIFE INSURANCE COMPANY',
  },
  {
    payer_id: '68069',
    payer_name: 'AMBETTER',
  },
  {
    payer_id: '10985',
    payer_name: 'AMERIBEN SOLUTIONS INCORPORATED',
  },
  {
    payer_id: '81400',
    payer_name: 'AMERICAN MEDICAL SECURITY (AMS)',
  },
  {
    payer_id: 'ANICO',
    payer_name: 'AMERICAN NATIONAL INSURANCE COMPANY',
  },
  {
    payer_id: '10596',
    payer_name: 'AMERICAN NATIONAL LIFE INSURANCE COMPANY OF TEXAS',
  },
  {
    payer_id: 'APWU',
    payer_name: 'AMERICAN POSTAL WORKERS UNION',
  },
  {
    payer_id: 'ARIC',
    payer_name: 'AMERICAN REPUBLIC INSURANCE COMPANY',
  },
  {
    payer_id: 'AGPMEDICAID',
    payer_name: 'AMERIGROUP',
  },
  {
    payer_id: 'AGPMEDICAID',
    payer_name: 'AMERIGROUP',
  },
  {
    payer_id: 'AGPMEDICAID',
    payer_name: 'AMERIGROUP (CLAIMS)',
  },
  {
    payer_id: '45056',
    payer_name: 'AMERIHEALTH CARITAS FLORIDA',
  },
  {
    payer_id: 'LCARE',
    payer_name: 'AMERIHEALTH CARITAS LOUISIANA (LACARE)',
  },
  {
    payer_id: '83148',
    payer_name: 'AMERIHEALTH CARITAS NEXT NORTH CAROLINA',
  },
  {
    payer_id: '81671',
    payer_name: 'AMERIHEALTH CARITAS NORTH CAROLINA',
  },
  {
    payer_id: '77062',
    payer_name: 'AMERIHEALTH CARITAS VIP CARE',
  },
  {
    payer_id: '77799',
    payer_name: 'AMERIHEALTH DELAWARE',
  },
  {
    payer_id: 'AMTAS00428',
    payer_name: 'AMERITAS DENTAL FIRST RELIANCE STANDARD LIFE',
  },
  {
    payer_id: '101',
    payer_name: 'ANTHEM - GA',
  },
  {
    payer_id: '101',
    payer_name: 'ANTHEM - GA',
  },
  {
    payer_id: '040',
    payer_name: 'ANTHEM BC CALIFORNIA',
  },
  {
    payer_id: '040',
    payer_name: 'ANTHEM BC CALIFORNIA',
  },
  {
    payer_id: '84103',
    payer_name: 'ANTHEM BC CALIFORNIA DENTAL',
  },
  {
    payer_id: '0002937',
    payer_name: 'ANTHEM BCBS (OHIO MEDICAID)',
  },
  {
    payer_id: '050',
    payer_name: 'ANTHEM BCBS COLORADO',
  },
  {
    payer_id: '050',
    payer_name: 'ANTHEM BCBS COLORADO',
  },
  {
    payer_id: 'AD050',
    payer_name: 'ANTHEM BCBS COLORADO DENTAL',
  },
  {
    payer_id: '060',
    payer_name: 'ANTHEM BCBS CONNECTICUT',
  },
  {
    payer_id: '060',
    payer_name: 'ANTHEM BCBS CONNECTICUT',
  },
  {
    payer_id: 'AD060',
    payer_name: 'ANTHEM BCBS CONNECTICUT DENTAL',
  },
  {
    payer_id: '130',
    payer_name: 'ANTHEM BCBS INDIANA',
  },
  {
    payer_id: '130',
    payer_name: 'ANTHEM BCBS INDIANA',
  },
  {
    payer_id: 'AD130',
    payer_name: 'ANTHEM BCBS INDIANA DENTAL',
  },
  {
    payer_id: '160',
    payer_name: 'ANTHEM BCBS KENTUCKY',
  },
  {
    payer_id: '160',
    payer_name: 'ANTHEM BCBS KENTUCKY',
  },
  {
    payer_id: 'AD160',
    payer_name: 'ANTHEM BCBS KENTUCKY DENTAL',
  },
  {
    payer_id: '180',
    payer_name: 'ANTHEM BCBS MAINE',
  },
  {
    payer_id: '180',
    payer_name: 'ANTHEM BCBS MAINE',
  },
  {
    payer_id: 'AD180',
    payer_name: 'ANTHEM BCBS MAINE DENTAL',
  },
  {
    payer_id: '241',
    payer_name: 'ANTHEM BCBS MISSOURI',
  },
  {
    payer_id: '241',
    payer_name: 'ANTHEM BCBS MISSOURI',
  },
  {
    payer_id: 'AD241',
    payer_name: 'ANTHEM BCBS MISSOURI DENTAL',
  },
  {
    payer_id: '265',
    payer_name: 'Anthem BCBS Nevada',
  },
  {
    payer_id: '265',
    payer_name: 'ANTHEM BCBS NEVADA',
  },
  {
    payer_id: '265',
    payer_name: 'ANTHEM BCBS NEVADA',
  },
  {
    payer_id: 'AD265',
    payer_name: 'ANTHEM BCBS NEVADA DENTAL',
  },
  {
    payer_id: '270',
    payer_name: 'ANTHEM BCBS NEW HAMPSHIRE',
  },
  {
    payer_id: '270',
    payer_name: 'ANTHEM BCBS NEW HAMPSHIRE',
  },
  {
    payer_id: 'AD270',
    payer_name: 'ANTHEM BCBS NEW HAMPSHIRE DENTAL',
  },
  {
    payer_id: '332',
    payer_name: 'ANTHEM BCBS OHIO',
  },
  {
    payer_id: '332',
    payer_name: 'ANTHEM BCBS OHIO',
  },
  {
    payer_id: 'AD332',
    payer_name: 'ANTHEM BCBS OHIO DENTAL',
  },
  {
    payer_id: '423',
    payer_name: 'ANTHEM BCBS VIRGINIA',
  },
  {
    payer_id: '423',
    payer_name: 'ANTHEM BCBS VIRGINIA',
  },
  {
    payer_id: 'AD423',
    payer_name: 'ANTHEM BCBS VIRGINIA DENTAL',
  },
  {
    payer_id: '450',
    payer_name: 'ANTHEM BCBS WISCONSIN',
  },
  {
    payer_id: '450',
    payer_name: 'ANTHEM BCBS WISCONSIN',
  },
  {
    payer_id: 'AD450',
    payer_name: 'ANTHEM BCBS WISCONSIN DENTAL',
  },
  {
    payer_id: '958',
    payer_name: 'ANTHEM MAINEHEALTH',
  },
  {
    payer_id: '958',
    payer_name: 'ANTHEM MAINEHEALTH',
  },
  {
    payer_id: '267',
    payer_name: 'ANTHEM MEDICAID - NV',
  },
  {
    payer_id: '265',
    payer_name: 'ANTHEM MEDICAID NEVADA',
  },
  {
    payer_id: '265',
    payer_name: 'ANTHEM MEDICAID NEVADA',
  },
  {
    payer_id: 'CBGA1',
    payer_name: 'ANTHEM-GA DENTAL',
  },
  {
    payer_id: '68069',
    payer_name: 'ARIZONA COMPLETE HEALTH',
  },
  {
    payer_id: '03432',
    payer_name: 'ARIZONA PHYSICIANS IPA',
  },
  {
    payer_id: '00520',
    payer_name: 'ARKANSAS BCBS',
  },
  {
    payer_id: 'ARKANSASBCBSOTHERBLUEPLANS',
    payer_name: 'ARKANSAS BCBS OTHER BLUE PLANS',
  },
  {
    payer_id: '68069',
    payer_name: 'ARKANSAS TOTAL CARE',
  },
  {
    payer_id: '87726',
    payer_name: 'ARNETT HEALTH PLANS',
  },
  {
    payer_id: '68069',
    payer_name: 'ASCENSION COMPLETE',
  },
  {
    payer_id: 'ASURIS NORTHWEST HEALTH',
    payer_name: 'ASURIS NORTHWEST HEALTH',
  },
  {
    payer_id: '93221',
    payer_name: 'ASURIS NORTHWEST HEALTH',
  },
  {
    payer_id: '93221',
    payer_name: 'ASURIS NORTHWEST HEALTH',
  },
  {
    payer_id: '93221D',
    payer_name: 'ASURIS NORTHWEST HEALTH DENTAL',
  },
  {
    payer_id: '10869',
    payer_name: 'AVERA HEALTH PLANS',
  },
  {
    payer_id: '67895',
    payer_name: 'BANNER',
  },
  {
    payer_id: '67895',
    payer_name: 'BANNER HEALTH AND AETNA HEALTH INSURANCE COMPANY',
  },
  {
    payer_id: '66901',
    payer_name: 'BANNER UNIVERSITY FAMILY CARE (UNIVERSITY OF ARIZONA HEALTH PLANS)',
  },
  {
    payer_id: 'MCDIL',
    payer_name: 'BC COMMUNITY OPTIONS',
  },
  {
    payer_id: 'MCDIL',
    payer_name: 'BC COMMUNITY OPTIONS',
  },
  {
    payer_id: 'HMAPD',
    payer_name: 'BC ILLINOIS MEDICARE ADVANTAGE',
  },
  {
    payer_id: 'HMAPD',
    payer_name: 'BC ILLINOIS MEDICARE ADVANTAGE',
  },
  {
    payer_id: 'HMAPD',
    payer_name: 'BC MONTANA MEDICARE ADVANTAGE',
  },
  {
    payer_id: 'HMAPD',
    payer_name: 'BC MONTANA MEDICARE ADVANTAGE',
  },
  {
    payer_id: 'HMAPD',
    payer_name: 'BC NEW MEXICO MEDICARE ADVANTAGE',
  },
  {
    payer_id: 'HMAPD',
    payer_name: 'BC NEW MEXICO MEDICARE ADVANTAGE',
  },
  {
    payer_id: 'HMAPD',
    payer_name: 'BC OKLAHOMA MEDICARE ADVANTAGE',
  },
  {
    payer_id: 'HMAPD',
    payer_name: 'BC OKLAHOMA MEDICARE ADVANTAGE',
  },
  {
    payer_id: 'HMAPD',
    payer_name: 'BC TEXAS MEDICARE ADVANTAGE',
  },
  {
    payer_id: 'HMAPD',
    payer_name: 'BC TEXAS MEDICARE ADVANTAGE',
  },
  {
    payer_id: '00510BC',
    payer_name: 'BCBS ALABAMA INSTITUTIONAL',
  },
  {
    payer_id: '00510BS',
    payer_name: 'BCBS ALABAMA PROFESSIONAL',
  },
  {
    payer_id: '53589',
    payer_name: 'BCBS ARIZONA',
  },
  {
    payer_id: '00520',
    payer_name: 'BCBS ARKANSAS',
  },
  {
    payer_id: 'BCBSIL',
    payer_name: 'BCBS ILLINOIS',
  },
  {
    payer_id: 'BCBSIL',
    payer_name: 'BCBS ILLINOIS',
  },
  {
    payer_id: 'G00621',
    payer_name: 'BCBS ILLINOIS',
  },
  {
    payer_id: 'BCBSKS',
    payer_name: 'BCBS KANSAS',
  },
  {
    payer_id: '10473',
    payer_name: 'BCBS KANSAS CITY',
  },
  {
    payer_id: '53120',
    payer_name: 'BCBS LOUISIANA',
  },
  {
    payer_id: '700',
    payer_name: 'BCBS MASSACHUSETTS',
  },
  {
    payer_id: '00710P',
    payer_name: 'BCBS MICHIGAN',
  },
  {
    payer_id: '00710',
    payer_name: 'BCBS MICHIGAN AND BLUE CARE NETWORK',
  },
  {
    payer_id: 'BCBSMN',
    payer_name: 'BCBS MINNESOTA ',
  },
  {
    payer_id: '00720',
    payer_name: 'BCBS MINNESOTA',
  },
  {
    payer_id: 'BCMS',
    payer_name: 'BCBS MISSISSIPPI',
  },
  {
    payer_id: 'G00751',
    payer_name: 'BCBS MONTANA',
  },
  {
    payer_id: 'G00751',
    payer_name: 'BCBS MONTANA',
  },
  {
    payer_id: 'G00751',
    payer_name: 'BCBS MONTANA',
  },
  {
    payer_id: 'BCNEC',
    payer_name: 'BCBS NEBRASKA',
  },
  {
    payer_id: 'BCBSNM',
    payer_name: 'BCBS NEW MEXICO',
  },
  {
    payer_id: 'G00790',
    payer_name: 'BCBS NEW MEXICO',
  },
  {
    payer_id: 'BCBSNM',
    payer_name: 'BCBS NEW MEXICO',
  },
  {
    payer_id: 'BCSNC',
    payer_name: 'BCBS NORTH CAROLINA',
  },
  {
    payer_id: 'G00840',
    payer_name: 'BCBS OKLAHOMA',
  },
  {
    payer_id: 'BCBSOK',
    payer_name: 'BCBS OKLAHOMA',
  },
  {
    payer_id: 'BCBSOK',
    payer_name: 'BCBS OKLAHOMA',
  },
  {
    payer_id: 'BCRIC',
    payer_name: 'BCBS RHODE ISLAND',
  },
  {
    payer_id: 'BCSCC',
    payer_name: 'BCBS SOUTH CAROLINA',
  },
  {
    payer_id: 'BCSDC',
    payer_name: 'BCBS SOUTH DAKOTA',
  },
  {
    payer_id: '00390',
    payer_name: 'BCBS TENNESSEE',
  },
  {
    payer_id: '00390',
    payer_name: 'BCBS TENNESSEE',
  },
  {
    payer_id: 'BCBSTX',
    payer_name: 'BCBS TEXAS',
  },
  {
    payer_id: 'G84980',
    payer_name: 'BCBS TEXAS',
  },
  {
    payer_id: 'BCBSTX',
    payer_name: 'BCBS TEXAS',
  },
  {
    payer_id: 'HCSVC',
    payer_name: 'BCBS TEXAS MEDICAID STAR CHIP',
  },
  {
    payer_id: 'HCSVC',
    payer_name: 'BCBS TEXAS MEDICAID STAR CHIP',
  },
  {
    payer_id: 'HCSVC',
    payer_name: 'BCBS TEXAS MEDICAID STAR Kids',
  },
  {
    payer_id: 'HCSVC',
    payer_name: 'BCBS TEXAS MEDICAID STAR Kids',
  },
  {
    payer_id: '10624',
    payer_name: 'BCBS VERMONT',
  },
  {
    payer_id: '00562',
    payer_name: 'BCBSMN BLUE PLUS MEDICAID',
  },
  {
    payer_id: 'BCBSTXMEDICAIDSTARKIDS',
    payer_name: 'BCBSTX MEDICAID STAR KIDS',
  },
  {
    payer_id: 'BCBSTXMEDICAIDSTARKIDS',
    payer_name: 'BCBSTX MEDICAID STAR KIDS',
  },
  {
    payer_id: 'GNMMD1',
    payer_name: 'BLUE CROSS COMMUNITY CENTENNIAL',
  },
  {
    payer_id: 'GNMMD1',
    payer_name: 'BLUE CROSS COMMUNITY CENTENNIAL',
  },
  {
    payer_id: 'GNMMD1',
    payer_name: 'BLUE CROSS COMMUNITY CENTENNIAL',
  },
  {
    payer_id: 'MCDIL',
    payer_name: 'BLUE CROSS COMMUNITY HEALTH PLANS',
  },
  {
    payer_id: 'MCDIL',
    payer_name: 'BLUE CROSS COMMUNITY HEALTH PLANS',
  },
  {
    payer_id: 'HMAPD',
    payer_name: 'BLUE CROSS MEDICARE ADVANTAGE',
  },
  {
    payer_id: 'HMAPD',
    payer_name: 'BLUE CROSS MEDICARE ADVANTAGE',
  },
  {
    payer_id: '772',
    payer_name: 'BLUE MEDICARE ADVANTAGE',
  },
  {
    payer_id: '772',
    payer_name: 'BLUE MEDICARE ADVANTAGE',
  },
  {
    payer_id: '84367',
    payer_name: 'BRAVEN HEALTH',
  },
  {
    payer_id: 'BRIDG',
    payer_name: 'BRIDGESPAN',
  },
  {
    payer_id: 'BRIDG',
    payer_name: 'BRIDGESPAN',
  },
  {
    payer_id: 'BRIDGD',
    payer_name: 'BRIDGESPAN HEALTH COMPANY DENTAL',
  },
  {
    payer_id: '68069',
    payer_name: 'BRIDGEWAY HEALTH SOLUTIONS',
  },
  {
    payer_id: 'BRGHT',
    payer_name: 'BRIGHT HEALTHCARE',
  },
  {
    payer_id: '100935',
    payer_name: 'BS CALIFORNIA',
  },
  {
    payer_id: '68069',
    payer_name: 'BUCKEYE HEALTH PLAN',
  },
  {
    payer_id: '68069',
    payer_name: 'CALIFORNIA HEALTH AND WELLNESS',
  },
  {
    payer_id: '101160',
    payer_name: 'CALOPTIMA',
  },
  {
    payer_id: '95112',
    payer_name: 'CAPITAL HEALTH PLAN',
  },
  {
    payer_id: '10903',
    payer_name: 'CAPITOL ADMINISTRATORS',
  },
  {
    payer_id: '57116',
    payer_name: 'CARE 1ST HEALTH PLAN ARIZONA',
  },
  {
    payer_id: '87726',
    payer_name: 'CARE IMPROVEMENT PLUS',
  },
  {
    payer_id: '66010',
    payer_name: 'CARE N CARE',
  },
  {
    payer_id: '68069',
    payer_name: 'Care1st Health Plan Arizona (AHCCS Complete Care)',
  },
  {
    payer_id: '68069',
    payer_name: 'Care1st Health Plan Arizona (RHBA)',
  },
  {
    payer_id: '190',
    payer_name: 'CAREFIRST BCBS',
  },
  {
    payer_id: 'BHOVO',
    payer_name: 'CARELON BEHAVIORAL HEALTH',
  },
  {
    payer_id: '95092',
    payer_name: 'CAREPLUS',
  },
  {
    payer_id: 'KYCS1',
    payer_name: 'CARESOURCE HUMANA',
  },
  {
    payer_id: 'INCS1',
    payer_name: 'CARESOURCE INDIANA',
  },
  {
    payer_id: 'NCCS1',
    payer_name: 'CARESOURCE NORTH CAROLINA',
  },
  {
    payer_id: 'GACS1',
    payer_name: 'CARESOURCE OF GEORGIA',
  },
  {
    payer_id: '31114',
    payer_name: 'CARESOURCE OHIO',
  },
  {
    payer_id: 'CARESOURCE OF OHIO',
    payer_name: 'CARESOURCE OHIO',
  },
  {
    payer_id: '0003150',
    payer_name: 'CARESOURCE OHIO MEDICAID MCE',
  },
  {
    payer_id: 'WVCS1',
    payer_name: 'CARESOURCE WEST VIRGINIA',
  },
  {
    payer_id: '68069',
    payer_name: 'CAROLINA COMPLETE HEALTH',
  },
  {
    payer_id: 'CHWSL',
    payer_name: 'CARPENTERS HEALTH AND WELFARE TRUST FUND ST LOUIS',
  },
  {
    payer_id: '68069',
    payer_name: 'CELTICARE HEALTH',
  },
  {
    payer_id: '68068',
    payer_name: 'CENPATICO BEHAVIORAL HEALTH',
  },
  {
    payer_id: '68069',
    payer_name: 'CENTENE',
  },
  {
    payer_id: '68069',
    payer_name: 'CENTENE MEDICARE',
  },
  {
    payer_id: '0004202',
    payer_name: 'CENTENE OHIO MEDICAID MCE',
  },
  {
    payer_id: '45564',
    payer_name: 'CENTIVO',
  },
  {
    payer_id: '10884',
    payer_name: 'CENTRAL CALIFORNIA ALLIANCE FOR HEALTH',
  },
  {
    payer_id: '13193',
    payer_name: 'CENTRAL RESERVE LIFE INSURANCE COMPANY',
  },
  {
    payer_id: '62308',
    payer_name: 'CIGNA',
  },
  {
    payer_id: 'ELDER',
    payer_name: 'CIGNA HEALTHSPRING (BRAVO HEALTH ELDER HEALTH)',
  },
  {
    payer_id: '13193',
    payer_name: 'CIGNA SUPPLEMENTAL',
  },
  {
    payer_id: 'CLEAR',
    payer_name: 'CLEAR HEALTH ALLIANCE',
  },
  {
    payer_id: 'CLEAR',
    payer_name: 'CLEAR HEALTH ALLIANCE',
  },
  {
    payer_id: 'CLEARLTC',
    payer_name: 'CLEAR HEALTH ALLIANCE LONG TERM CARE',
  },
  {
    payer_id: 'CRPHP',
    payer_name: 'CLOVER HEALTH',
  },
  {
    payer_id: 'COCHA',
    payer_name: 'COLORADO COMMUNITY HEALTH ALLIANCE',
  },
  {
    payer_id: 'COCHA',
    payer_name: 'COLORADO COMMUNITY HEALTH ALLIANCE',
  },
  {
    payer_id: 'A2793',
    payer_name: 'COMMONWEALTH CARE ALLIANCE (CCA)',
  },
  {
    payer_id: '48145',
    payer_name: 'COMMUNITY HEALTH CHOICE',
  },
  {
    payer_id: '95376',
    payer_name: 'COMMUNITY HEALTH GROUP',
  },
  {
    payer_id: '60495',
    payer_name: 'COMMUNITY HEALTH PLAN INCORPORATED',
  },
  {
    payer_id: '100347',
    payer_name: 'CONNECTICARE',
  },
  {
    payer_id: '68069',
    payer_name: 'COORDINATED CARE',
  },
  {
    payer_id: 'CRSMD',
    payer_name: 'CORESOURCE (MARYLAND PENNSYLVANIA ILLINOIS)',
  },
  {
    payer_id: '38225',
    payer_name: 'CORESOURCE DETROIT',
  },
  {
    payer_id: 'CTYCR',
    payer_name: 'COUNTYCARE',
  },
  {
    payer_id: 'COVTY00182',
    payer_name: 'COVENTRY HEALTH CARE CARELINK MEDICAID',
  },
  {
    payer_id: 'ABHFL',
    payer_name: 'COVENTRY HEALTH CARE OF FLORIDA',
  },
  {
    payer_id: '95964',
    payer_name: 'COVID19 HRSA UNINSURED TESTING AND TREATMENT FUND',
  },
  {
    payer_id: 'CREAT',
    payer_name: 'CREATE',
  },
  {
    payer_id: 'CREA8',
    payer_name: 'CREATE HEALTH PLAN',
  },
  {
    payer_id: '68069',
    payer_name: 'DELAWARE FIRST HEALTH',
  },
  {
    payer_id: 'DDPNM',
    payer_name: 'DELTA DENTAL NEW MEXICO',
  },
  {
    payer_id: '81039',
    payer_name: 'EBMS',
  },
  {
    payer_id: '303',
    payer_name: 'EMPIRE BC NEW YORK',
  },
  {
    payer_id: '303',
    payer_name: 'EMPIRE BC NEW YORK',
  },
  {
    payer_id: 'CBNY1',
    payer_name: 'EMPIRE BC NEW YORK DENTAL',
  },
  {
    payer_id: '803',
    payer_name: 'EMPIRE BCBS NEW YORK',
  },
  {
    payer_id: '803',
    payer_name: 'EMPIRE BCBS NEW YORK',
  },
  {
    payer_id: '84105',
    payer_name: 'EMPIRE BCBS NEW YORK',
  },
  {
    payer_id: '81039',
    payer_name: 'EMPLOYEE BENEFIT MANAGEMENT SYSTEM (EBMS)',
  },
  {
    payer_id: '12956',
    payer_name: 'EMPOWER ARKANSAS',
  },
  {
    payer_id: '10601',
    payer_name: 'ESSENCE HEALTHCARE',
  },
  {
    payer_id: 'ESSNC',
    payer_name: 'ESSENCE HEALTHCARE',
  },
  {
    payer_id: '10323',
    payer_name: 'EXCELLUS BCBS NEW YORK',
  },
  {
    payer_id: '71412',
    payer_name: 'EXCLUSICARE',
  },
  {
    payer_id: 'FALLN',
    payer_name: 'FALLON COMMUNITY HEALTH PLAN',
  },
  {
    payer_id: '11315',
    payer_name: 'FIDELIS CARE NEW YORK',
  },
  {
    payer_id: 'AMTAS00426',
    payer_name: 'FIRST AMERITAS NEW YORK',
  },
  {
    payer_id: 'FCHRT',
    payer_name: 'FIRST COMMUNITY HEALTH PLAN',
  },
  {
    payer_id: 'BCBSF',
    payer_name: 'FLORIDA BLUE (BCBS FLORIDA)',
  },
  {
    payer_id: 'BCBSF',
    payer_name: 'FLORIDA BLUE (BCBS FLORIDA)',
  },
  {
    payer_id: 'BCBSF',
    payer_name: 'FLORIDA BLUE (BCBS FLORIDA)',
  },
  {
    payer_id: 'BCBSF',
    payer_name: 'FLORIDA BLUE (BCBS FLORIDA)',
  },
  {
    payer_id: '593222484',
    payer_name: 'FLORIDA HEALTH CARE PLANS',
  },
  {
    payer_id: '15460I',
    payer_name: 'FREEDOM BLUE MEDICARE ADANTAGE INSTITUTIONAL',
  },
  {
    payer_id: '15460P',
    payer_name: 'FREEDOM BLUE MEDICARE ADANTAGE PROFESSIONAL',
  },
  {
    payer_id: '62308',
    payer_name: 'Freedom Life Insurance Company of America',
  },
  {
    payer_id: '44054',
    payer_name: 'GEHA CONNECTION DENTAL FEDERAL',
  },
  {
    payer_id: '07205',
    payer_name: 'GILSBAR',
  },
  {
    payer_id: '37602',
    payer_name: 'GOLDEN RULE',
  },
  {
    payer_id: 'GWD01',
    payer_name: 'GOLDEN WEST DENTAL',
  },
  {
    payer_id: '44054',
    payer_name: 'GOVERNMENT EMPLOYEES HEALTH ASSOCIATION (GEHA)',
  },
  {
    payer_id: '68069',
    payer_name: 'GRANITE STATE HEALTH PLAN',
  },
  {
    payer_id: 'GAIMS',
    payer_name: 'GREAT AMERICAN LIFE ASSURANCE COMPANY',
  },
  {
    payer_id: '14163',
    payer_name: 'HARMONY HEALTH PLAN',
  },
  {
    payer_id: 'HARHP14163',
    payer_name: 'HARMONY HEALTH PLAN',
  },
  {
    payer_id: '100141',
    payer_name: 'HARVARD PILGRIM HEALTH CARE',
  },
  {
    payer_id: '86066',
    payer_name: 'HAWAII MAINLAND ADMINISTRATORS',
  },
  {
    payer_id: '25126',
    payer_name: 'HEALTH AMERICA INCORPORATED HEALTH ASSURANCE ADVANTRA',
  },
  {
    payer_id: 'HCOAZ',
    payer_name: 'HEALTH CHOICE ARIZONA',
  },
  {
    payer_id: '13054',
    payer_name: 'HEALTH CHOICE GENERATIONS UTAH',
  },
  {
    payer_id: '45399',
    payer_name: 'HEALTH CHOICE UTAH',
  },
  {
    payer_id: 'HFRST',
    payer_name: 'HEALTH FIRST INSURANCE',
  },
  {
    payer_id: 'HPPA',
    payer_name: 'HEALTH PARTNERS PHILADELPHIA',
  },
  {
    payer_id: 'HMA01',
    payer_name: 'HEALTHCARE MANAGEMENT ADMINISTRATORS (HMA)',
  },
  {
    payer_id: '95376',
    payer_name: 'HealthChoice of Connecticut',
  },
  {
    payer_id: '14163',
    payer_name: 'HEALTHEASE',
  },
  {
    payer_id: '14163',
    payer_name: 'HEALTHEASE KIDS',
  },
  {
    payer_id: '80141',
    payer_name: 'HEALTHFIRST HEALTH PLAN NEW JERSEY',
  },
  {
    payer_id: '80141',
    payer_name: 'HEALTHFIRST INCORPORATED NEW YORK',
  },
  {
    payer_id: '80142',
    payer_name: 'HEALTHPARTNERS PENNSYLVANIA',
  },
  {
    payer_id: 'AGPMEDICAID',
    payer_name: 'HEALTHPLUS AMERIGROUP',
  },
  {
    payer_id: '551',
    payer_name: 'HEALTHY BLUE DUAL ADVANTAGE LOUISIANA',
  },
  {
    payer_id: '551',
    payer_name: 'HEALTHY BLUE DUAL ADVANTAGE LOUISIANA',
  },
  {
    payer_id: '661',
    payer_name: 'HEALTHY BLUE LOUISIANA',
  },
  {
    payer_id: '661',
    payer_name: 'HEALTHY BLUE LOUISIANA',
  },
  {
    payer_id: '541',
    payer_name: 'HEALTHY BLUE MISSOURI',
  },
  {
    payer_id: '541',
    payer_name: 'HEALTHY BLUE MISSOURI',
  },
  {
    payer_id: '544',
    payer_name: 'HEALTHY BLUE NEBRASKA',
  },
  {
    payer_id: '544',
    payer_name: 'HEALTHY BLUE NEBRASKA',
  },
  {
    payer_id: '602',
    payer_name: 'HEALTHY BLUE NORTH CAROLINA',
  },
  {
    payer_id: '602',
    payer_name: 'HEALTHY BLUE NORTH CAROLINA',
  },
  {
    payer_id: '383',
    payer_name: 'HEALTHY BLUE SOUTH CAROLINA',
  },
  {
    payer_id: '383',
    payer_name: 'HEALTHY BLUE SOUTH CAROLINA',
  },
  {
    payer_id: '47181',
    payer_name: 'HIGHMARK BCBS DELAWARE HEALTH OPTIONS INCORPORATED',
  },
  {
    payer_id: '54771I',
    payer_name: 'HIGHMARK BCBS PENNSYLVANIA INSTITUTIONAL',
  },
  {
    payer_id: '54771',
    payer_name: 'HIGHMARK BCBS PENNSYLVANIA PROFESSIONAL',
  },
  {
    payer_id: '54828',
    payer_name: 'HIGHMARK BCBS WEST VIRGINIA',
  },
  {
    payer_id: 'BCBSCAIDWNY',
    payer_name: 'HIGHMARK BLUE CROSS BLUE SHIELD OF WESTERN NEW YORK',
  },
  {
    payer_id: 'BCBSCAIDWNY',
    payer_name: 'HIGHMARK BLUE CROSS BLUE SHIELD OF WESTERN NEW YORK',
  },
  {
    payer_id: '246',
    payer_name: 'HIGHMARK BLUE CROSS BLUE SHIELD OF WESTERN NEW YORK',
  },
  {
    payer_id: '68069',
    payer_name: 'HOME STATE HEALTH PLAN',
  },
  {
    payer_id: '34150',
    payer_name: 'HOMETOWN HEALTH NETWORK',
  },
  {
    payer_id: 'BCNJC',
    payer_name: 'HORIZON BCBS NEW JERSEY',
  },
  {
    payer_id: '22326',
    payer_name: 'HORIZON NEW JERSEY HEALTH',
  },
  {
    payer_id: 'HUMANA',
    payer_name: 'HUMANA',
  },
  {
    payer_id: 'HUMANA',
    payer_name: 'HUMANA',
  },
  {
    payer_id: '61101',
    payer_name: 'HUMANA',
  },
  {
    payer_id: '61103',
    payer_name: 'HUMANA - HEALTHY HORIZONS (OHIO MEDICAID)',
  },
  {
    payer_id: 'HUMANA-CARESOURCE',
    payer_name: 'HUMANA CARESOURCE',
  },
  {
    payer_id: '65065',
    payer_name: 'HUMANA DENTAL',
  },
  {
    payer_id: '61115',
    payer_name: 'HUMANA LONG TERM CARE',
  },
  {
    payer_id: '68069',
    payer_name: 'ILLINICARE HEALTH PLAN',
  },
  {
    payer_id: '40025',
    payer_name: 'INNOVATION HEALTH',
  },
  {
    payer_id: '68069',
    payer_name: 'IOWA TOTAL CARE',
  },
  {
    payer_id: 'PFINL00143',
    payer_name: 'J F MALLOY AND ASSOCIATES',
  },
  {
    payer_id: '91051',
    payer_name: 'KAISER FOUNDATION HEALTH PLAN WASHINGTON',
  },
  {
    payer_id: '37217',
    payer_name: 'KEY BENEFIT ADMINISTRATORS (INDIANAPOLIS INDIANA)',
  },
  {
    payer_id: '23284',
    payer_name: 'KEYSTONE FIRST',
  },
  {
    payer_id: 'LACAR',
    payer_name: 'LA CARE HEALTH PLAN (CALIFORNIA)',
  },
  {
    payer_id: '93095',
    payer_name: 'LIFEWISE ASSURANCE COMPANY',
  },
  {
    payer_id: '93095',
    payer_name: 'LIFEWISE ASSURANCE COMPANY',
  },
  {
    payer_id: '93095',
    payer_name: 'LIFEWISE ASSURANCE COMPANY',
  },
  {
    payer_id: '93093',
    payer_name: 'LIFEWISE HEALTH PLAN OF OREGON',
  },
  {
    payer_id: '93093',
    payer_name: 'LIFEWISE HEALTH PLAN OF OREGON',
  },
  {
    payer_id: '93093',
    payer_name: 'LIFEWISE HEALTH PLAN OF OREGON',
  },
  {
    payer_id: '93094',
    payer_name: 'LIFEWISE HEALTH PLAN OF WASHINGTON',
  },
  {
    payer_id: '68069',
    payer_name: 'LOUISIANA HEALTHCARE CONNECTIONS',
  },
  {
    payer_id: 'LALMS',
    payer_name: 'LOYAL AMERICAN LIFE INSURANCE COMPANY',
  },
  {
    payer_id: '01260',
    payer_name: 'MAGELLAN HEALTHCARE',
  },
  {
    payer_id: '10867',
    payer_name: 'MAGNACARE',
  },
  {
    payer_id: '68069',
    payer_name: 'MAGNOLIA HEALTH',
  },
  {
    payer_id: 'MNCHO',
    payer_name: 'MAINE COMMUNITY HEALTH OPTIONS',
  },
  {
    payer_id: 'MCSCA',
    payer_name: 'MANAGED CARE SERVICES MCS CALIFORNIA',
  },
  {
    payer_id: 'MCSCA',
    payer_name: 'MANAGED CARE SERVICES MCS CALIFORNIA',
  },
  {
    payer_id: 'MCSCO',
    payer_name: 'MANAGED CARE SERVICES MCS COLORADO',
  },
  {
    payer_id: 'MCSCO',
    payer_name: 'MANAGED CARE SERVICES MCS COLORADO',
  },
  {
    payer_id: 'MCSNV',
    payer_name: 'MANAGED CARE SERVICES MCS NEVADA',
  },
  {
    payer_id: 'MCSNV',
    payer_name: 'MANAGED CARE SERVICES MCS NEVADA',
  },
  {
    payer_id: '22771',
    payer_name: 'MANAGED HEALTH NETWORKS (MHN)',
  },
  {
    payer_id: '68069',
    payer_name: 'MANAGED HEALTH SERVICES INDIANA',
  },
  {
    payer_id: '83269',
    payer_name: 'MARY WASHINGTON HEALTH PLAN',
  },
  {
    payer_id: '76498',
    payer_name: 'MARYLAND PHYSICIANS CARE',
  },
  {
    payer_id: '86220',
    payer_name: 'MASS ADVANTAGE',
  },
  {
    payer_id: 'BHOMA',
    payer_name: 'MASSACHUSETTS BEHAVIORAL HEALTH (BHO)',
  },
  {
    payer_id: 'MBMLF',
    payer_name: 'MEDBEN',
  },
  {
    payer_id: '94265',
    payer_name: 'MEDICA',
  },
  {
    payer_id: 'MEDIC',
    payer_name: 'MEDICA',
  },
  {
    payer_id: 'MEDM1',
    payer_name: 'MEDICA GOVERNMENT PROGRAMS',
  },
  {
    payer_id: '71890',
    payer_name: 'MEDICA HEALTH PLAN SOLUTIONS',
  },
  {
    payer_id: '12422',
    payer_name: 'MEDICA IFB',
  },
  {
    payer_id: '100005',
    payer_name: 'MEDICAID ALABAMA',
  },
  {
    payer_id: 'ARMCD',
    payer_name: 'MEDICAID ARKANSAS',
  },
  {
    payer_id: '100083',
    payer_name: 'MEDICAID COLORADO',
  },
  {
    payer_id: 'CTMCD',
    payer_name: 'MEDICAID CONNECTICUT',
  },
  {
    payer_id: '77027',
    payer_name: 'MEDICAID FLORIDA',
  },
  {
    payer_id: 'GAMEDICAID',
    payer_name: 'MEDICAID GEORGIA',
  },
  {
    payer_id: 'IL621',
    payer_name: 'MEDICAID ILLINOIS',
  },
  {
    payer_id: 'IL622',
    payer_name: 'MEDICAID ILLINOIS IDPA',
  },
  {
    payer_id: 'IHCP',
    payer_name: 'MEDICAID INDIANA',
  },
  {
    payer_id: 'KYMEDICAID',
    payer_name: 'MEDICAID KENTUCKY',
  },
  {
    payer_id: '100198',
    payer_name: 'MEDICAID MARYLAND',
  },
  {
    payer_id: 'D00111',
    payer_name: 'MEDICAID MICHIGAN',
  },
  {
    payer_id: '100209',
    payer_name: 'MEDICAID MISSISSIPPI',
  },
  {
    payer_id: 'MO',
    payer_name: 'MEDICAID MISSOURI',
  },
  {
    payer_id: '100228',
    payer_name: 'MEDICAID NEW HAMPSHIRE',
  },
  {
    payer_id: 'NM',
    payer_name: 'MEDICAID NEW MEXICO',
  },
  {
    payer_id: 'NCMCD',
    payer_name: 'MEDICAID NORTH CAROLINA',
  },
  {
    payer_id: 'MMISODJFS',
    payer_name: 'MEDICAID OHIO',
  },
  {
    payer_id: 'SCMED',
    payer_name: 'MEDICAID SOUTH CAROLINA',
  },
  {
    payer_id: '10186',
    payer_name: 'MEDICAID TEXAS',
  },
  {
    payer_id: 'MASHP',
    payer_name: 'MEDICAL ASSOCIATES HEALTH PLAN HEALTH CHOICES',
  },
  {
    payer_id: '29076',
    payer_name: 'MEDICAL MUTUAL',
  },
  {
    payer_id: '29076',
    payer_name: 'MEDICAL MUTUAL',
  },
  {
    payer_id: 'FBM01',
    payer_name: 'MEDICARE FLORIDA BLUE',
  },
  {
    payer_id: 'FBM01',
    payer_name: 'MEDICARE FLORIDA BLUE',
  },
  {
    payer_id: 'FBM01',
    payer_name: 'MEDICARE FLORIDA BLUE',
  },
  {
    payer_id: 'FBM01',
    payer_name: 'MEDICARE FLORIDA BLUE',
  },
  {
    payer_id: 'MEDCO',
    payer_name: 'MEDICO INSURANCE COMPANY',
  },
  {
    payer_id: 'AZM01',
    payer_name: 'MERCY CARE ARIZONA',
  },
  {
    payer_id: '22326',
    payer_name: 'MERCY HEALTH PLAN OF NEW JERSEY',
  },
  {
    payer_id: 'MHPMI',
    payer_name: 'MERIDIAN HEALTH PLAN MICHIGAN COMPLETE',
  },
  {
    payer_id: 'MTAIN',
    payer_name: 'MERITAIN HEALTH',
  },
  {
    payer_id: '13265',
    payer_name: 'METROPLUS HEALTH PLAN',
  },
  {
    payer_id: '87726',
    payer_name: 'Metropolitan Property and Casualty Insurance Company',
  },
  {
    payer_id: '87726',
    payer_name: 'METROPOLITAN PROPERTY AND CASUALTY INSURANCE COMPANY',
  },
  {
    payer_id: '68069',
    payer_name: 'MHS WISCONSIN HEALTH',
  },
  {
    payer_id: '87726',
    payer_name: 'MICHAEL REESE',
  },
  {
    payer_id: '68069',
    payer_name: 'MICHIGAN COMPLETE HEALTH',
  },
  {
    payer_id: '68069',
    payer_name: 'MICHIGAN COMPLETE HEALTH (FIDELIS SECURE LIFE)',
  },
  {
    payer_id: 'MCCVA',
    payer_name: 'MOLINA COMPLETE CARE - MEDICAID',
  },
  {
    payer_id: 'MCCVA',
    payer_name: 'MOLINA COMPLETE CARE - MEDICAID',
  },
  {
    payer_id: 'MLNVA',
    payer_name: 'MOLINA COMPLETE CARE OF VIRGINIA',
  },
  {
    payer_id: 'MLNCA',
    payer_name: 'MOLINA HEALTHCARE CALIFORNIA',
  },
  {
    payer_id: 'MLNFL',
    payer_name: 'MOLINA HEALTHCARE FLORIDA',
  },
  {
    payer_id: 'MLNIL',
    payer_name: 'MOLINA HEALTHCARE ILLINOIS',
  },
  {
    payer_id: 'MLNMI',
    payer_name: 'MOLINA HEALTHCARE MICHIGAN',
  },
  {
    payer_id: 'MLNNM',
    payer_name: 'MOLINA HEALTHCARE NEW MEXICO',
  },
  {
    payer_id: 'MLNOH',
    payer_name: 'MOLINA HEALTHCARE OHIO',
  },
  {
    payer_id: 'MLNSC',
    payer_name: 'MOLINA HEALTHCARE SOUTH CAROLINA',
  },
  {
    payer_id: 'MLNWA',
    payer_name: 'MOLINA HEALTHCARE WASHINGTON',
  },
  {
    payer_id: 'MLNWI',
    payer_name: 'MOLINA HEALTHCARE WISCONSIN',
  },
  {
    payer_id: '0007316',
    payer_name: 'MOLINA OHIO MEDICAID MCE',
  },
  {
    payer_id: '65465',
    payer_name: 'MORECARE',
  },
  {
    payer_id: '71412',
    payer_name: 'MUTUAL COMMERCIAL',
  },
  {
    payer_id: '34192',
    payer_name: 'MUTUAL HEALTH SERVICES',
  },
  {
    payer_id: '71412',
    payer_name: 'MUTUAL OF OMAHA',
  },
  {
    payer_id: '71412',
    payer_name: 'MUTUALLY PREFERRED',
  },
  {
    payer_id: '14165',
    payer_name: 'MVP CHILD HEALTH PLUS',
  },
  {
    payer_id: '14165',
    payer_name: 'MVP HEALTH CARE',
  },
  {
    payer_id: '14165',
    payer_name: 'MVP HEALTH PLAN',
  },
  {
    payer_id: '14165',
    payer_name: 'MVP HEALTH PLAN NEW YORK',
  },
  {
    payer_id: '14165',
    payer_name: 'MVP MEDICAID MANAGED CARE',
  },
  {
    payer_id: '68069',
    payer_name: 'NEBRASKA TOTAL CARE',
  },
  {
    payer_id: '87726',
    payer_name: 'Neighborhood Health Partnership',
  },
  {
    payer_id: '77076',
    payer_name: 'NETWORK HEALTH INSURANCE CORPORATION MEDICARE  NHIC',
  },
  {
    payer_id: 'NETHP',
    payer_name: 'NETWORK HEALTH PLAN',
  },
  {
    payer_id: '14165',
    payer_name: 'NEW YORK PREFERRED CARE',
  },
  {
    payer_id: '38225',
    payer_name: 'NGS AMERICAN INCORPORATED',
  },
  {
    payer_id: '68069',
    payer_name: 'NH HEALTHY FAMILIES',
  },
  {
    payer_id: 'A5236',
    payer_name: 'OCHSNER HEALTH PLAN',
  },
  {
    payer_id: 'OHANA14163',
    payer_name: 'OHANA HEALTH PLAN',
  },
  {
    payer_id: '14163',
    payer_name: 'OHANA HEALTH PLAN',
  },
  {
    payer_id: 'LIFE1',
    payer_name: 'OPTUM MEDICAL NETWORK (LIFEPRINT NETWORK)',
  },
  {
    payer_id: '87726',
    payer_name: 'OPTUM UNITED HEALTH BEHAVIORAL SOLUTIONS',
  },
  {
    payer_id: '00430',
    payer_name: 'OTHER BLUE PLANS PREMERA BLUEEXCHANGE (SHARED ADMIN)',
  },
  {
    payer_id: '20416',
    payer_name: 'PACIFICSOURCE COMMUNITY SOLUTIONS',
  },
  {
    payer_id: '93029',
    payer_name: 'PACIFICSOURCE HEALTH PLANS',
  },
  {
    payer_id: '20377',
    payer_name: 'PACIFICSOURCE MEDICARE',
  },
  {
    payer_id: '04218',
    payer_name: 'PAN AMERICAN LIFE INSURANCE GROUP',
  },
  {
    payer_id: 'SX158',
    payer_name: 'PARAMOUNT',
  },
  {
    payer_id: '68069',
    payer_name: 'PARTNERS HEALTH MANAGEMENT PHYSICAL HEALTH',
  },
  {
    payer_id: '10164',
    payer_name: 'PARTNERSHIP HEALTH PLAN CALIFORNIA',
  },
  {
    payer_id: 'PPHPC',
    payer_name: 'PASSPORT HEALTH PLAN',
  },
  {
    payer_id: '68069',
    payer_name: 'PEACH STATE HEALTH PLAN',
  },
  {
    payer_id: 'PEACH STATE HEALTH PLAN',
    payer_name: 'PEACH STATE HEALTH PLAN',
  },
  {
    payer_id: '68069',
    payer_name: 'PENNSYLVANIA HEALTH AND WELLNESS',
  },
  {
    payer_id: 'PPLSH',
    payer_name: 'PEOPLES HEALTH',
  },
  {
    payer_id: '65088',
    payer_name: 'PREFERRED CARE PARTNERS FLORIDA',
  },
  {
    payer_id: '00430',
    payer_name: 'PREMERA BLUE CROSS (WA)',
  },
  {
    payer_id: '00430',
    payer_name: 'PREMERA BLUE CROSS (WA)',
  },
  {
    payer_id: '00430',
    payer_name: 'PREMERA BLUE CROSS (WA)',
  },
  {
    payer_id: '00934',
    payer_name: 'PREMERA BLUE CROSS BLUE SHIELD OF ALASKA',
  },
  {
    payer_id: '00934',
    payer_name: 'PREMERA BLUE CROSS BLUE SHIELD OF ALASKA',
  },
  {
    payer_id: '00934',
    payer_name: 'PREMERA BLUE CROSS BLUE SHIELD OF ALASKA',
  },
  {
    payer_id: '00430D',
    payer_name: 'PREMERA DENTAL',
  },
  {
    payer_id: '00430D',
    payer_name: 'PREMERA DENTAL',
  },
  {
    payer_id: '61271',
    payer_name: 'PRINCIPAL FINANCIAL GROUP',
  },
  {
    payer_id: '00143',
    payer_name: 'PRINCIPAL FINANCIAL GROUP (MEDICAL)',
  },
  {
    payer_id: '61271',
    payer_name: 'PRINCIPAL LIFE INSURANCE (DENTAL)',
  },
  {
    payer_id: '88029',
    payer_name: 'PROMINENCE HEALTH PLAN',
  },
  {
    payer_id: '11199',
    payer_name: 'PROMINENCE HEALTH PLAN OF TEXAS',
  },
  {
    payer_id: '13193',
    payer_name: 'PROVIDENT AMERICAN LIFE &amp; HEALTH INSURANCE COMPANY',
  },
  {
    payer_id: '39180',
    payer_name: 'QUARTZ',
  },
  {
    payer_id: '00851D',
    payer_name: 'REGENCE BCBS OF OREGON DENTAL',
  },
  {
    payer_id: '00910D',
    payer_name: 'REGENCE BCBS OF UTAH DENTAL',
  },
  {
    payer_id: '00851',
    payer_name: 'REGENCE BCBS OREGON',
  },
  {
    payer_id: '00851',
    payer_name: 'REGENCE BCBS OREGON',
  },
  {
    payer_id: '00910',
    payer_name: 'REGENCE BCBS UTAH',
  },
  {
    payer_id: '00910',
    payer_name: 'REGENCE BCBS UTAH',
  },
  {
    payer_id: '00932D',
    payer_name: 'REGENCE BLUESHIELD DENTAL',
  },
  {
    payer_id: '00611D',
    payer_name: 'REGENCE BLUESHIELD OF IDAHO DENTAL',
  },
  {
    payer_id: '00611',
    payer_name: 'REGENCE BS IDAHO',
  },
  {
    payer_id: '00611',
    payer_name: 'REGENCE BS IDAHO',
  },
  {
    payer_id: '00932',
    payer_name: 'REGENCE BS WASHINGTON',
  },
  {
    payer_id: '00932',
    payer_name: 'REGENCE BS WASHINGTON',
  },
  {
    payer_id: 'RGA01',
    payer_name: 'REGENCE GROUP ADMINISTRATORS',
  },
  {
    payer_id: '31441',
    payer_name: 'S AND S HEALTHCARE STRATEGIES',
  },
  {
    payer_id: '50114',
    payer_name: 'SANA BENEFITS',
  },
  {
    payer_id: '68069',
    payer_name: 'SANDATA',
  },
  {
    payer_id: '91184',
    payer_name: 'SANFORD HEALTH PLAN',
  },
  {
    payer_id: 'ICQFL',
    payer_name: 'SCHALLER ANDERSON INTEGRAL QUALITY CARE FLORIDA',
  },
  {
    payer_id: 'TXCSA',
    payer_name: 'SCHALLER ANDERSON TEXAS CHRISTUS',
  },
  {
    payer_id: 'SHSC',
    payer_name: 'SELECT HEALTH SOUTH CAROLINA',
  },
  {
    payer_id: '10575',
    payer_name: 'SELECT HEALTH UTAH',
  },
  {
    payer_id: '12274',
    payer_name: 'SELMAN TRICARE',
  },
  {
    payer_id: '15460I',
    payer_name: 'SENIOR HEALTH COMPANY INSTITUTIONAL',
  },
  {
    payer_id: '15460P',
    payer_name: 'SENIOR HEALTH COMPANY PROFESSIONAL',
  },
  {
    payer_id: '80141',
    payer_name: 'SENIOR HEALTH PARTNERS',
  },
  {
    payer_id: 'SHMS1',
    payer_name: 'SHARED HEALTH MISSISSIPPI',
  },
  {
    payer_id: 'SHMS1',
    payer_name: 'SHARED HEALTH MISSISSIPPI',
  },
  {
    payer_id: '10967',
    payer_name: 'SHARP HEALTH PLAN',
  },
  {
    payer_id: '68069',
    payer_name: 'SILVERSUMMIT',
  },
  {
    payer_id: 'SMPLYLTC',
    payer_name: 'SIMPLY HEALTHCARE LONG TERM CARE',
  },
  {
    payer_id: 'SMPLY',
    payer_name: 'SIMPLY HEALTHCARE NEW',
  },
  {
    payer_id: 'SMPLY',
    payer_name: 'SIMPLY HEALTHCARE NEW',
  },
  {
    payer_id: 'SLAIC',
    payer_name: 'STANDARD LIFE AND ACCIDENT INSURANCE COMPANY',
  },
  {
    payer_id: '14163',
    payer_name: 'STAYWELL',
  },
  {
    payer_id: '14163',
    payer_name: 'STAYWELL KIDS',
  },
  {
    payer_id: '74227',
    payer_name: 'STUDENT RESOURCES (UNITEDHEALTHCARE)',
  },
  {
    payer_id: '10294',
    payer_name: 'SUMMACARE HEALTH PLAN',
  },
  {
    payer_id: 'PASSE',
    payer_name: 'SUMMIT COMMUNITY CARE',
  },
  {
    payer_id: 'PASSE',
    payer_name: 'SUMMIT COMMUNITY CARE',
  },
  {
    payer_id: '68069',
    payer_name: 'SUNFLOWER HEALTH PLAN',
  },
  {
    payer_id: '68069',
    payer_name: 'SUNSHINE HEALTH',
  },
  {
    payer_id: '68069',
    payer_name: 'SUPERIOR HEALTHPLAN',
  },
  {
    payer_id: '76048',
    payer_name: "TEXAS CHILDREN'S HEALTH PLAN (MEDICAID) CHIP",
  },
  {
    payer_id: '76048',
    payer_name: 'TEXAS CHILDRENS HEALTH PLAN',
  },
  {
    payer_id: 'TX1ST',
    payer_name: 'TEXAS FIRST HEALTH PLAN (NORTH TEXAS)',
  },
  {
    payer_id: '64246',
    payer_name: 'THE GUARDIAN LIFE INSURANCE COMPANY OF AMERICA',
  },
  {
    payer_id: '34150',
    payer_name: 'THE HEALTH PLAN WEST VIRGINIA',
  },
  {
    payer_id: 'A2184',
    payer_name: "TODAY'S HEALTH",
  },
  {
    payer_id: '14163',
    payer_name: 'TODAYS HEALTH',
  },
  {
    payer_id: '14163',
    payer_name: 'TODAYS OPTIONS (AMERICAN PROGRESSIVE AND PYRAMID LIFE)',
  },
  {
    payer_id: 'TRICE',
    payer_name: 'TRICARE CHAMPUS',
  },
  {
    payer_id: 'TREST',
    payer_name: 'TRICARE EAST',
  },
  {
    payer_id: '101159',
    payer_name: 'TRICARE FOR LIFE',
  },
  {
    payer_id: '10947',
    payer_name: 'TRICARE OVERSEAS',
  },
  {
    payer_id: '10189',
    payer_name: 'TRICARE WEST',
  },
  {
    payer_id: '99726',
    payer_name: 'TRICARE WEST REGION',
  },
  {
    payer_id: '68069',
    payer_name: 'TRILLIUM COMMUNITY HEALTH PLAN',
  },
  {
    payer_id: '68069',
    payer_name: 'TRILLIUM MEDICARE 2016',
  },
  {
    payer_id: 'VAPCCC3',
    payer_name: 'TRIWEST HEALTHCARE ALLIANCE',
  },
  {
    payer_id: 'VAPCCC3',
    payer_name: 'TRIWEST HEALTHCARE ALLIANCE',
  },
  {
    payer_id: 'TRULI',
    payer_name: 'TRULI FOR HEALTH',
  },
  {
    payer_id: 'TRULI',
    payer_name: 'TRULI FOR HEALTH',
  },
  {
    payer_id: 'TRULI',
    payer_name: 'TRULI FOR HEALTH',
  },
  {
    payer_id: 'TRULI',
    payer_name: 'TRULI FOR HEALTH',
  },
  {
    payer_id: 'SX155',
    payer_name: 'U OF U HEALTH PLAN',
  },
  {
    payer_id: '100804',
    payer_name: 'UCARE MINNESOTA',
  },
  {
    payer_id: '10888',
    payer_name: 'ULTIMATE HEALTH PLANS',
  },
  {
    payer_id: '39026',
    payer_name: 'UMR (UMR WAUSAU)',
  },
  {
    payer_id: '52180',
    payer_name: 'UMWA HEALTH AND RETIREMENT FUNDS',
  },
  {
    payer_id: 'UNI',
    payer_name: 'UNICARE',
  },
  {
    payer_id: 'UNI',
    payer_name: 'UNICARE',
  },
  {
    payer_id: '80314D',
    payer_name: 'UNICARE DENTAL',
  },
  {
    payer_id: 'UNIMA',
    payer_name: 'UNICARE MASSACHUSETTS',
  },
  {
    payer_id: '74227',
    payer_name: 'UNITED HEALTHCARE STUDENT RESOURCES',
  },
  {
    payer_id: '71412',
    payer_name: 'UNITED OF OMAHA',
  },
  {
    payer_id: '87726',
    payer_name: 'UNITEDHEALTHCARE',
  },
  {
    payer_id: '87726',
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN (AMERICHOICE PENNSYLVANIA PCP)',
  },
  {
    payer_id: '03432',
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN ARIZONA',
  },
  {
    payer_id: '87726',
    payer_name: 'UNITEDHEALTHCARE DEFINITY HEALTH PLAN',
  },
  {
    payer_id: '81400',
    payer_name: 'UNITEDHEALTHCARE LIFE INSURANCE COMPANY',
  },
  {
    payer_id: '87726',
    payer_name: 'UNITEDHEALTHCARE MAHP MARYLAND IPA OPTIMUM CHOICE MAMSI',
  },
  {
    payer_id: '87726',
    payer_name: 'UNITEDHEALTHCARE MEDICARE SOLUTIONS UHC CHRONIC COMPLETE (EVERCARE)',
  },
  {
    payer_id: '87726',
    payer_name: 'UNITEDHEALTHCARE MEDICARE SOLUTIONS UHC MEDICARECOMPLETE (SECUREHORIZONS)',
  },
  {
    payer_id: '06111',
    payer_name: 'UNITEDHEALTHCARE OXFORD',
  },
  {
    payer_id: '87726',
    payer_name: 'UNITEDHEALTHCARE PLAN OF THE RIVER VALLEY',
  },
  {
    payer_id: '87726',
    payer_name: 'UNITEDHEALTHCARE WEST (PACIFICARE ARIZONA COLORADO NEVADA)',
  },
  {
    payer_id: 'UFC',
    payer_name: 'UNIVERSITY FAMILY CARE ARIZONA',
  },
  {
    payer_id: '10889',
    payer_name: 'UNIVERSITY OF ARIZONA HEALTH PLAN',
  },
  {
    payer_id: 'SX155',
    payer_name: 'UNIVERSITY OF UTAH HEALTH PLANS',
  },
  {
    payer_id: '23281',
    payer_name: 'UPMC HEALTH PLAN',
  },
  {
    payer_id: '10195',
    payer_name: 'USAA LIFE INSURANCE COMPANY',
  },
  {
    payer_id: '12116',
    payer_name: 'VA FEE BASIS PROGRAM (DENTAL)',
  },
  {
    payer_id: 'VAHAC',
    payer_name: 'VA HEALTH ADMINISTRATOR CENTER',
  },
  {
    payer_id: 'VHPLA',
    payer_name: 'VANTAGE HEALTH PLAN INCORPORATED',
  },
  {
    payer_id: 'VAFEE',
    payer_name: 'VETERANS AFFAIRS FEE BASIS PROGRAM',
  },
  {
    payer_id: 'VNSNY',
    payer_name: 'VNSNY CHOICE',
  },
  {
    payer_id: 'WBTPA',
    payer_name: 'WEB TPA INCORPORATED',
  },
  {
    payer_id: '68069',
    payer_name: 'WELLCARE',
  },
  {
    payer_id: '14163',
    payer_name: 'WELLCARE',
  },
  {
    payer_id: '68069',
    payer_name: 'WELLCARE BY ALLWELL',
  },
  {
    payer_id: '11315',
    payer_name: 'WELLCARE BY FIDELIS CARE',
  },
  {
    payer_id: '68069',
    payer_name: 'WELLCARE BY HEALTH NET',
  },
  {
    payer_id: '14163',
    payer_name: 'WELLCARE BY OHANA',
  },
  {
    payer_id: '68069',
    payer_name: 'WELLCARE BY TRILLIUM ADVANTAGE',
  },
  {
    payer_id: '14163',
    payer_name: 'WELLCARE HEALTH PLANS',
  },
  {
    payer_id: '88848',
    payer_name: 'WELLMARK BCBS (IOWA, SOUTH DAKOTA)',
  },
  {
    payer_id: '25711',
    payer_name: 'WELLNET HEALTH PLANS',
  },
  {
    payer_id: 'AGPMEDICAID',
    payer_name: 'WELLPOINT',
  },
  {
    payer_id: 'WVCS1',
    payer_name: 'WEST VIRGINIA CARESOURCE MARKETPLACE',
  },
  {
    payer_id: '68069',
    payer_name: 'WESTERN SKY COMMUNITY CARE',
  },
  {
    payer_id: 'A2185',
    payer_name: 'WISCONSIN PHYSICIANS SERVICE',
  },
  {
    payer_id: '39185',
    payer_name: 'WPS HEALTH PLAN',
  },
];

let cvOnlyProfessionalRawArray = [
  {
    payer_name: '1199SEIU FAMILY OF FUNDS',
    cv_payerID: '1199NB',
  },
  {
    payer_name: 'MINNESOTA BLUE SHIELD',
    cv_payerID: 1402,
    state: 'MN',
  },
  {
    payer_name: 'MINNESOTA BLUE SHIELD',
    cv_payerID: 1402,
    state: 'MN',
  },
  {
    payer_name: 'MINNESOTA CC SYSTEMS',
    cv_payerID: 1402,
    state: 'MN',
  },
  {
    payer_name: 'MINNESOTA BLUE SHIELD HMO',
    cv_payerID: 1402,
    state: 'MN',
  },
  {
    payer_name: 'MINNESOTA MEDICAID',
    cv_payerID: 1468,
    state: 'MN',
  },
  {
    payer_name: 'NORTH DAKOTA MEDICAID',
    cv_payerID: 1487,
    state: 'ND',
  },
  {
    payer_name: 'AARP',
    cv_payerID: 'AARP',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF CALIFORNIA',
    cv_payerID: 'ABHCA',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF FLORIDA',
    cv_payerID: 'ABHFL',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF ILLINOIS - MMAI',
    cv_payerID: 'ABHILL',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF ILLINOIS - MEDICAID',
    cv_payerID: 'ABHILL',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF KANSAS',
    cv_payerID: 'ABHKS',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF LOUISIANA',
    cv_payerID: 'ABHLA',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF MARYLAND',
    cv_payerID: 'ABHMD',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF MICHIGAN',
    cv_payerID: 'ABHMI',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF NEW JERSEY',
    cv_payerID: 'ABHNJ',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF NEW YORK',
    cv_payerID: 'ABHNY',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF OHIO',
    cv_payerID: 'ABHOH',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF PENNSYLVANIA',
    cv_payerID: 'ABHPA',
    state: 'PA',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF PENNSYLVANIA',
    cv_payerID: 'ABHPA',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF TEXAS',
    cv_payerID: 'ABHTX',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF TEXAS',
    cv_payerID: 'ABHTX',
    state: 'TX',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF WEST VIRGINIA',
    cv_payerID: 'ABHWV',
  },
  {
    payer_name: 'ABLEPAY HEALTH',
    cv_payerID: 'ABLPY',
  },
  {
    payer_name: 'AUTOMATED BENEFIT SERVICES',
    cv_payerID: 'ABSERV',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS NEXT VIP',
    cv_payerID: 'ACNDE',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS NEXT FLORIDA',
    cv_payerID: 'ACNFL',
  },
  {
    payer_name: 'FIRST CHOICE NEXT SOUTH CAROLINA',
    cv_payerID: 'ACNSC',
  },
  {
    payer_name: 'ACS BENEFIT SERVICES, INC.',
    cv_payerID: 'ACSBE',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS VIP CARE - DELAWARE DSNP',
    cv_payerID: 'ACVDE',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS VIP CARE - FLORIDA DSNP',
    cv_payerID: 'ACVFL',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS VIP CARE PLUS MICHIGAN',
    cv_payerID: 'ACVMI',
  },
  {
    payer_name: 'ADMINISTRATIVE CONCEPTS',
    cv_payerID: 'ADMCON',
  },
  {
    payer_name: 'ADMINISTRATIVE SERVICES INC.',
    cv_payerID: 'ADMINS',
  },
  {
    payer_name: 'ASSOCIATION DE MAESTROS PUERTO RICO',
    cv_payerID: 'ADMPR',
  },
  {
    payer_name: 'AETNA',
    cv_payerID: 'AETNA',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS DISTRICT OF COLUMBIA',
    cv_payerID: 'AHCDC',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS DELAWARE',
    cv_payerID: 'AHCDE',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS NEXT NORTH CAROLINA',
    cv_payerID: 'AHCNC',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS NORTHEAST DOS BEFORE 01/01/21',
    cv_payerID: 'AHCNE',
  },
  {
    payer_name: 'ALASKA MEDICAID',
    cv_payerID: 'AKMCD',
    state: 'AK',
  },
  {
    payer_name: 'ALABAMA BLUE SHIELD',
    cv_payerID: 'ALBCSP',
    state: 'AL',
  },
  {
    payer_name: 'ALLIED BENEFIT SYSTEM',
    cv_payerID: 'ALBENS',
  },
  {
    payer_name: 'ALABAMA MEDICAID',
    cv_payerID: 'ALCAID',
    state: 'AL',
  },
  {
    payer_name: 'ALLEGIANCE BENEFIT PLAN MANAGEMENT INC.',
    cv_payerID: 'ALLBE',
  },
  {
    payer_name: 'ALLIANT HEALTH PLANS OF GEORGIA',
    cv_payerID: 'ALLIHP',
  },
  {
    payer_name: 'ALOHACARE',
    cv_payerID: 'ALOHA',
  },
  {
    payer_name: 'ALBUQUERQUE PUBLIC SCHOOLS',
    cv_payerID: 'ALPBS',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS VIP CARE PA COMMHEALTHCHOICES',
    cv_payerID: 'AMCHC',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS VIP CARE PA COMMHEALTHCHOICES',
    cv_payerID: 'AMCVC',
  },
  {
    payer_name: 'AMERIBEN SOLUTIONS, INC.',
    cv_payerID: 'AMERBN',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS OHIO',
    cv_payerID: 'AMEROH',
  },
  {
    payer_name: 'HEALTHY BLUE LOUISIANA',
    cv_payerID: 'AMGRLA',
  },
  {
    payer_name: 'AMERIHEALTH ADMINISTRATORS, INC.',
    cv_payerID: 'AMHADM',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS PENNSYLVANIA',
    cv_payerID: 'AMHLTH',
  },
  {
    payer_name: 'UNITEDHEALTHCARE LIFE INSURANCE COMPANY',
    cv_payerID: 'AMMEDS',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS NORTH CAROLINA ',
    cv_payerID: 'AMNCN',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS NEW HAMPSHIRE',
    cv_payerID: 'AMNHP',
  },
  {
    payer_name: 'AMERICAN NATIONAL INSURANCE COMPANY (ANICO)',
    cv_payerID: 'AMNIC',
  },
  {
    payer_name: 'AMERICAN POSTAL WORKERS UNION',
    cv_payerID: 'AMPWU',
  },
  {
    payer_name: 'AMERIGROUP',
    cv_payerID: 'AMRGRP',
  },
  {
    payer_name: 'AMERIGROUP',
    cv_payerID: 'AMRGRP',
  },
  {
    payer_name: 'AMERICAN REPUBLIC INSURANCE (MAP)',
    cv_payerID: 'AMRREP',
  },
  {
    payer_name: 'ANGLE HEALTH',
    cv_payerID: 'ANGLE',
  },
  {
    payer_name: 'MUTUAL HEALTH SERVICES',
    cv_payerID: 'ANTAR',
  },
  {
    payer_name: 'ANTHEM MAINEHEALTH',
    cv_payerID: 'ANTHME',
  },
  {
    payer_name: 'APEXHEALTH',
    cv_payerID: 'APXHL',
  },
  {
    payer_name: 'ARKANSAS BLUE SHIELD',
    cv_payerID: 'ARBCBS',
  },
  {
    payer_name: 'ARKANSAS BLUE SHIELD',
    cv_payerID: 'ARBCBS',
    state: 'AR',
  },
  {
    payer_name: 'ARKANSAS MEDICAID',
    cv_payerID: 'ARCAID',
    state: 'AR',
  },
  {
    payer_name: 'ARCHBOLD MEDICAL CENTER HEALTH PLAN',
    cv_payerID: 'ARCHB',
  },
  {
    payer_name: 'ARCHBOLD ED UNINSURED',
    cv_payerID: 'ARCHB',
  },
  {
    payer_name: 'ARMADACARE',
    cv_payerID: 'ARMADA',
  },
  {
    payer_name: 'ASPIRE HEALTH PLAN',
    cv_payerID: 'ASPHPL',
  },
  {
    payer_name: 'ASPIRUS MEDICARE ADVANTAGE',
    cv_payerID: 'ASPRS',
  },
  {
    payer_name: 'ASURIS NORTHWEST REGENCE',
    cv_payerID: 'ASURNH',
  },
  {
    payer_name: 'AETNA SSI',
    cv_payerID: 'ATNSSI',
  },
  {
    payer_name: 'AULTCARE ',
    cv_payerID: 'AULTCR',
  },
  {
    payer_name: 'AVMED, INC.',
    cv_payerID: 'AVMED',
  },
  {
    payer_name: 'AGEWELL NEW YORK',
    cv_payerID: 'AWLLNY',
  },
  {
    payer_name: 'ARIZONA BLUE SHIELD',
    cv_payerID: 'AZBCBS',
    state: 'AZ',
  },
  {
    payer_name: 'ARIZONA MEDICAID',
    cv_payerID: 'AZCAID',
    state: 'AZ',
  },
  {
    payer_name: 'HEALTH CHOICE ARIZONA',
    cv_payerID: 'AZHLCH',
  },
  {
    payer_name: 'MERCY CARE PLAN',
    cv_payerID: 'AZMCP',
  },
  {
    payer_name: 'BAYCARE PLUS MEDICARE ADVANTAGE',
    cv_payerID: 'BAYCR',
  },
  {
    payer_name: 'BLUE CROSS COMPLETE OF MICHIGAN',
    cv_payerID: 'BCCMI',
  },
  {
    payer_name: 'BLUE CROSS COMMUNITY HEALTH PLANS',
    cv_payerID: 'BCCOM',
  },
  {
    payer_name: 'BRIDGESPAN',
    cv_payerID: 'BDSPH',
  },
  {
    payer_name: 'CARELON BEHAVIORAL HEALTH, MBHP',
    cv_payerID: 'BHOMA',
  },
  {
    payer_name: 'BEHAVIORAL HEALTH SYSTEMS',
    cv_payerID: 'BHRHS',
  },
  {
    payer_name: 'SUREST',
    cv_payerID: 'BIND',
  },
  {
    payer_name: 'SOUTH CAROLINA BLUECHOICE HEALTH PLAN',
    cv_payerID: 'BLCHHP',
  },
  {
    payer_name: 'BLUE CROSS MEDICARE ADVANTAGE PPO/HMO',
    cv_payerID: 'BLMADV',
  },
  {
    payer_name: 'BLUE MEDICARE ADVANTAGE',
    cv_payerID: 'BMADV',
  },
  {
    payer_name: 'BANNER MEDICARE ADVANTAGE PRIME HMO (BMAH)',
    cv_payerID: 'BMAHMO ',
  },
  {
    payer_name: 'BANNER MEDICARE ADVANTAGE PLUS PPO (BMAP)',
    cv_payerID: 'BMAPP',
  },
  {
    payer_name: 'WELLSENSE HEALTH PLAN',
    cv_payerID: 'BMCHLT',
  },
  {
    payer_name: 'WELLSENSE HEALTH PLAN',
    cv_payerID: 'BMCHLT',
    state: 'NH',
  },
  {
    payer_name: 'BOON CHAPMAN ADMINISTRATORS',
    cv_payerID: 'BNCHAP',
  },
  {
    payer_name: 'BENEFIT MANAGEMENT OF KANSAS',
    cv_payerID: 'BNMGT',
  },
  {
    payer_name: 'BOON GROUP (THE)',
    cv_payerID: 'BOONGR',
  },
  {
    payer_name: 'BRAVEN HEALTH',
    cv_payerID: 'BRAVEN',
  },
  {
    payer_name: 'BRIGHT HEALTHCARE',
    cv_payerID: 'BRIGHT',
  },
  {
    payer_name: 'BROKERAGE CONCEPTS',
    cv_payerID: 'BRKRG',
  },
  {
    payer_name: 'BANNER UNIVERSITY FAMILY CARE (UNIVER OF AZ HLTH)',
    cv_payerID: 'BUFCR',
  },
  {
    payer_name: 'BCBS OF WESTERN NEW YORK MEDICAID / CHP',
    cv_payerID: 'BWNYMC',
  },
  {
    payer_name: 'ANTHEM BLUE CROSS CALIFORNIA',
    cv_payerID: 'CABC',
    state: 'CA',
  },
  {
    payer_name: 'ANTHEM BLUE CROSS CALIFORNIA',
    cv_payerID: 'CABC',
  },
  {
    payer_name: 'CALIFORNIA BLUE SHIELD',
    cv_payerID: 'CABS',
    state: 'CA',
  },
  {
    payer_name: 'CALIFORNIA BLUE SHIELD - HMO ENCOUNTERS',
    cv_payerID: 'CABS',
    state: 'CA',
  },
  {
    payer_name: 'BLUE SHIELD OF CALIFORNIA PROMISE HEALTH PLAN',
    cv_payerID: 'CABS',
    state: 'CA',
  },
  {
    payer_name: 'CALIFORNIA MEDI-CAL',
    cv_payerID: 'CACAID',
    state: 'CA',
  },
  {
    payer_name: 'CENCAL HEALTH (FORMERLY SBRHA)',
    cv_payerID: 'CACAID',
    state: 'CA',
  },
  {
    payer_name: 'NEVADA MEDICAID',
    cv_payerID: 'CAIDNV',
    state: 'NV',
  },
  {
    payer_name: 'CAL OPTIMA DIRECT',
    cv_payerID: 'CALOP',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF CALIFORNIA',
    cv_payerID: 'CAMLNA',
    state: 'CA',
  },
  {
    payer_name: 'CAPROCK HEALTH PLANS',
    cv_payerID: 'CAPROK',
  },
  {
    payer_name: 'CAPITAL HEALTH PLAN',
    cv_payerID: 'CAPTAL',
  },
  {
    payer_name: 'CARE N CARE INSURANCE CO',
    cv_payerID: 'CAREN',
  },
  {
    payer_name: 'CARPENTERS HEALTH AND WELFARE TRUST OF ST LOUIS',
    cv_payerID: 'CARHLT',
  },
  {
    payer_name: 'CARESOURCE OF GEORGIA',
    cv_payerID: 'CASGA',
  },
  {
    payer_name: 'CBA BLUE',
    cv_payerID: 'CBABLU',
  },
  {
    payer_name: 'CBA BLUE',
    cv_payerID: 'CBABLU',
    state: 'MA',
  },
  {
    payer_name: 'CHRISTIAN BROTHERS SERVICES',
    cv_payerID: 'CBSER',
  },
  {
    payer_name: 'CLEAR SPRING HEALTH',
    cv_payerID: 'CCAIL',
  },
  {
    payer_name: 'CENTRAL CALIFORNIA ALLIANCE FOR HEALTH (CCAH)',
    cv_payerID: 'CCALLH',
  },
  {
    payer_name: 'CHRISTIAN CARE MINISTRIES',
    cv_payerID: 'CCMINS',
  },
  {
    payer_name: 'CAPITAL DISTRICT PHYSICIANS HEALTH PLAN (CDPHP)',
    cv_payerID: 'CDPHP',
  },
  {
    payer_name: 'S&amp;S HEALTHCARE STRATEGIES',
    cv_payerID: 'CDSGP',
    state: 'NV',
  },
  {
    payer_name: 'PROMINENCE ADMINISTRATIVE SERVICES',
    cv_payerID: 'CDSGP',
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - OHIO',
    cv_payerID: 'CENPAT',
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - FLORIDA',
    cv_payerID: 'CENPAT',
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - WISCONSIN',
    cv_payerID: 'CENPAT',
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - INDIANA',
    cv_payerID: 'CENPAT',
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - GEORGIA',
    cv_payerID: 'CENPAT',
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - TEXAS',
    cv_payerID: 'CENPAT',
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - KANSAS',
    cv_payerID: 'CENPAT',
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - AZ DOS BEFORE 10/18',
    cv_payerID: 'CENPAT',
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - SOUTH CAROLINA',
    cv_payerID: 'CENPAT',
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - ILLINOIS',
    cv_payerID: 'CENPAT',
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - MISSOURI',
    cv_payerID: 'CENPAT',
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - MISSISSIPPI',
    cv_payerID: 'CENPAT',
  },
  {
    payer_name: 'CENTIVO ',
    cv_payerID: 'CENTV',
  },
  {
    payer_name: 'CHRISTUS HEALTH - USFHP',
    cv_payerID: 'CFMHP',
  },
  {
    payer_name: 'CAREFIRST ADMINISTRATORS / NCAS',
    cv_payerID: 'CFSAD',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF VIRGINIA',
    cv_payerID: 'CHCCN',
  },
  {
    payer_name: 'CHRISTUS HEALTH MEDICARE ADVANTAGE',
    cv_payerID: 'CHPMA',
  },
  {
    payer_name: 'CHRISTUS HEALTH PLAN HEALTH INSURANCE EXCHANGE',
    cv_payerID: 'CHPTX',
  },
  {
    payer_name: 'EVERNORTH BEHAVIORAL HEALTH, INC',
    cv_payerID: 'CIGNA',
  },
  {
    payer_name: 'CIGNA HEALTH PLANS',
    cv_payerID: 'CIGNA',
  },
  {
    payer_name: 'CIGNA HEALTH PLANS',
    cv_payerID: 'CIGNA',
  },
  {
    payer_name: 'CIGNA HEALTH PLANS',
    cv_payerID: 'CIGNA',
    state: 'TX',
  },
  {
    payer_name: 'CLEAR HEALTH ALLIANCE',
    cv_payerID: 'CLEAR',
  },
  {
    payer_name: 'COMPSYCH',
    cv_payerID: 'CMPSY',
  },
  {
    payer_name: 'WISCONSIN MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'WI',
  },
  {
    payer_name: 'MINNESOTA MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'MN',
  },
  {
    payer_name: 'NORTHERN CALIFORNIA MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'CA',
  },
  {
    payer_name: 'ILLINOIS MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'IL',
  },
  {
    payer_name: 'IOWA MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'IA',
  },
  {
    payer_name: 'TEXAS MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'TX',
  },
  {
    payer_name: 'MISSOURI MEDICARE EASTERN',
    cv_payerID: 'CMSMED',
    state: 'MO',
  },
  {
    payer_name: 'VIRGINIA MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'VA',
  },
  {
    payer_name: 'RETIRED RAILROAD MEDICARE',
    cv_payerID: 'CMSMED',
  },
  {
    payer_name: 'SOUTHERN CALIFORNIA MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'CA',
  },
  {
    payer_name: 'INDIANA MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'IN',
  },
  {
    payer_name: 'NEVADA MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'NV',
  },
  {
    payer_name: 'OHIO MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'OH',
  },
  {
    payer_name: 'FLORIDA MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'FL',
  },
  {
    payer_name: 'COLORADO MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'CO',
  },
  {
    payer_name: 'WEST VIRGINIA MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'WV',
  },
  {
    payer_name: 'NEBRASKA MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'NE',
  },
  {
    payer_name: 'CONNECTICUT MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'CT',
  },
  {
    payer_name: 'TENNESSEE MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'TN',
  },
  {
    payer_name: 'ALASKA MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'AK',
  },
  {
    payer_name: 'ARIZONA MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'AZ',
  },
  {
    payer_name: 'NEW MEXICO MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'NM',
  },
  {
    payer_name: 'OKLAHOMA MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'OK',
  },
  {
    payer_name: 'OREGON MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'OR',
  },
  {
    payer_name: 'LOUISIANA MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'LA',
  },
  {
    payer_name: 'MICHIGAN MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'MI',
  },
  {
    payer_name: 'WASHINGTON MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'WA',
  },
  {
    payer_name: 'NEW YORK MEDICARE (UPSTATE)',
    cv_payerID: 'CMSMED',
    state: 'NY',
  },
  {
    payer_name: 'NORTH CAROLINA MEDICARE ',
    cv_payerID: 'CMSMED',
    state: 'NC',
  },
  {
    payer_name: 'NEW JERSEY MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'NJ',
  },
  {
    payer_name: 'GEORGIA MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'GA',
  },
  {
    payer_name: 'MISSISSIPPI MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'MS',
  },
  {
    payer_name: 'SOUTH CAROLINA MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'SC',
  },
  {
    payer_name: 'NORTH DAKOTA MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'ND',
  },
  {
    payer_name: 'SOUTH DAKOTA MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'SD',
  },
  {
    payer_name: 'ARKANSAS MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'AR',
  },
  {
    payer_name: 'DELAWARE MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'DE',
  },
  {
    payer_name: 'PENNSYLVANIA MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'PA',
  },
  {
    payer_name: 'UTAH MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'UT',
  },
  {
    payer_name: 'DISTRICT OF COLUMBIA METROPOLITAN AREA MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'DC',
  },
  {
    payer_name: 'VIRGINIA MEDICARE (ALEX, ARLGTN, FAIRFAX',
    cv_payerID: 'CMSMED',
    state: 'VA',
  },
  {
    payer_name: 'KENTUCKY MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'KY',
  },
  {
    payer_name: 'KANSAS MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'KS',
  },
  {
    payer_name: 'MARYLAND MEDICARE (MONTG, PRINCE GEORGE)',
    cv_payerID: 'CMSMED',
    state: 'MD',
  },
  {
    payer_name: 'IDAHO MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'ID',
  },
  {
    payer_name: 'WYOMING MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'WY',
  },
  {
    payer_name: 'HAWAII MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'HI',
  },
  {
    payer_name: 'ALABAMA MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'AL',
  },
  {
    payer_name: 'MASSACHUSETTS MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'MA',
  },
  {
    payer_name: 'NEW HAMPSHIRE MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'NH',
  },
  {
    payer_name: 'VERMONT MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'VT',
  },
  {
    payer_name: 'MAINE MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'ME',
  },
  {
    payer_name: 'PUERTO RICO MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'PR',
  },
  {
    payer_name: 'NEW YORK EMPIRE MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'NY',
  },
  {
    payer_name: 'MISSOURI NORTHWEST MEDICARE - KANSAS CITY, MO',
    cv_payerID: 'CMSMED',
    state: 'MO',
  },
  {
    payer_name: 'VIRGIN ISLANDS MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'VI',
  },
  {
    payer_name: 'MONTANA MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'MT',
  },
  {
    payer_name: 'NEW YORK MEDICARE GHI',
    cv_payerID: 'CMSMED',
    state: 'NY',
  },
  {
    payer_name: 'MARYLAND MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'MD',
  },
  {
    payer_name: 'RHODE ISLAND MEDICARE',
    cv_payerID: 'CMSMED',
    state: 'RI',
  },
  {
    payer_name: 'MEDICARE DME MAC JURISDICTION A',
    cv_payerID: 'CMSMED',
  },
  {
    payer_name: 'MEDICARE DME MAC JURISDICTION B',
    cv_payerID: 'CMSMED',
  },
  {
    payer_name: 'MEDICARE DME MAC JURISDICTION C',
    cv_payerID: 'CMSMED',
  },
  {
    payer_name: 'MEDICARE DME MAC JURISDICTION D',
    cv_payerID: 'CMSMED',
  },
  {
    payer_name: 'CMS MEDICARE ELIGIBILITY',
    cv_payerID: 'CMSMED',
  },
  {
    payer_name: 'CONSOLIDATED ASSOCIATES RAILROAD',
    cv_payerID: 'CNSRR',
  },
  {
    payer_name: 'NEBRASKA TOTAL CARE',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'SILVER SUMMIT HEALTH PLAN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'MANAGED HEALTH NETWORK',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'SUNSHINE HEALTH ',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'CARE1ST HEALTH PLAN AZ MEDICAID DOS AFTER 11/30/22',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'PEACH STATE HEALTH PLAN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'SUPERIOR HEALTH PLAN - TEXAS',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'MHS HEALTH WISCONSIN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'MANAGED HEALTH SERVICES - INDIANA',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'HEALTH NET OF CALIFORNIA - CLAIMS',
    cv_payerID: 'CNTENE',
    state: 'CA',
  },
  {
    payer_name: 'ABSOLUTE TOTAL CARE',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ABSOLUTE TOTAL CARE',
    cv_payerID: 'CNTENE',
    state: 'SC',
  },
  {
    payer_name: 'BUCKEYE COMMUNITY HEALTH - OHIO',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ADVANTAGE BY BUCKEYE',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'MAGNOLIA HEALTH PLAN - MISSISSIPPI',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'LOUISIANA HEALTH CONNECTIONS',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'HOMESTATE HEALTH PLAN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'COORDINATED CARE',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'SUNFLOWER HEALTH PLAN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'NEW HAMPSHIRE HEALTHY FAMILIES',
    cv_payerID: 'CNTENE',
    state: 'NH',
  },
  {
    payer_name: 'CALIFORNIA HEALTH AND WELLNESS',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER OF ARKANSAS',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER FROM SUNSHINE HEALTH',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER FROM PEACH STATE HEALTH PLAN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER FROM MANAGED HEALTH SERVICES',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER FROM MAGNOLIA HEALTH',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER FROM BUCKEYE COMMUNITY HEALTH PLAN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER FROM SUPERIOR HEALTH',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER ILLINICARE HEALTH',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER NEW HAMPSHIRE HEALTHY FAMILIES',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'TRILLIUM COMMUNITY HEALTH PLAN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'PA HEALTH AND WELLNESS',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'HEALTH NET OF CA, OR',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM HEALTH NET',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM ARKANSAS HEALTH AND WELLNESS',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM SUNSHINE HEALTH',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM PEACH STATE HEALTH PLAN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM MANAGED HEALTH SERVICES',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM SUNFLOWER HEALTH PLAN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM LOUISIANA HEALTHCARE CONNECTIONS',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM MAGNOLIA HEALTH',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM HOME STATE HEALTH',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM BUCKEYE HEALTH PLAN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM PA HEALTH AND WELLNESS',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM ABSOLUTE TOTAL CARE',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM SUPERIOR HEALTHPLAN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM MANAGED HEALTH SERVICES HEALTH WI',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER FROM HEALTH NET',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER FROM HOMESTATE HEALTH',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ARIZONA COMPLETE HEALTH',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM WESTERN SKY COMMUNITY CARE',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'WESTERN SKY COMMUNITY CARE',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ARKANSAS TOTAL CARE',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'IOWA TOTAL CARE',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ASCENSION COMPLETE',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER OF TENNESSEE',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER FROM PENNSYLVANIA HEALTH AND WELLNESS',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'CAROLINA COMPLETE HEALTH CARE',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER FROM MERIDIAN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER FROM WELLCARE OF NEW JERSEY',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'BUCKEYE OHIO MEDICAID',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'BUCKEYE OHIO MEDICAID VISION',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'COLORADO ACCESS',
    cv_payerID: 'COACCS',
    state: 'CO',
  },
  {
    payer_name: 'COLORADO BLUE SHIELD',
    cv_payerID: 'COBCBS',
    state: 'CO',
  },
  {
    payer_name: 'HEALTH FIRST COLORADO FKA COLORADO MEDICAID',
    cv_payerID: 'COCAID',
    state: 'CO',
  },
  {
    payer_name: 'FRIDAY HEALTH PLANS',
    cv_payerID: 'COCHP',
  },
  {
    payer_name: 'KAISER FOUNDATION HEALTH PLAN OF COLORADO',
    cv_payerID: 'COKAIS',
    state: 'CO',
  },
  {
    payer_name: 'COLLECTIVE HEALTH',
    cv_payerID: 'COLLH',
  },
  {
    payer_name: 'COMMUNITY HEALTH CHOICE',
    cv_payerID: 'COMHC',
  },
  {
    payer_name: 'COMMUNITY HEALTH CHOICE TEXAS - HIM',
    cv_payerID: 'COMHC',
  },
  {
    payer_name: 'COMMUNITY HEALTH GROUP',
    cv_payerID: 'COMHGR',
  },
  {
    payer_name: 'COMMUNITY FIRST HEALTH PLAN',
    cv_payerID: 'COMMF',
  },
  {
    payer_name: 'CONNECTICARE VIP MEDICARE ADVANTAGE',
    cv_payerID: 'CONNCR',
  },
  {
    payer_name: 'CONNECTICARE, INC.',
    cv_payerID: 'CONNCR',
  },
  {
    payer_name: 'COOK CHILDRENS HEALTH PLAN',
    cv_payerID: 'COOKCH',
  },
  {
    payer_name: 'COOK MEDICAL GROUP',
    cv_payerID: 'COOKG',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF KENTUCKY',
    cv_payerID: 'COVCKY',
  },
  {
    payer_name: 'COVENANT ADMINISTRATORS, INC. (ATLANTA, GA)',
    cv_payerID: 'COVENT',
  },
  {
    payer_name: 'COX HEALTH PLAN',
    cv_payerID: 'COXHP',
  },
  {
    payer_name: 'CORPORATE BENEFITS SERVICES',
    cv_payerID: 'CPBNSV',
  },
  {
    payer_name: 'COLONIAL PENN LIFE INSURANCE COMPANY',
    cv_payerID: 'CPLIC',
  },
  {
    payer_name: 'CREATE',
    cv_payerID: 'CREATE',
  },
  {
    payer_name: 'CAREMORE HEALTH PLAN',
    cv_payerID: 'CRMRE',
  },
  {
    payer_name: 'CAREPLUS HEALTH PLANS, INC.',
    cv_payerID: 'CRPLUS',
  },
  {
    payer_name: 'CARESOURCE OF OHIO',
    cv_payerID: 'CRSROH',
  },
  {
    payer_name: 'CARESOURCE OF OHIO',
    cv_payerID: 'CRSROH',
    state: 'OH',
  },
  {
    payer_name: 'CARESOURCE OHIO MEDICAID',
    cv_payerID: 'CRSROH',
  },
  {
    payer_name: 'CARESOURCE OHIO MEDICAID VISION',
    cv_payerID: 'CRSROH',
  },
  {
    payer_name: 'TRUSTMARK HEALTH BENEFITS (CORESOURCE DETROIT)',
    cv_payerID: 'CSFMH',
  },
  {
    payer_name: 'TRUSTMARK HEALTH BENEFITS (CORESOURCE OH)',
    cv_payerID: 'CSFMH',
  },
  {
    payer_name: 'TRUSTMARK HEALTH (CORESOURCE AZ IL IN MD MN NC PA)',
    cv_payerID: 'CSFMH',
  },
  {
    payer_name: 'TRUSTMARK HEALTH BENEFITS (CORESOURCE LITTLE ROCK)',
    cv_payerID: 'CSFMH',
  },
  {
    payer_name: 'TRUSTMARK HEALTH BENEFITS (CORESOURCE INTERNAL)',
    cv_payerID: 'CSFMH',
  },
  {
    payer_name: 'TRUSTMARK HEALTH BENEFITS (CORESOURCE KC)',
    cv_payerID: 'CSFMH',
  },
  {
    payer_name: 'CARESOURCE PASSE OF ARKANSAS',
    cv_payerID: 'CSPAR',
  },
  {
    payer_name: 'CARESOURCE OF INDIANA',
    cv_payerID: 'CSRCIN',
    state: 'IN',
  },
  {
    payer_name: 'HUMANA - CARESOURCE OF KENTUCKY',
    cv_payerID: 'CSRCKY',
  },
  {
    payer_name: 'CARESOURCE NORTH CAROLINA',
    cv_payerID: 'CSRCNC',
  },
  {
    payer_name: 'CARESOURCE OF WEST VIRGINIA',
    cv_payerID: 'CSRCWV',
  },
  {
    payer_name: 'CENTRAL STATES HEALTH AND WELFARE FUNDS',
    cv_payerID: 'CSTFND',
  },
  {
    payer_name: 'CONNECTICUT BLUE SHIELD',
    cv_payerID: 'CTBCBS',
    state: 'CT',
  },
  {
    payer_name: 'CONNECTICUT MEDICAID',
    cv_payerID: 'CTCAID',
  },
  {
    payer_name: 'CONNECTICUT MEDICAID',
    cv_payerID: 'CTCAID',
  },
  {
    payer_name: 'MASS ADVANTAGE',
    cv_payerID: 'CTMASS',
  },
  {
    payer_name: 'COUNTYCARE HEALTH PLAN',
    cv_payerID: 'CTYCHP',
  },
  {
    payer_name: 'LUCENT HEALTH',
    cv_payerID: 'CYPRSS',
  },
  {
    payer_name: 'DAKOTACARE',
    cv_payerID: 'DAKOTA',
  },
  {
    payer_name: 'BLUE SHIELD OF NATIONAL CAPITOL AREA - CAREFIRST',
    cv_payerID: 'DCBCBS',
    state: 'DC',
  },
  {
    payer_name: 'DISTRICT OF COLUMBIA MEDICAID',
    cv_payerID: 'DCCAID',
    state: 'DC',
  },
  {
    payer_name: 'MEDSTAR FAMILY CHOICE DC',
    cv_payerID: 'DCMED',
  },
  {
    payer_name: 'DEAN HEALTH PLAN',
    cv_payerID: 'DEANHP',
  },
  {
    payer_name: 'DELAWARE BLUE SHIELD - HIGHMARK',
    cv_payerID: 'DEBCBS',
    state: 'DE',
  },
  {
    payer_name: 'DELAWARE MEDICAID',
    cv_payerID: 'DECAID',
  },
  {
    payer_name: 'DEVOTED HEALTH',
    cv_payerID: 'DEVOT',
  },
  {
    payer_name: 'DESERET MUTUAL BENEFIT ASSOCIATES (DMBA)',
    cv_payerID: 'DMBA',
  },
  {
    payer_name: 'DENVER HEALTH MEDICAL PLAN',
    cv_payerID: 'DNVHMP',
  },
  {
    payer_name: 'DOCTORS HEALTHCARE PLANS ',
    cv_payerID: 'DRHCP',
  },
  {
    payer_name: 'DRISCOLL CHILDRENS HEALTH PLAN',
    cv_payerID: 'DRSCHP',
  },
  {
    payer_name: 'DIVERSIFIED GROUP BROKERAGE',
    cv_payerID: 'DVRGB',
  },
  {
    payer_name: 'EMPLOYEE BENEFIT MANAGEMENT SERV (EBMS)',
    cv_payerID: 'EBMS',
  },
  {
    payer_name: 'EBSO, INC.',
    cv_payerID: 'EBSO',
  },
  {
    payer_name: 'ELDERPLAN, INC.',
    cv_payerID: 'ELDER',
  },
  {
    payer_name: 'CIGNA HEALTHSPRING MARYLAND/PENNSYLNAVIA',
    cv_payerID: 'ELDRHL',
  },
  {
    payer_name: 'EL PASO HEALTH-CHIP',
    cv_payerID: 'ELPASO',
  },
  {
    payer_name: 'EMBLEMHEALTH PLAN INC HMO',
    cv_payerID: 'EMBLEM',
  },
  {
    payer_name: 'EMBLEMHEALTH INSURANCE COMPANY',
    cv_payerID: 'EMBLEM',
  },
  {
    payer_name: 'EMBLEMHEALTH PLAN INC MCR',
    cv_payerID: 'EMBLEM',
  },
  {
    payer_name: 'VYTRA HEALTHCARE',
    cv_payerID: 'EMBLEM',
  },
  {
    payer_name: 'NEW YORK EMPIRE BLUE SHIELD',
    cv_payerID: 'EMHECH',
  },
  {
    payer_name: 'NEW YORK EMPIRE BLUE SHIELD',
    cv_payerID: 'EMHECH',
    state: 'NY',
  },
  {
    payer_name: 'NEW YORK EMPIRE BLUE SHIELD',
    cv_payerID: 'EMHECH',
  },
  {
    payer_name: 'EMHS EMPLOYEE HEALTH PLAN',
    cv_payerID: 'EMHSP',
  },
  {
    payer_name: 'EMI HEALTH ',
    cv_payerID: 'EMINS',
  },
  {
    payer_name: 'EMPOWER HEALTHCARE SOLUTIONS',
    cv_payerID: 'EMPOW',
  },
  {
    payer_name: 'SIGNIFICA BENEFIT SERVICES, INC.',
    cv_payerID: 'ERINGP',
  },
  {
    payer_name: 'ESSENCE',
    cv_payerID: 'ESSNCE',
  },
  {
    payer_name: 'EVRY HEALTH',
    cv_payerID: 'EVRYHP',
  },
  {
    payer_name: 'FALLON COMMUNITY HEALTH PLAN',
    cv_payerID: 'FALLON',
  },
  {
    payer_name: 'FIRSTCAROLINACARE - NEW',
    cv_payerID: 'FCACAR',
  },
  {
    payer_name: 'FIRST CHOICE VIP CARE',
    cv_payerID: 'FCVPC',
  },
  {
    payer_name: 'FIRST CHOICE VIP CARE PLUS BY SELECT HEALTH OF SC',
    cv_payerID: 'FCVSC',
  },
  {
    payer_name: 'FIDELIS CARE',
    cv_payerID: 'FDCRNY',
    state: 'NY',
  },
  {
    payer_name: 'FIDELIS CARE',
    cv_payerID: 'FDCRNY',
  },
  {
    payer_name: 'FIRST MEDICAL HEALTH PLAN (REFORM)',
    cv_payerID: 'FIRMED',
  },
  {
    payer_name: 'FLORIDA BLUE SHIELD',
    cv_payerID: 'FLBCBS',
    state: 'FL',
  },
  {
    payer_name: 'FLORIDA MEDICAID',
    cv_payerID: 'FLCAID',
    state: 'FL',
  },
  {
    payer_name: 'FLORIDA HEALTH CARE PLAN',
    cv_payerID: 'FLHLTH',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF FLORIDA',
    cv_payerID: 'FLMLNA',
  },
  {
    payer_name: 'FARM BUREAU HEALTH PLANS MAPD',
    cv_payerID: 'FMBHP',
  },
  {
    payer_name: 'FIRST MEDICAL HEALTH PLAN (IMC)',
    cv_payerID: 'FMIMC',
  },
  {
    payer_name: 'FRESENIUS TOTAL HEALTH (PPO SNP)',
    cv_payerID: 'FRSNHP',
  },
  {
    payer_name: 'FIRST CHOICE HEALTH NETWORK',
    cv_payerID: 'FRSTC',
  },
  {
    payer_name: 'FIRSTCARE HEALTH PLANS',
    cv_payerID: 'FRTCR',
  },
  {
    payer_name: 'FIRSTCARE HEALTH PLANS',
    cv_payerID: 'FRTCR',
    state: 'TX',
  },
  {
    payer_name: 'PAYER FUSION',
    cv_payerID: 'FUSION',
  },
  {
    payer_name: 'GEORGIA BLUE SHIELD',
    cv_payerID: 'GABCBS',
    state: 'GA',
  },
  {
    payer_name: 'GEORGIA MEDICAID',
    cv_payerID: 'GACAID',
    state: 'GA',
  },
  {
    payer_name: 'GEORGIA MEDICAID ANESTHESIA',
    cv_payerID: 'GACAID',
    state: 'GA',
  },
  {
    payer_name: 'KAISER FOUNDATION HEALTH PLAN OF GEORGIA',
    cv_payerID: 'GAKAIS',
  },
  {
    payer_name: 'GOVERNMENT EMPLOYEE HEALTH ASSOCIATION (GEHA)',
    cv_payerID: 'GEHA',
    state: 'TX',
  },
  {
    payer_name: 'GEISINGER HEALTH PLAN',
    cv_payerID: 'GEISHP',
  },
  {
    payer_name: 'HIGHMARK BCBS DELAWARE HEALTH OPTIONS',
    cv_payerID: 'GHPHHO',
  },
  {
    payer_name: 'GATEWAY HEALTH PLAN - MEDICAID PENNSYLVANIA',
    cv_payerID: 'GHPMCD',
  },
  {
    payer_name: 'GATEWAY HEALTH PLAN - MEDICARE ASSURED PENNSYLVANI',
    cv_payerID: 'GHPMCR',
  },
  {
    payer_name: 'GOLDEN RULE INSURANCE COMPANY',
    cv_payerID: 'GLDRUL',
  },
  {
    payer_name: 'GEMCARE - KERN COUNTY',
    cv_payerID: 'GMCARE',
  },
  {
    payer_name: 'GMP EMPLOYERS RETIREE TRUST',
    cv_payerID: 'GMPER',
  },
  {
    payer_name: 'IMAGINE360 ADMINISTRATORS (GPA)',
    cv_payerID: 'GPADM',
  },
  {
    payer_name: 'GRAVIE INC',
    cv_payerID: 'GRAVIE',
  },
  {
    payer_name: 'KAISER FOUNDATION HEALTH PLAN OF WASHINGTON',
    cv_payerID: 'GRPNW',
  },
  {
    payer_name: 'CIGNA SELECT (FORMERLY GREAT WEST HEALTHCARE)',
    cv_payerID: 'GWSTHC',
  },
  {
    payer_name: 'HEALTH ALLIANCE PLAN OF MICHIGAN',
    cv_payerID: 'HAPMI',
  },
  {
    payer_name: 'HEALTHY BLUE DUAL ADVANTAGE LOUISIANA',
    cv_payerID: 'HBDALA',
  },
  {
    payer_name: 'HEALTHY BLUE MISSOURI',
    cv_payerID: 'HBLUMO',
  },
  {
    payer_name: 'HEALTHY BLUE NORTH CAROLINA',
    cv_payerID: 'HBLUNC',
  },
  {
    payer_name: 'HEALTHY BLUE NEBRASKA',
    cv_payerID: 'HBLUNE',
  },
  {
    payer_name: 'HEALTH CHOICE PATHWAY',
    cv_payerID: 'HCHGN',
  },
  {
    payer_name: 'HEALTH COST SOLUTIONS',
    cv_payerID: 'HCOSTS',
  },
  {
    payer_name: 'HEALTH FIRST HEALTH PLANS - OSCAR',
    cv_payerID: 'HFHPO',
  },
  {
    payer_name: 'HEALTHGRAM',
    cv_payerID: 'HGRAM',
  },
  {
    payer_name: 'HAWAII MEDICAID',
    cv_payerID: 'HICAID',
    state: 'HI',
  },
  {
    payer_name: 'KAISER FOUNDATION HEALTH PLAN OF HAWAII',
    cv_payerID: 'HIKAIS',
  },
  {
    payer_name: 'HEALTHCOMP INC.',
    cv_payerID: 'HLCOMP',
  },
  {
    payer_name: 'HEALTH FIRST HEALTH PLAN',
    cv_payerID: 'HLFRT',
  },
  {
    payer_name: 'HEALTH PLANS, INC.',
    cv_payerID: 'HLPLNS',
  },
  {
    payer_name: 'HEALTHPARTNERS OF MINNESOTA',
    cv_payerID: 'HLPTMN',
  },
  {
    payer_name: 'HEALTH ALLIANCE MEDICAL PLAN OF ILLINOIS',
    cv_payerID: 'HLTAIL',
  },
  {
    payer_name: 'CONTIGO HEALTH',
    cv_payerID: 'HLTDS1',
  },
  {
    payer_name: 'HEALTHEZ',
    cv_payerID: 'HLTEZ',
  },
  {
    payer_name: 'HEALTH EXCHANGE (THE) (CERNER CORPORATION)',
    cv_payerID: 'HLTHEX',
  },
  {
    payer_name: 'HEALTH NEW ENGLAND',
    cv_payerID: 'HLTNE',
  },
  {
    payer_name: 'HEALTHNOW NEW YORK BLUE SHIELD',
    cv_payerID: 'HLTNOW',
    state: 'NY',
  },
  {
    payer_name: 'THE HEALTH PLAN OF WEST VIRGINIA, INC',
    cv_payerID: 'HLTPLN',
  },
  {
    payer_name: 'HMAA - HAWAII MEDICAL ASSURANCE ASSOCIATION',
    cv_payerID: 'HMAASC',
  },
  {
    payer_name: 'HMA HAWAII',
    cv_payerID: 'HMADMN',
  },
  {
    payer_name: 'HEALTHCARE MGMT ADMINISTRATORS',
    cv_payerID: 'HMAWR',
  },
  {
    payer_name: 'HAWAII BLUE CROSS BLUE SHIELD HMSA',
    cv_payerID: 'HMSA',
  },
  {
    payer_name: 'HAWAII BLUE CROSS BLUE SHIELD HMSA',
    cv_payerID: 'HMSA',
  },
  {
    payer_name: 'HOMETOWN HEALTH',
    cv_payerID: 'HOMTWN',
  },
  {
    payer_name: 'HEALTH PLAN OF SAN MATEO',
    cv_payerID: 'HPOSM',
  },
  {
    payer_name: 'HEALTH PARTNERS PLANS OF PENNSYLVANIA',
    cv_payerID: 'HPPHIL',
  },
  {
    payer_name: 'KAISER SELF FUNDED PLAN - HARRINGTON/FISERV',
    cv_payerID: 'HRGTN',
  },
  {
    payer_name: 'HARRINGTON HEALTH',
    cv_payerID: 'HRGTN',
  },
  {
    payer_name: 'HARVARD PILGRIM HEALTH CARE',
    cv_payerID: 'HRVPGM',
  },
  {
    payer_name: 'HEALTH SERVICES FOR CHILDREN WITH SPECIAL NEEDS',
    cv_payerID: 'HSCSN',
  },
  {
    payer_name: 'HEALTHSMART BENEFIT SOLUTIONS',
    cv_payerID: 'HSMRT',
  },
  {
    payer_name: 'CIGNA HEALTHSPRING TENNESSEE ALABAMA',
    cv_payerID: 'HSPRNG',
  },
  {
    payer_name: 'CIGNA HEALTHSPRING TENNESSEE ALABAMA',
    cv_payerID: 'HSPRNG',
  },
  {
    payer_name: 'CIGNA HEALTHSPRING TENNESSEE ALABAMA',
    cv_payerID: 'HSPRNG',
    state: 'AL',
  },
  {
    payer_name: 'CIGNA HEALTHSPRING TENNESSEE ALABAMA',
    cv_payerID: 'HSPRNG',
    state: 'TN',
  },
  {
    payer_name: 'CIGNA MEDICARE',
    cv_payerID: 'HSPRNG',
    state: 'TX',
  },
  {
    payer_name: 'HUMANA',
    cv_payerID: 'HUMANA',
    state: 'LA',
  },
  {
    payer_name: 'HUMANA',
    cv_payerID: 'HUMANA',
  },
  {
    payer_name: 'HUMANA OHIO MEDICAID VISION',
    cv_payerID: 'HUMANA',
  },
  {
    payer_name: 'HUMANA OHIO MEDICAID',
    cv_payerID: 'HUMOM',
  },
  {
    payer_name: 'HORIZON NJ HEALTH',
    cv_payerID: 'HZMRCY',
  },
  {
    payer_name: 'IOWA BLUE SHIELD',
    cv_payerID: 'IABCBS',
    state: 'IA',
  },
  {
    payer_name: 'SOUTH DAKOTA BLUE SHIELD',
    cv_payerID: 'IABCBS',
    state: 'SD',
  },
  {
    payer_name: 'IOWA MEDICAID',
    cv_payerID: 'IACAID',
    state: 'IA',
  },
  {
    payer_name: 'IDAHO BLUE SHIELD REGENCE',
    cv_payerID: 'IDBCS',
    state: 'ID',
  },
  {
    payer_name: 'IDAHO BLUE CROSS BOISE',
    cv_payerID: 'IDBLCB',
  },
  {
    payer_name: 'IDAHO BLUE CROSS BOISE',
    cv_payerID: 'IDBLCB',
    state: 'ID',
  },
  {
    payer_name: 'IDAHO MEDICAID',
    cv_payerID: 'IDCAID',
    state: 'ID',
  },
  {
    payer_name: 'INLAND EMPIRE HEALTH PLAN - DOS AFTER 3/31/18',
    cv_payerID: 'IEHP',
  },
  {
    payer_name: 'ILLINOIS BLUE SHIELD',
    cv_payerID: 'ILBCBS',
    state: 'IL',
  },
  {
    payer_name: 'ILLINOIS BLUE SHIELD',
    cv_payerID: 'ILBCBS',
  },
  {
    payer_name: 'ILLINOIS MEDICAID',
    cv_payerID: 'ILCAID',
    state: 'IL',
  },
  {
    payer_name: 'PROFESSIONAL BENEFIT ADMINISTRATORS (OAK BROOK,IL)',
    cv_payerID: 'ILPBA',
  },
  {
    payer_name: 'IMCARE',
    cv_payerID: 'IMCARE',
  },
  {
    payer_name: 'INDIANA BLUE SHIELD',
    cv_payerID: 'INBCBS',
  },
  {
    payer_name: 'MAESTRO HEALTH',
    cv_payerID: 'INBMS',
  },
  {
    payer_name: 'INDIANA MEDICAID',
    cv_payerID: 'INCAID',
    state: 'IN',
  },
  {
    payer_name: 'MDWISE HOOSIER HEALTHWISE',
    cv_payerID: 'INCAID',
  },
  {
    payer_name: 'MDWISE HEALTHY INDIANA PLAN ',
    cv_payerID: 'INCAID',
  },
  {
    payer_name: 'INDEPENDENCE ADMINISTRATORS',
    cv_payerID: 'INDADM',
  },
  {
    payer_name: 'ICARE, INDEPENDENT CARE HEALTH',
    cv_payerID: 'INDCH',
  },
  {
    payer_name: 'INTERNATIONAL BENEFITS ADMINISTRATORS',
    cv_payerID: 'INTADM',
  },
  {
    payer_name: 'IU HEALTH PLAN MEDICARE ADVANTAGE',
    cv_payerID: 'IUHLTH',
  },
  {
    payer_name: 'IU HEALTH PLANS (PAYER ID IUHPLNS)',
    cv_payerID: 'IUHLTP',
  },
  {
    payer_name: 'INTER VALLEY HEALTH PLAN',
    cv_payerID: 'IVHP',
  },
  {
    payer_name: 'JAI MEDICAL SYSTEMS',
    cv_payerID: 'JAIMED',
  },
  {
    payer_name: 'UNITED HEALTHCARE COMMUNITY PLAN - TENNCARE ONLY',
    cv_payerID: 'JDHS',
  },
  {
    payer_name: 'JOHNS HOPKINS HEALTHCARE',
    cv_payerID: 'JHHP',
  },
  {
    payer_name: 'JOHNS HOPKINS USFHP',
    cv_payerID: 'JHUSFP',
  },
  {
    payer_name: 'KAISER FOUNDATION HEALTH PLAN OF THE NORTHWEST',
    cv_payerID: 'KAISNW',
  },
  {
    payer_name: 'MISSOURI BLUE SHIELD OF KANSAS CITY',
    cv_payerID: 'KCBCBS',
    state: 'MO',
  },
  {
    payer_name: 'KEMPTON GROUP ADMINISTRATORS',
    cv_payerID: 'KEMCO',
  },
  {
    payer_name: 'KEY BENEFIT ADMINISTRATORS, INC.',
    cv_payerID: 'KEYBEN',
  },
  {
    payer_name: 'KEY BENEFIT ADMINISTRATORS - FT MILL, SC',
    cv_payerID: 'KEYBEN',
  },
  {
    payer_name: 'TRANSCHOICE KEY BENEFIT ADMINISTRATORS',
    cv_payerID: 'KEYBEN',
  },
  {
    payer_name: 'KEY SELECT',
    cv_payerID: 'KEYBEN',
  },
  {
    payer_name: 'KEY SOLUTIONS',
    cv_payerID: 'KEYBEN',
  },
  {
    payer_name: 'KEYSTONE FIRST',
    cv_payerID: 'KMHPLN',
  },
  {
    payer_name: 'KANSAS BLUE SHIELD - TOPEKA',
    cv_payerID: 'KSBCBS',
    state: 'KS',
  },
  {
    payer_name: 'KANSAS MEDICAID',
    cv_payerID: 'KSCAID',
    state: 'KS',
  },
  {
    payer_name: 'KEYSTONE FIRST COMMUNITY HEALTHCHOICES',
    cv_payerID: 'KSFCHC',
  },
  {
    payer_name: 'KAISER FOUNDATION HEALTH PLAN MID-ATLANTIC STATES',
    cv_payerID: 'KSRMDA',
  },
  {
    payer_name: 'KAISER FOUNDATION HEALTH PLAN OF N CA REGION',
    cv_payerID: 'KSRNCA',
    state: 'CA',
  },
  {
    payer_name: 'KAISER FOUNDATION HEALTH PLAN OF S CA REGION',
    cv_payerID: 'KSRSCA',
    state: 'CA',
  },
  {
    payer_name: 'KEYSTONE FIRST VIP CHOICE',
    cv_payerID: 'KVIPC',
  },
  {
    payer_name: 'KENTUCKY BLUE SHIELD',
    cv_payerID: 'KYBCBS',
  },
  {
    payer_name: 'KENTUCKY BLUE SHIELD',
    cv_payerID: 'KYBCBS',
    state: 'KY',
  },
  {
    payer_name: 'KENTUCKY MEDICAID',
    cv_payerID: 'KYCAID',
    state: 'KY',
  },
  {
    payer_name: 'LA BLUE ADVANTAGE',
    cv_payerID: 'LABADV',
  },
  {
    payer_name: 'LOUISIANA BLUE SHIELD',
    cv_payerID: 'LABCBS',
  },
  {
    payer_name: 'LOUISIANA MEDICAID',
    cv_payerID: 'LACAID',
  },
  {
    payer_name: 'LOUISIANA MEDICAID',
    cv_payerID: 'LACAID',
  },
  {
    payer_name: 'LOUISIANA MEDICAID - AMBULANCE',
    cv_payerID: 'LACAID',
    state: 'LA',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS LOUISIANA',
    cv_payerID: 'LACAR',
  },
  {
    payer_name: 'LA CARE HEALTH PLAN',
    cv_payerID: 'LACRE',
  },
  {
    payer_name: 'LOYAL AMERICAN LIFE INSURANCE/MEDICARE SUPPLEMENT',
    cv_payerID: 'LALIMS',
  },
  {
    payer_name: 'OPTUM MEDICAL NETWORK',
    cv_payerID: 'LFPRT',
  },
  {
    payer_name: 'LOOMIS COMPANY (THE)',
    cv_payerID: 'LOOMCO',
  },
  {
    payer_name: 'BLUE CROSS BLUE SHIELD OF MASSACHUSETTS',
    cv_payerID: 'MABCBS',
    state: 'MA',
  },
  {
    payer_name: 'MASSACHUSETTS MEDICAID (FORMAT 9)',
    cv_payerID: 'MACAID',
    state: 'MA',
  },
  {
    payer_name: 'MASSACHUSETTS MEDICAID (FORMAT 5)',
    cv_payerID: 'MACAID',
    state: 'MA',
  },
  {
    payer_name: 'MAGELLAN HEALTHCARE',
    cv_payerID: 'MAGLAN',
  },
  {
    payer_name: 'MAGNACARE',
    cv_payerID: 'MAGNA',
  },
  {
    payer_name: 'MEDICAL ASSOCIATES HEALTH PLANS - FEE FOR SERVICE',
    cv_payerID: 'MAHP',
  },
  {
    payer_name: 'MAPFRE',
    cv_payerID: 'MAPFRE',
  },
  {
    payer_name: 'MARICOPA CARE ADVANTAGE - ARIZONA',
    cv_payerID: 'MARIAD',
  },
  {
    payer_name: 'MARICOPA HEALTH PLAN - MARICOPA CARE ADVANTAGE',
    cv_payerID: 'MARIHP',
  },
  {
    payer_name: 'MARPAI HEALTH',
    cv_payerID: 'MARPAI',
  },
  {
    payer_name: 'MERIDIAN MEDICARE MEDICAID PLAN ',
    cv_payerID: 'MCCIL',
  },
  {
    payer_name: 'MCLAREN HEALTH PLANS',
    cv_payerID: 'MCLREN',
  },
  {
    payer_name: 'MEDICAL CARD SYSTEMS (MCS) REFORMA',
    cv_payerID: 'MCSPR',
  },
  {
    payer_name: 'MODA HEALTH',
    cv_payerID: 'MDAHLT',
  },
  {
    payer_name: 'MARYLAND BLUE SHIELD - CAREFIRST',
    cv_payerID: 'MDBCBS',
  },
  {
    payer_name: 'MEDICAL BENEFITS ADMINISTRATORS (NEWARK, OH)',
    cv_payerID: 'MDBEN',
  },
  {
    payer_name: 'MARYLAND MEDICAID',
    cv_payerID: 'MDCAID',
    state: 'MD',
  },
  {
    payer_name: 'MEDICO INSURANCE COMPANY',
    cv_payerID: 'MDICO',
  },
  {
    payer_name: 'MARYLAND PHYSICIANS CARE',
    cv_payerID: 'MDPHCR',
  },
  {
    payer_name: 'MAINE BLUE SHIELD',
    cv_payerID: 'MEBCBS',
    state: 'ME',
  },
  {
    payer_name: 'MAINE MEDICAID',
    cv_payerID: 'MECAID',
    state: 'ME',
  },
  {
    payer_name: 'MAINE COMMUNITY HEALTH OPTIONS',
    cv_payerID: 'MECOH',
  },
  {
    payer_name: 'MEDCOST BENEFIT SERVICES (MBS)',
    cv_payerID: 'MEDCST',
  },
  {
    payer_name: 'MEDIGOLD HMO',
    cv_payerID: 'MEDGLD',
  },
  {
    payer_name: 'MEDIGOLD PPO',
    cv_payerID: 'MEDGLD',
  },
  {
    payer_name: 'MEDICA GOVERNMENT PROGRAMS',
    cv_payerID: 'MEDGP',
  },
  {
    payer_name: 'MEDICA INDIVIDUAL AND FAMILY (IFB)',
    cv_payerID: 'MEDIFB',
  },
  {
    payer_name: 'MED-PAY, INC.',
    cv_payerID: 'MEDPY',
  },
  {
    payer_name: 'MERIDIAN HEALTH PLAN OF ILLINOIS DOS &lt; 7/1/21',
    cv_payerID: 'MERIL',
  },
  {
    payer_name: 'MERITAIN HEALTH MINNEAPOLIS',
    cv_payerID: 'MERITN',
  },
  {
    payer_name: 'HENNEPIN HEALTH',
    cv_payerID: 'METHPL',
  },
  {
    payer_name: 'METROPLUSHEALTH',
    cv_payerID: 'METPL',
  },
  {
    payer_name: 'MEDICA HEALTH PLAN SOLUTIONS',
    cv_payerID: 'MHSRT',
  },
  {
    payer_name: 'MICHIGAN BLUE SHIELD',
    cv_payerID: 'MIBCSP',
  },
  {
    payer_name: 'MICHIGAN BLUE SHIELD',
    cv_payerID: 'MIBCSP',
    state: 'MI',
  },
  {
    payer_name: 'MEDICARE PLUS BLUE - MEDICARE ADVANTAGE PLAN',
    cv_payerID: 'MIBCSP',
    state: 'MI',
  },
  {
    payer_name: 'BLUE CARE NETWORK HMO',
    cv_payerID: 'MIBCSP',
    state: 'MI',
  },
  {
    payer_name: 'MICHIGAN MEDICAID',
    cv_payerID: 'MICAID',
    state: 'MI',
  },
  {
    payer_name: 'UPPER PENINSULA HEALTH PLAN',
    cv_payerID: 'MICAID',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF MICHIGAN',
    cv_payerID: 'MIMLNA',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF WISCONSIN',
    cv_payerID: 'MLNAWI',
    state: 'WI',
  },
  {
    payer_name: 'MOLINA COMPLETE CARE OF ARIZONA',
    cv_payerID: 'MLNAZ',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF  IDAHO',
    cv_payerID: 'MLNID',
  },
  {
    payer_name: 'PASSPORT HEALTH PLAN BY MOLINA HEALTHCARE',
    cv_payerID: 'MLNKY',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF NEVADA',
    cv_payerID: 'MLNNV',
  },
  {
    payer_name: 'MOLINA COMPLETE CARE OF VIRGINIA',
    cv_payerID: 'MLNVA',
  },
  {
    payer_name: 'MERCY CARE RBHA',
    cv_payerID: 'MMICR',
  },
  {
    payer_name: 'MMM OF FLORIDA',
    cv_payerID: 'MMMFL',
  },
  {
    payer_name: 'MMM HEALTHCARE',
    cv_payerID: 'MMMHC',
    state: 'PR',
  },
  {
    payer_name: 'MMM MULTI HEALTH (REFORM)',
    cv_payerID: 'MMMHRF',
  },
  {
    payer_name: 'MEDICAL MUTUAL OF OHIO',
    cv_payerID: 'MMUTOH',
  },
  {
    payer_name: 'MUNICIPAL HEALTH BENEFIT FUND',
    cv_payerID: 'MNHBF',
  },
  {
    payer_name: 'MINNESOTA BLUE CROSS BLUE SHIELD HEALTH CARE PROGR',
    cv_payerID: 'MNHCP',
    state: 'MN',
  },
  {
    payer_name: 'UCARE OF MINNESOTA DOS BEFORE 1-1-2022',
    cv_payerID: 'MNUCAR',
  },
  {
    payer_name: 'UCARE PLANS',
    cv_payerID: 'MNUCAR',
  },
  {
    payer_name: 'MISSOURI BLUE SHIELD - ST LOUIS MO',
    cv_payerID: 'MOBCBS',
    state: 'MO',
  },
  {
    payer_name: 'MISSOURI MEDICAID',
    cv_payerID: 'MOCAID',
    state: 'MO',
  },
  {
    payer_name: 'MONTEFIORE CMO',
    cv_payerID: 'MOCMO',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF ILLINOIS',
    cv_payerID: 'MOLIL',
  },
  {
    payer_name: 'MORECARE',
    cv_payerID: 'MORECA',
  },
  {
    payer_name: 'MARTINS POINT HEALTH CARE USFHP/GENERATIONS ADV',
    cv_payerID: 'MRTNP',
  },
  {
    payer_name: 'MARY WASHINGTON HEALTH PLAN',
    cv_payerID: 'MRYWSH',
  },
  {
    payer_name: 'MISSISSIPPI BLUE SHIELD',
    cv_payerID: 'MSBCBS',
    state: 'MS',
  },
  {
    payer_name: 'MISSISSIPPI MEDICAID',
    cv_payerID: 'MSCAID',
    state: 'MS',
  },
  {
    payer_name: 'MEDSTAR FAMILY CHOICE MD',
    cv_payerID: 'MSFC',
  },
  {
    payer_name: 'MONTANA BLUE SHIELD',
    cv_payerID: 'MTBCBS',
    state: 'MT',
  },
  {
    payer_name: 'MONTANA MEDICAID',
    cv_payerID: 'MTCAID',
    state: 'MT',
  },
  {
    payer_name: 'MUTUAL OF OMAHA MEDICARE ADVANTAGE',
    cv_payerID: 'MUTOMA',
  },
  {
    payer_name: 'MUTUAL OF OMAHA',
    cv_payerID: 'MUTOMH',
  },
  {
    payer_name: 'NATIONAL ASSOCIATION OF LETTER CARRIERS',
    cv_payerID: 'NAOLC',
  },
  {
    payer_name: 'NEXTBLUE OF NORTH DAKOTA',
    cv_payerID: 'NBOND',
  },
  {
    payer_name: 'CAREFIRST ADMINISTRATORS / NCAS',
    cv_payerID: 'NCAS',
  },
  {
    payer_name: 'NORTH CAROLINA BLUE SHIELD',
    cv_payerID: 'NCBCBS',
    state: 'NC',
  },
  {
    payer_name: 'NORTH CAROLINA MEDICAID',
    cv_payerID: 'NCCAID',
    state: 'NC',
  },
  {
    payer_name: 'BLUE MEDICARE PPO/HMO OF NORTH CAROLINA',
    cv_payerID: 'NCPNHP',
  },
  {
    payer_name: 'NORTH DAKOTA BLUE SHIELD',
    cv_payerID: 'NDBCBP',
    state: 'ND',
  },
  {
    payer_name: 'NEBRASKA BLUE SHIELD',
    cv_payerID: 'NEBCBS',
    state: 'NE',
  },
  {
    payer_name: 'NEBRASKA MEDICAID',
    cv_payerID: 'NECAID',
    state: 'NE',
  },
  {
    payer_name: 'MASS GENERAL BRIGHAM HEALTH PLAN ',
    cv_payerID: 'NGHBHP',
  },
  {
    payer_name: 'NEIGHBORHOOD HEALTH PARTNERSHIP OF FLORIDA',
    cv_payerID: 'NGHPRT',
  },
  {
    payer_name: 'NEW HAMPSHIRE BLUE SHIELD',
    cv_payerID: 'NHBCBS',
    state: 'NH',
  },
  {
    payer_name: 'NEW HAMPSHIRE MEDICAID',
    cv_payerID: 'NHCAID',
    state: 'NH',
  },
  {
    payer_name: 'NETWORK HEALTH INSURANCE CORP MEDICARE',
    cv_payerID: 'NHICMC',
  },
  {
    payer_name: 'HORIZON BLUE SHIELD OF NEW JERSEY',
    cv_payerID: 'NJBCBS',
    state: 'NJ',
  },
  {
    payer_name: 'NEW JERSEY MEDICAID',
    cv_payerID: 'NJCAID',
    state: 'NJ',
  },
  {
    payer_name: 'NIPPON LIFE INSURANCE COMPANY OF AMERICA',
    cv_payerID: 'NLICOA',
  },
  {
    payer_name: 'NEW MEXICO BLUE SHIELD',
    cv_payerID: 'NMBCBS',
    state: 'NM',
  },
  {
    payer_name: 'NEW MEXICO BLUE SHIELD',
    cv_payerID: 'NMBCBS',
  },
  {
    payer_name: 'NEW MEXICO BLUE SHIELD',
    cv_payerID: 'NMBCBS',
  },
  {
    payer_name: 'NEW MEXICO MEDICAID',
    cv_payerID: 'NMCAID',
    state: 'NM',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF NEW MEXICO',
    cv_payerID: 'NMMLNA',
  },
  {
    payer_name: 'NOVA HEALTHCARE ADMINISTRATORS, INC. (GRAND ISLAND',
    cv_payerID: 'NOVAHC',
  },
  {
    payer_name: 'NATIONAL TELECOMMUNICATIONS COOP ASSOC. (NTCA)',
    cv_payerID: 'NTCA',
  },
  {
    payer_name: 'TUFTS HEALTH PUBLIC PLANS',
    cv_payerID: 'NTHLMA',
  },
  {
    payer_name: 'NETWORK HEALTH PLAN OF WISCONSIN',
    cv_payerID: 'NTWHL',
  },
  {
    payer_name: 'NOVASYS HEALTH NETWORK',
    cv_payerID: 'NVASYS',
  },
  {
    payer_name: 'NEVADA BLUE SHIELD',
    cv_payerID: 'NVBCBS',
    state: 'NV',
  },
  {
    payer_name: 'NORTHWEST ADMINISTRATORS, INC.',
    cv_payerID: 'NWADM',
  },
  {
    payer_name: 'NEW ERA LIFE INSURANCE COMPANY',
    cv_payerID: 'NWERAL',
  },
  {
    payer_name: 'NEW YORK BLUE SHIELD WESTERN',
    cv_payerID: 'NYBCBS',
    state: 'NY',
  },
  {
    payer_name: 'NEW YORK BLUE SHIELD OF NORTHEASTERN NEW YORK',
    cv_payerID: 'NYBCNE',
    state: 'NY',
  },
  {
    payer_name: 'NEW YORK MEDICAID - PHASE II',
    cv_payerID: 'NYCAID',
    state: 'NY',
  },
  {
    payer_name: 'NEW YORK BLUE SHIELD  CENTRAL REGION',
    cv_payerID: 'NYEXCL',
    state: 'NY',
  },
  {
    payer_name: 'NEW YORK BLUE SHIELD OF ROCHESTER',
    cv_payerID: 'NYEXCL',
    state: 'NY',
  },
  {
    payer_name: 'NEW YORK BLUE SHIELD UTICA/WATERTOWN',
    cv_payerID: 'NYEXCL',
    state: 'NY',
  },
  {
    payer_name: 'HEALTHFIRST OF NEW YORK',
    cv_payerID: 'NYHFST',
  },
  {
    payer_name: 'NEW YORK INDEPENDENT HEALTH ASSOC (IHA) - WESTERN',
    cv_payerID: 'NYIHAW',
  },
  {
    payer_name: 'MVP HEALTH CARE',
    cv_payerID: 'NYMVP',
  },
  {
    payer_name: 'MVP HEALTH CARE',
    cv_payerID: 'NYMVP',
    state: 'NY',
  },
  {
    payer_name: 'OHIO BLUE SHIELD',
    cv_payerID: 'OHBCBS',
  },
  {
    payer_name: 'OHIO BLUE SHIELD',
    cv_payerID: 'OHBCBS',
  },
  {
    payer_name: 'ANTHEM OHIO MEDICAID',
    cv_payerID: 'OHBCBS',
  },
  {
    payer_name: 'OHIO MEDICAID',
    cv_payerID: 'OHCAID',
    state: 'OH',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF OHIO',
    cv_payerID: 'OHMLNA',
  },
  {
    payer_name: 'MOLINA OHIO MEDICAID',
    cv_payerID: 'OHMLNA',
  },
  {
    payer_name: 'OHIORISE - AETNA BETTER HEALTH OF OHIO',
    cv_payerID: 'OHRISE',
  },
  {
    payer_name: 'OKLAHOMA BLUE SHIELD',
    cv_payerID: 'OKBCBS',
    state: 'OK',
  },
  {
    payer_name: 'OKLAHOMA MEDICAID',
    cv_payerID: 'OKCAID',
    state: 'OK',
  },
  {
    payer_name: 'COMMUNITY CARE MANAGED HEALTHCARE PLANS OF OK',
    cv_payerID: 'OKCMCR',
  },
  {
    payer_name: 'SENTARA HEALTH PLAN',
    cv_payerID: 'OPTSNT',
  },
  {
    payer_name: 'OREGON MEDICAID',
    cv_payerID: 'ORCAID',
    state: 'OR',
  },
  {
    payer_name: 'HEALTH SHARE OF OREGON (MENTAL HEALTH)',
    cv_payerID: 'ORHSM',
  },
  {
    payer_name: 'OREGON BLUE SHIELD REGENCE',
    cv_payerID: 'ORRBCS',
    state: 'OR',
  },
  {
    payer_name: 'OSCAR HEALTH',
    cv_payerID: 'OSCAR',
  },
  {
    payer_name: 'TRICARE OVERSEAS PROGRAM',
    cv_payerID: 'OVRSEA',
  },
  {
    payer_name: 'OXFORD HEALTH PLANS',
    cv_payerID: 'OXFORD',
  },
  {
    payer_name: 'PENNSYLVANIA BLUE SHIELD',
    cv_payerID: 'PABCBS',
    state: 'PA',
  },
  {
    payer_name: 'PENNSYLVANIA BLUE SHIELD CLARITY VISION',
    cv_payerID: 'PABCBS',
    state: 'PA',
  },
  {
    payer_name: 'PENNSYLVANIA FREEDOM BLUE MEDICARE ADVANTAGE',
    cv_payerID: 'PABCBS',
  },
  {
    payer_name: 'PENNSYLVANIA MEDICAID',
    cv_payerID: 'PACAID',
    state: 'PA',
  },
  {
    payer_name: 'CAPITAL BLUE CROSS - FACILITY CONTRACTED PROVIDERS',
    cv_payerID: 'PACAPB',
    state: 'PA',
  },
  {
    payer_name: 'CAPITAL BLUE CROSS - PHYSICIAN CONTRACTED PROVIDER',
    cv_payerID: 'PACAPB',
  },
  {
    payer_name: 'PENNSYLVANIA INDEPENDENCE BLUE CROSS',
    cv_payerID: 'PAIBCE',
    state: 'PA',
  },
  {
    payer_name: 'AMERIHEALTH NEW JERSEY/DELAWARE - HMO',
    cv_payerID: 'PAIBCE',
  },
  {
    payer_name: 'PENNSYLVANIA INDEPENDENCE AMERIHEALTH DE PPO',
    cv_payerID: 'PAIBCE',
  },
  {
    payer_name: 'PENNSYLVANIA INDEPENDENCE AMERIHEALTH NJ PPO',
    cv_payerID: 'PAIBCE',
  },
  {
    payer_name: 'KEYSTONE EAST HMO',
    cv_payerID: 'PAIBCE',
  },
  {
    payer_name: 'SUMMIT COMMUNITY CARE',
    cv_payerID: 'PASSE',
  },
  {
    payer_name: 'PIEDMONT COMMUNITY HEALTH PLAN',
    cv_payerID: 'PDMTHP',
  },
  {
    payer_name: 'PLAN DE SALUD HOSPITAL MENONITA',
    cv_payerID: 'PDSHM',
  },
  {
    payer_name: 'PUBLIC EMPLOYEE HEALTH PLAN (PEHP)',
    cv_payerID: 'PEHP',
  },
  {
    payer_name: 'PEOPLES HEALTH NETWORK',
    cv_payerID: 'PEOPLE',
  },
  {
    payer_name: 'PERFORMCARE',
    cv_payerID: 'PFMCR',
  },
  {
    payer_name: 'PROVIDENCE HEALTH ASSURANCE MEDICAID AFTER 123120',
    cv_payerID: 'PHAMCD',
  },
  {
    payer_name: 'PROVIDENCE HEALTH ASSURANCE MEDICARE SUPPLEMENT',
    cv_payerID: 'PHAMCR',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS FLORIDA',
    cv_payerID: 'PHCMCO',
  },
  {
    payer_name: 'PHYSICIANS HEALTH PLAN MID-MICHIGAN / PHP',
    cv_payerID: 'PHPMI',
  },
  {
    payer_name: 'PHYSICIANS HEALTH PLAN OF MICHIGAN MEDICARE',
    cv_payerID: 'PHPMIM',
  },
  {
    payer_name: 'PHYSICIAN HEALTH PLAN OF NORTHERN INDIANA - PHP',
    cv_payerID: 'PHPNI',
  },
  {
    payer_name: 'PROMINENCE HEALTH PLAN OF NEVADA',
    cv_payerID: 'PHPNV',
  },
  {
    payer_name: 'PHYSICIANS MUTUAL INSURANCE COMPANY',
    cv_payerID: 'PHYSMT',
  },
  {
    payer_name: 'PERSONAL INSURANCE ADMINISTRATORS',
    cv_payerID: 'PIADMN',
  },
  {
    payer_name: 'PREFERRED MEDICARE CHOICE (PMC)',
    cv_payerID: 'PMC',
  },
  {
    payer_name: 'PREFERRED MEDICARE CHOICE (REFORM)',
    cv_payerID: 'PMCHOR',
  },
  {
    payer_name: 'PAN-AMERICAN LIFE INSURANCE COMPANY',
    cv_payerID: 'PNAIC',
  },
  {
    payer_name: 'PREFERRED ONE OF MINNESOTA',
    cv_payerID: 'PRFONE',
  },
  {
    payer_name: 'PROMINENCE HEALTHFIRST OF FLORIDA',
    cv_payerID: 'PRHFFL',
  },
  {
    payer_name: 'PRIORITY HEALTH OF MICHIGAN',
    cv_payerID: 'PRIRTY',
  },
  {
    payer_name: 'PARKLAND COMMUNITY HEALTH PLAN',
    cv_payerID: 'PRKLND',
  },
  {
    payer_name: 'PARAMOUNT',
    cv_payerID: 'PRMNT',
    state: 'OH',
  },
  {
    payer_name: 'PRIME WEST',
    cv_payerID: 'PRMWST',
  },
  {
    payer_name: 'PROVIDENCE HEALTH PLAN',
    cv_payerID: 'PROVHP',
    state: 'OR',
  },
  {
    payer_name: 'PROVIDENCE HEALTH PLAN',
    cv_payerID: 'PROVHP',
  },
  {
    payer_name: 'TRIPLE-S ADVANVTAGE',
    cv_payerID: 'PRSSA',
  },
  {
    payer_name: 'TRIPLE-S SALUD',
    cv_payerID: 'PRSSS',
  },
  {
    payer_name: 'PARTNERSHIP HEALTHPLAN OF CALIFORNIA',
    cv_payerID: 'PRTHP',
  },
  {
    payer_name: 'PROVIDENCE PACE CA',
    cv_payerID: 'PRVPCA',
  },
  {
    payer_name: 'PACIFICSOURCE COMMUNITY HEALTH SOLUTIONS',
    cv_payerID: 'PSCSOL',
  },
  {
    payer_name: 'PACIFICSOURCE HEALTH PLANS',
    cv_payerID: 'PSHLTH',
  },
  {
    payer_name: 'PACIFICSOURCE ADMINISTRATORS (PSA)',
    cv_payerID: 'PSHLTH',
  },
  {
    payer_name: 'PACIFICSOURCE MEDICARE',
    cv_payerID: 'PSMED',
  },
  {
    payer_name: 'PASSPORT ADVANTAGE',
    cv_payerID: 'PSPRT',
  },
  {
    payer_name: 'QUIKTRIP CORPORATION',
    cv_payerID: 'QTCORP',
  },
  {
    payer_name: 'QUARTZ ASO',
    cv_payerID: 'QUARTZ',
  },
  {
    payer_name: 'QUALCHOICE OF ARKANSAS',
    cv_payerID: 'QUCHO',
    state: 'AR',
  },
  {
    payer_name: 'RESERVE NATIONAL INSURANCE',
    cv_payerID: 'RESNI',
  },
  {
    payer_name: 'REGENCE GROUP ADMINISTRATORS',
    cv_payerID: 'RGADM',
  },
  {
    payer_name: 'RHODE ISLAND BLUE SHIELD',
    cv_payerID: 'RIBCBS',
    state: 'RI',
  },
  {
    payer_name: 'RHODE ISLAND BLUE SHIELD',
    cv_payerID: 'RIBCBS',
    state: 'RI',
  },
  {
    payer_name: 'NEIGHBORHOOD HEALTH PLAN OF RHODE ISLAND',
    cv_payerID: 'RINHP',
  },
  {
    payer_name: 'ROCKY MOUNTAIN HMO',
    cv_payerID: 'RKYMHP',
    state: 'CO',
  },
  {
    payer_name: 'TRANSACTRX INFUSION AND SPECIALTY',
    cv_payerID: 'RXINF',
  },
  {
    payer_name: 'TRANSACTRX PART D',
    cv_payerID: 'RXPTD',
  },
  {
    payer_name: 'SCOTT AND WHITE HEALTH PLAN',
    cv_payerID: 'SAWHP',
  },
  {
    payer_name: 'SOUTH CAROLINA BLUE SHIELD',
    cv_payerID: 'SCBCBS',
    state: 'SC',
  },
  {
    payer_name: 'SOUTH CAROLINA BLUE SHIELD',
    cv_payerID: 'SCBCBS',
  },
  {
    payer_name: 'SOUTH CAROLINA MEDICAID',
    cv_payerID: 'SCCAID',
    state: 'SC',
  },
  {
    payer_name: 'SANTA CLARA FAMILY HEALTH PLAN',
    cv_payerID: 'SCFHP',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF NEW YORK',
    cv_payerID: 'SCHCTC',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF SOUTH CAROLINA',
    cv_payerID: 'SCMLNA',
  },
  {
    payer_name: 'SCAN HEALTH PLAN',
    cv_payerID: 'SCNHMO',
  },
  {
    payer_name: 'FIRST CHOICE BY SELECT HEALTH OF SOUTH CAROLINA',
    cv_payerID: 'SCSLHT',
    state: 'SC',
  },
  {
    payer_name: 'SOUTH DAKOTA MEDICAID',
    cv_payerID: 'SDCAID',
    state: 'SD',
  },
  {
    payer_name: 'SECURITY HEALTH PLAN',
    cv_payerID: 'SECHP',
  },
  {
    payer_name: 'SELMAN AND COMPANY',
    cv_payerID: 'SELMN',
  },
  {
    payer_name: 'SAN FRANCISCO HEALTH PLAN',
    cv_payerID: 'SFHP',
  },
  {
    payer_name: 'SHARP HEALTH PLAN',
    cv_payerID: 'SHARP',
  },
  {
    payer_name: 'SHARED HEALTH MISSISSIPPI',
    cv_payerID: 'SHTMS',
  },
  {
    payer_name: 'SIERRA HEALTH SERVICES, INC. (CLAIMS)',
    cv_payerID: 'SIERA',
  },
  {
    payer_name: 'SIHO INSURANCE SERVICES',
    cv_payerID: 'SIHO',
    state: 'IN',
  },
  {
    payer_name: 'SISCO',
    cv_payerID: 'SISCO',
  },
  {
    payer_name: 'HEALTH PLAN OF SAN JOAQUIN',
    cv_payerID: 'SJHP',
  },
  {
    payer_name: 'STANDARD LIFE AND ACCIDENT INS CO-SECONDARY CLAIMS',
    cv_payerID: 'SLAICO',
  },
  {
    payer_name: 'SIMPLY HEALTHCARE PLANS, INC.',
    cv_payerID: 'SMPLH',
  },
  {
    payer_name: 'SANFORD HEALTH PLAN',
    cv_payerID: 'SNFDHP',
  },
  {
    payer_name: 'SENTINEL SECURITY LIFE',
    cv_payerID: 'SSLCO',
  },
  {
    payer_name: 'UNITEDHEALTHCARE STUDENT RESOURCES',
    cv_payerID: 'STDNT',
  },
  {
    payer_name: 'STATE FARM INSURANCE COMPANIES',
    cv_payerID: 'STFARM',
  },
  {
    payer_name: 'PROMINENCE HEALTH PLAN PPO/HMO',
    cv_payerID: 'STMRH',
  },
  {
    payer_name: 'PROMINENCE HEALTH PLAN OF TEXAS',
    cv_payerID: 'STMRHT',
  },
  {
    payer_name: 'SUMMACARE HEALTH PLAN',
    cv_payerID: 'SUMCHP',
  },
  {
    payer_name: 'SUTTER AND AETNA INSURANCE COMPANY',
    cv_payerID: 'SUTAET',
  },
  {
    payer_name: 'ST. VINCENT CATHOLIC MEDICAL CENTER NEW YORK',
    cv_payerID: 'SVMNY',
  },
  {
    payer_name: 'SENIOR WHOLE HEALTH OF MASSACHUSETTS',
    cv_payerID: 'SWHMA',
  },
  {
    payer_name: 'SENIOR WHOLE HEALTH NEW YORK',
    cv_payerID: 'SWHNY',
  },
  {
    payer_name: 'TRANSAMERICA PREMIER LIFE INSURANCE COMPANY',
    cv_payerID: 'TALI',
    state: 'IA',
  },
  {
    payer_name: 'THRIVENT FINANCIAL',
    cv_payerID: 'THRVNT',
  },
  {
    payer_name: 'THRIVENT FINANCIAL AID ASSOC FOR LUTHERAN MEDICARE',
    cv_payerID: 'THRVNT',
  },
  {
    payer_name: 'THRIVENT FINANCIAL LUTHERAN BROTHERHOOD MEDICARE',
    cv_payerID: 'THRVNT',
  },
  {
    payer_name: 'TENNESSEE BLUE SHIELD',
    cv_payerID: 'TNBCBS',
    state: 'TN',
  },
  {
    payer_name: 'TENNESSEE BLUECARE/TENNCARE',
    cv_payerID: 'TNCAID',
  },
  {
    payer_name: 'TRICARE FOR LIFE',
    cv_payerID: 'TRCRU',
  },
  {
    payer_name: 'TRICARE - WEST REGION',
    cv_payerID: 'TRICAR',
  },
  {
    payer_name: 'TRICARE - EAST REGION',
    cv_payerID: 'TRICRE',
  },
  {
    payer_name: 'TRUSTMARK SMALL BUSINESS BENEFITS',
    cv_payerID: 'TRSMRK',
  },
  {
    payer_name: 'TRUE HEALTH NEW MEXICO',
    cv_payerID: 'TRUNM',
  },
  {
    payer_name: 'TEST MED',
    cv_payerID: 'TSTMED',
  },
  {
    payer_name: 'TEST MHS',
    cv_payerID: 'TSTMHS',
  },
  {
    payer_name: 'TUFTS ASSOCIATED HEALTH PLAN',
    cv_payerID: 'TUFTS',
  },
  {
    payer_name: 'TEXAS BLUE SHIELD',
    cv_payerID: 'TXBCBS',
    state: 'TX',
  },
  {
    payer_name: 'TEXAS BLUE SHIELD',
    cv_payerID: 'TXBCBS',
    state: 'TX',
  },
  {
    payer_name: 'TEXAS MEDICAID',
    cv_payerID: 'TXCAID',
    state: 'TX',
  },
  {
    payer_name: 'TEXAS CHILDRENS HEALTH PLAN - CHIP',
    cv_payerID: 'TXCHIP',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF TEXAS',
    cv_payerID: 'TXMLNA',
  },
  {
    payer_name: 'MEDICA HEALTH PLAN',
    cv_payerID: 'UHC',
    state: 'MN',
  },
  {
    payer_name: 'MEDICA HEALTH PLAN',
    cv_payerID: 'UHC',
  },
  {
    payer_name: 'PREFERRED CARE PARTNERS',
    cv_payerID: 'UHC',
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cv_payerID: 'UHC',
    state: 'AR',
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cv_payerID: 'UHC',
    state: 'MO',
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cv_payerID: 'UHC',
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cv_payerID: 'UHC',
    state: 'GA',
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cv_payerID: 'UHC',
    state: 'WA',
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cv_payerID: 'UHC',
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cv_payerID: 'UHC',
    state: 'FL',
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cv_payerID: 'UHC',
    state: 'SC',
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cv_payerID: 'UHC',
    state: 'TX',
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cv_payerID: 'UHC',
    state: 'OH',
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cv_payerID: 'UHC',
    state: 'WI',
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cv_payerID: 'UHC',
    state: 'KY',
  },
  {
    payer_name: 'UNITEDHEALTHCARE ARIZONA PHYSICIANS IPA',
    cv_payerID: 'UHC',
  },
  {
    payer_name: 'MEDICA HEALTHCARE PLAN OF FLORIDA',
    cv_payerID: 'UHC',
  },
  {
    payer_name: 'UNITEDHEALTHCARE WEST - PACIFICARE OF WASHINGTON',
    cv_payerID: 'UHC',
  },
  {
    payer_name: 'UNITEDHEALTHCARE OHIO MEDICAID',
    cv_payerID: 'UHC',
  },
  {
    payer_name: 'UNITEDHEALTHCARE OHIO MEDICAID VISION',
    cv_payerID: 'UHC',
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN OF MICHIGAN',
    cv_payerID: 'UHCGLH',
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN OF MISSOURI',
    cv_payerID: 'UHCMO',
  },
  {
    payer_name: 'ULTIMATE HEALTH PLANS',
    cv_payerID: 'ULTHP',
  },
  {
    payer_name: 'UNITED MEDICAL RESOURCES',
    cv_payerID: 'UMRWAU',
  },
  {
    payer_name: 'HEALTHCHOICE OKLAHOMA',
    cv_payerID: 'UMRWAU',
  },
  {
    payer_name: 'OKLAHOMA DEPARTMENT OF CORRECTIONS',
    cv_payerID: 'UMRWAU',
  },
  {
    payer_name: 'UMWA HEALTH AND RETIREMENT FUNDS',
    cv_payerID: 'UMWA',
  },
  {
    payer_name: 'UNICARE (TX, MA, KS, WV, RI, IL)',
    cv_payerID: 'UNICAR',
  },
  {
    payer_name: 'UNIVERSITY HEALTHCARE MARKETPLACE',
    cv_payerID: 'UNIVAZ',
  },
  {
    payer_name: 'UNIVERA',
    cv_payerID: 'UNIVNY',
  },
  {
    payer_name: 'UNIVERA',
    cv_payerID: 'UNIVNY',
    state: 'NY',
  },
  {
    payer_name: 'UNITED AMERICAN INSURANCE COMPANY',
    cv_payerID: 'UNTDA',
  },
  {
    payer_name: 'OPTUMHEALTH CARE SOLUTIONS',
    cv_payerID: 'UNTDRN',
  },
  {
    payer_name: 'UNIVERSITY OF UTAH HEALTH PLAN',
    cv_payerID: 'UNUTHP',
    state: 'UT',
  },
  {
    payer_name: 'UNIVERSITY OF UTAH HEALTH PLAN',
    cv_payerID: 'UNUTHP',
    state: 'MT',
  },
  {
    payer_name: 'UPMC HEALTH PLAN',
    cv_payerID: 'UPMC',
    state: 'PA',
  },
  {
    payer_name: 'IRON ROAD HEALTHCARE',
    cv_payerID: 'UPREHS',
  },
  {
    payer_name: 'USAA (U.S. AUTOMOBILE ASSOCIATION)',
    cv_payerID: 'USALCO',
  },
  {
    payer_name: 'UTAH MEDICAID',
    cv_payerID: 'UTCAID',
    state: 'UT',
  },
  {
    payer_name: 'UTAH BLUE SHIELD - FEP',
    cv_payerID: 'UTFEPP',
    state: 'UT',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF UTAH',
    cv_payerID: 'UTMLNA',
    state: 'UT',
  },
  {
    payer_name: 'UTAH REGENCE BLUE CROSS BLUE SHIELD',
    cv_payerID: 'UTREBS',
    state: 'UT',
  },
  {
    payer_name: 'SELECTHEALTH',
    cv_payerID: 'UTSLHT',
  },
  {
    payer_name: 'VIRGINIA BLUE SHIELD',
    cv_payerID: 'VABCBS',
    state: 'VA',
  },
  {
    payer_name: 'VIRGINIA MEDICAID',
    cv_payerID: 'VACAID',
    state: 'VA',
  },
  {
    payer_name: 'VIRGINIA MEDICAID LAB',
    cv_payerID: 'VACAID',
    state: 'VA',
  },
  {
    payer_name: 'VETERANS AFFAIRS COMMUNITY CARE NETWORK RGN 1 2 3',
    cv_payerID: 'VAFEE',
  },
  {
    payer_name: 'CARELON BEHAVIORAL HEALTH',
    cv_payerID: 'VALOP',
  },
  {
    payer_name: 'VANTAGE HEALTH PLAN',
    cv_payerID: 'VANTAG  ',
  },
  {
    payer_name: 'VETERANS ADMINISTRATION FEE BASIS PROGRAMS',
    cv_payerID: 'VETFBP',
  },
  {
    payer_name: 'CHAMPVA - HAC',
    cv_payerID: 'VETHAC',
  },
  {
    payer_name: 'VIBRA HEALTH PLAN',
    cv_payerID: 'VIBRA',
  },
  {
    payer_name: 'VIVA HEALTH CARE AND VIVA MEDICARE',
    cv_payerID: 'VIVAHL',
  },
  {
    payer_name: 'VNS HEALTH',
    cv_payerID: 'VNSNY',
  },
  {
    payer_name: 'VERMONT BLUE SHIELD',
    cv_payerID: 'VTBCBS',
    state: 'VT',
  },
  {
    payer_name: 'VERMONT MEDICAID',
    cv_payerID: 'VTCAID',
    state: 'VT',
  },
  {
    payer_name: 'WASHINGTON MEDICAID',
    cv_payerID: 'WACAID',
    state: 'WA',
  },
  {
    payer_name: 'COMMUNITY HEALTH PLAN OF WASHINGTON (CHPWA)',
    cv_payerID: 'WACHP',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF WASHINGTON',
    cv_payerID: 'WAMLNA',
  },
  {
    payer_name: 'LIFEWISE HEALTHPLAN OF OREGON',
    cv_payerID: 'WAPBC',
  },
  {
    payer_name: 'BLUE CROSS WA/AK PREMERA BLUE CROSS',
    cv_payerID: 'WAPBCS',
    state: 'WA',
  },
  {
    payer_name: 'BLUE CROSS WA/AK PREMERA BLUE CROSS',
    cv_payerID: 'WAPBCS',
    state: 'AK',
  },
  {
    payer_name: 'BLUE CROSS WA/AK PREMERA BLUE CROSS',
    cv_payerID: 'WAPBCS',
  },
  {
    payer_name: 'WASHINGTON REGENCE BLUE SHIELD',
    cv_payerID: 'WARBCS',
    state: 'WA',
  },
  {
    payer_name: 'WEBTPA',
    cv_payerID: 'WEBTPA',
  },
  {
    payer_name: 'WELLCARE HEALTH PLANS',
    cv_payerID: 'WELLCR',
  },
  {
    payer_name: 'CARE1ST HEALTH PLAN AZ MEDICAID DOS BEFORE 12/1/22',
    cv_payerID: 'WELLCR',
  },
  {
    payer_name: 'CARE1ST HEALTH PLAN OF ARIZONA MEDICARE',
    cv_payerID: 'WELLCR',
  },
  {
    payer_name: 'WISCONSIN BLUE SHIELD',
    cv_payerID: 'WIBCBS',
    state: 'WI',
  },
  {
    payer_name: 'WISCONSIN BLUE SHIELD',
    cv_payerID: 'WIBCBS',
    state: 'WI',
  },
  {
    payer_name: 'WISCONSIN MEDICAID',
    cv_payerID: 'WICAID',
    state: 'WI',
  },
  {
    payer_name: 'WISCONSIN CHRONIC DISEASE PROGRAM',
    cv_payerID: 'WICDP',
  },
  {
    payer_name: 'WISCONSIN WELL WOMENS PROGRAM',
    cv_payerID: 'WIWWP',
  },
  {
    payer_name: 'WPS COMERCIAL / REGULAR BUSINESS',
    cv_payerID: 'WPSCR',
    state: 'WI',
  },
  {
    payer_name: 'WPS COMERCIAL / REGULAR BUSINESS',
    cv_payerID: 'WPSCR',
  },
  {
    payer_name: 'WESTERN HEALTH ADVANTAGE',
    cv_payerID: 'WSTHA',
  },
  {
    payer_name: 'WESTERN SOUTHERN LIFE GROUP',
    cv_payerID: 'WSTSL',
  },
  {
    payer_name: 'WEST VIRGINIA FREEDOM BLUE MEDICARE ADVANTAGE',
    cv_payerID: 'WVBCBS',
    state: 'WV',
  },
  {
    payer_name: 'WEST VIRGINIA HIGHMARK BLUE CROSS BLUE SHIELD',
    cv_payerID: 'WVBCBS',
    state: 'WV',
  },
  {
    payer_name: 'WEST VIRGINIA MEDICAID',
    cv_payerID: 'WVCAID',
    state: 'WV',
  },
  {
    payer_name: 'WYOMING BLUE SHIELD',
    cv_payerID: 'WYBCBP',
    state: 'WY',
  },
  {
    payer_name: 'WYOMING MEDICAID',
    cv_payerID: 'WYCAID',
    state: 'WY',
  },
  {
    payer_name: 'ZING HEALTH',
    cv_payerID: 'ZINGIL',
  },
  {
    payer_name: 'DEMO PAYER',
    cv_payerID: 'ZZ5010',
    state: 'MA',
  },
];
let onlyCVInstitutionalRawArray = [
  {
    payer_name: '1199SEIU FAMILY OF FUNDS',
    cv_payerID: '1199NB',
  },
  {
    payer_name: 'MINNESOTA BLUE CROSS',
    cv_payerID: 1402,
  },
  {
    payer_name: 'MINNESOTA MEDICAID',
    cv_payerID: 1468,
    State: 'MN',
  },
  {
    payer_name: 'AARP',
    cv_payerID: 'AARP',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF CALIFORNIA',
    cv_payerID: 'ABHCA',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF FLORIDA',
    cv_payerID: 'ABHFL',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF ILLINOIS - MMAI',
    cv_payerID: 'ABHILL',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF ILLINOIS - MEDICAID',
    cv_payerID: 'ABHILL',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF KANSAS',
    cv_payerID: 'ABHKS',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF LOUISIANA',
    cv_payerID: 'ABHLA',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF MARYLAND',
    cv_payerID: 'ABHMD',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF MICHIGAN',
    cv_payerID: 'ABHMI',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF NEW JERSEY',
    cv_payerID: 'ABHNJ',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF NEW YORK',
    cv_payerID: 'ABHNY',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF OHIO',
    cv_payerID: 'ABHOH',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF PENNSYLVANIA',
    cv_payerID: 'ABHPA',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF TEXAS',
    cv_payerID: 'ABHTX',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF TEXAS',
    cv_payerID: 'ABHTX',
    State: 'TX',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF WEST VIRGINIA',
    cv_payerID: 'ABHWV',
  },
  {
    payer_name: 'ABLEPAY HEALTH',
    cv_payerID: 'ABLPY',
  },
  {
    payer_name: 'AUTOMATED BENEFIT SERVICES',
    cv_payerID: 'ABSERV',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS NEXT VIP',
    cv_payerID: 'ACNDE',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS NEXT FLORIDA',
    cv_payerID: 'ACNFL',
  },
  {
    payer_name: 'FIRST CHOICE NEXT SOUTH CAROLINA',
    cv_payerID: 'ACNSC',
  },
  {
    payer_name: 'ACS BENEFIT SERVICES, INC.',
    cv_payerID: 'ACSBE',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS VIP CARE - DELAWARE DSNP',
    cv_payerID: 'ACVDE',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS VIP CARE - FLORIDA DSNP',
    cv_payerID: 'ACVFL',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS VIP CARE PLUS MICHIGAN',
    cv_payerID: 'ACVMI',
  },
  {
    payer_name: 'ADMINISTRATIVE CONCEPTS',
    cv_payerID: 'ADMCON',
  },
  {
    payer_name: 'ADMINISTRATIVE SERVICES INC.',
    cv_payerID: 'ADMINS',
  },
  {
    payer_name: 'ASSOCIATION DE MAESTROS PUERTO RICO',
    cv_payerID: 'ADMPR',
  },
  {
    payer_name: 'AETNA',
    cv_payerID: 'AETNA',
  },
  {
    payer_name: 'AFLAC COMMERCIAL',
    cv_payerID: 'AFLCOM',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS DISTRICT OF COLUMBIA',
    cv_payerID: 'AHCDC',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS DELAWARE',
    cv_payerID: 'AHCDE',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS NEXT NORTH CAROLINA',
    cv_payerID: 'AHCNC',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS NORTHEAST DOS BEFORE 01/01/21',
    cv_payerID: 'AHCNE',
  },
  {
    payer_name: 'ALASKA MEDICAID',
    cv_payerID: 'AKMCD',
    State: 'AK',
  },
  {
    payer_name: 'ALABAMA BLUE CROSS',
    cv_payerID: 'ALBCSI',
    State: 'AL',
  },
  {
    payer_name: 'ALLIED BENEFIT SYSTEM',
    cv_payerID: 'ALBENS',
  },
  {
    payer_name: 'ALABAMA MEDICAID - INPATIENT',
    cv_payerID: 'ALCAID',
    State: 'AL',
  },
  {
    payer_name: 'ALABAMA MEDICAID',
    cv_payerID: 'ALCAID',
    State: 'AL',
  },
  {
    payer_name: 'ALLEGIANCE BENEFIT PLAN MANAGEMENT INC.',
    cv_payerID: 'ALLBE',
  },
  {
    payer_name: 'ALLIANT HEALTH PLANS OF GEORGIA',
    cv_payerID: 'ALLIHP',
  },
  {
    payer_name: 'ALOHACARE',
    cv_payerID: 'ALOHA',
  },
  {
    payer_name: 'ALBUQUERQUE PUBLIC SCHOOLS',
    cv_payerID: 'ALPBS',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS VIP CARE PA COMMHEALTHCHOICES',
    cv_payerID: 'AMCHC',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS VIP CARE PA COMMHEALTHCHOICES',
    cv_payerID: 'AMCVC',
  },
  {
    payer_name: 'AMERIBEN SOLUTIONS, INC.',
    cv_payerID: 'AMERBN',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS OHIO',
    cv_payerID: 'AMEROH',
  },
  {
    payer_name: 'HEALTHY BLUE LOUISIANA',
    cv_payerID: 'AMGRLA',
  },
  {
    payer_name: 'AMERIHEALTH ADMINISTRATORS',
    cv_payerID: 'AMHADM',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS PENNSYLVANIA',
    cv_payerID: 'AMHLTH',
  },
  {
    payer_name: 'UNITEDHEALTHCARE LIFE INSURANCE COMPANY',
    cv_payerID: 'AMMEDS',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS NORTH CAROLINA ',
    cv_payerID: 'AMNCN',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS NEW HAMPSHIRE',
    cv_payerID: 'AMNHP',
  },
  {
    payer_name: 'AMERICAN NATIONAL INSURANCE COMPANY (ANICO)',
    cv_payerID: 'AMNIC',
  },
  {
    payer_name: 'AMERICAN POSTAL WORKERS UNION',
    cv_payerID: 'AMPWU',
  },
  {
    payer_name: 'AMERIGROUP',
    cv_payerID: 'AMRGRP',
  },
  {
    payer_name: 'AMERICAN REPUBLIC INSURANCE (MAP)',
    cv_payerID: 'AMRREP',
  },
  {
    payer_name: 'ANGLE HEALTH',
    cv_payerID: 'ANGLE',
  },
  {
    payer_name: 'MUTUAL HEALTH SERVICES',
    cv_payerID: 'ANTAR',
  },
  {
    payer_name: 'ANTHEM MAINEHEALTH',
    cv_payerID: 'ANTHME',
  },
  {
    payer_name: 'APEXHEALTH',
    cv_payerID: 'APXHL',
  },
  {
    payer_name: 'ARKANSAS BLUE CROSS',
    cv_payerID: 'ARBCBS',
    State: 'AR',
  },
  {
    payer_name: 'ARKANSAS BLUE CROSS',
    cv_payerID: 'ARBCBS',
  },
  {
    payer_name: 'ARKANSAS MEDICAID',
    cv_payerID: 'ARCAID',
    State: 'AR',
  },
  {
    payer_name: 'ARCHBOLD MEDICAL CENTER HEALTH PLAN',
    cv_payerID: 'ARCHB',
  },
  {
    payer_name: 'ARMADACARE',
    cv_payerID: 'ARMADA',
  },
  {
    payer_name: 'ASPIRE HEALTH PLAN',
    cv_payerID: 'ASPHPL',
  },
  {
    payer_name: 'ASPIRUS MEDICARE ADVANTAGE',
    cv_payerID: 'ASPRS',
  },
  {
    payer_name: 'ASURIS NORTHWEST REGENCE',
    cv_payerID: 'ASURNH',
  },
  {
    payer_name: 'AETNA SSI',
    cv_payerID: 'ATNSSI',
  },
  {
    payer_name: 'AULTCARE ',
    cv_payerID: 'AULTCR',
  },
  {
    payer_name: 'AVMED, INC.',
    cv_payerID: 'AVMED',
  },
  {
    payer_name: 'AGEWELL NEW YORK',
    cv_payerID: 'AWLLNY',
  },
  {
    payer_name: 'ARIZONA BLUE CROSS',
    cv_payerID: 'AZBCBS',
    State: 'AZ',
  },
  {
    payer_name: 'ARIZONA MEDICAID',
    cv_payerID: 'AZCAID',
    State: 'AZ',
  },
  {
    payer_name: 'HEALTH CHOICE ARIZONA',
    cv_payerID: 'AZHLCH',
  },
  {
    payer_name: 'MERCY CARE PLAN',
    cv_payerID: 'AZMCP',
  },
  {
    payer_name: 'BAYCARE PLUS MEDICARE ADVANTAGE',
    cv_payerID: 'BAYCR',
  },
  {
    payer_name: 'BLUE CROSS COMPLETE OF MICHIGAN',
    cv_payerID: 'BCCMI',
  },
  {
    payer_name: 'BLUE CROSS COMMUNITY HEALTH PLANS',
    cv_payerID: 'BCCOM',
  },
  {
    payer_name: 'BRIDGESPAN',
    cv_payerID: 'BDSPH',
  },
  {
    payer_name: 'CARELON BEHAVIORAL HEALTH, MBHP',
    cv_payerID: 'BHOMA',
  },
  {
    payer_name: 'BEHAVIORAL HEALTH SYSTEMS',
    cv_payerID: 'BHRHS',
  },
  {
    payer_name: 'SUREST',
    cv_payerID: 'BIND ',
  },
  {
    payer_name: 'BANKERS FIDELITY',
    cv_payerID: 'BKFID',
  },
  {
    payer_name: 'BLUE CROSS MEDICARE ADVANTAGE PPO/HMO',
    cv_payerID: 'BLMADV',
  },
  {
    payer_name: 'BLUE MEDICARE ADVANTAGE',
    cv_payerID: 'BMADV',
  },
  {
    payer_name: 'BANNER MEDICARE ADVANTAGE PRIME HMO (BMAH)',
    cv_payerID: 'BMAHMO ',
  },
  {
    payer_name: 'BANNER MEDICARE ADVANTAGE PLUS PPO (BMAP)',
    cv_payerID: 'BMAPP',
  },
  {
    payer_name: 'WELLSENSE HEALTH PLAN',
    cv_payerID: 'BMCHLT',
  },
  {
    payer_name: 'WELLSENSE HEALTH PLAN',
    cv_payerID: 'BMCHLT',
    State: 'NH',
  },
  {
    payer_name: 'BOON CHAPMAN ADMINISTRATORS',
    cv_payerID: 'BNCHAP',
  },
  {
    payer_name: 'BENEFIT MANAGEMENT OF KANSAS',
    cv_payerID: 'BNMGT',
  },
  {
    payer_name: 'BOON GROUP (THE)',
    cv_payerID: 'BOONGR',
  },
  {
    payer_name: 'BRAVEN HEALTH',
    cv_payerID: 'BRAVEN',
  },
  {
    payer_name: 'BRIGHT HEALTHCARE',
    cv_payerID: 'BRIGHT',
  },
  {
    payer_name: 'BROKERAGE CONCEPTS',
    cv_payerID: 'BRKRG',
  },
  {
    payer_name: 'BANNER UNIVERSITY FAMILY CARE (UNIVER OF AZ HLTH)',
    cv_payerID: 'BUFCR',
  },
  {
    payer_name: 'BCBS OF WESTERN NEW YORK MEDICAID / CHP',
    cv_payerID: 'BWNYMC',
  },
  {
    payer_name: 'ANTHEM BLUE CROSS CALIFORNIA',
    cv_payerID: 'CABC',
  },
  {
    payer_name: 'ANTHEM BLUE CROSS CALIFORNIA',
    cv_payerID: 'CABC',
    State: 'CA',
  },
  {
    payer_name: 'BLUE SHIELD OF CALIFORNIA PROMISE HEALTH PLAN',
    cv_payerID: 'CABS',
    State: 'CA',
  },
  {
    payer_name: 'CALIFORNIA BLUE SHIELD - HMO ENCOUNTERS',
    cv_payerID: 'CABS',
    State: 'CA',
  },
  {
    payer_name: 'CALIFORNIA BLUE SHIELD',
    cv_payerID: 'CABS',
    State: 'CA',
  },
  {
    payer_name: 'CALIFORNIA MEDI-CAL',
    cv_payerID: 'CACAID',
    State: 'CA',
  },
  {
    payer_name: 'CENCAL HEALTH (FORMERLY SBRHA)',
    cv_payerID: 'CACAID',
    State: 'CA',
  },
  {
    payer_name: 'NEVADA MEDICAID',
    cv_payerID: 'CAIDNV',
    State: 'NV',
  },
  {
    payer_name: 'CAL OPTIMA DIRECT',
    cv_payerID: 'CALOP',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF CALIFORNIA',
    cv_payerID: 'CAMLNA',
    State: 'CA',
  },
  {
    payer_name: 'CAPROCK HEALTH PLANS',
    cv_payerID: 'CAPROK',
  },
  {
    payer_name: 'CAPITAL HEALTH PLAN',
    cv_payerID: 'CAPTAL',
  },
  {
    payer_name: 'CARE N CARE INSURANCE CO',
    cv_payerID: 'CAREN',
  },
  {
    payer_name: 'CARPENTERS HEALTH AND WELFARE TRUST OF ST LOUIS',
    cv_payerID: 'CARHLT',
  },
  {
    payer_name: 'CARESOURCE OF GEORGIA',
    cv_payerID: 'CASGA',
  },
  {
    payer_name: 'CBA BLUE',
    cv_payerID: 'CBABLU',
    State: 'MA',
  },
  {
    payer_name: 'CBA BLUE',
    cv_payerID: 'CBABLU',
  },
  {
    payer_name: 'CHRISTIAN BROTHERS SERVICES',
    cv_payerID: 'CBSER',
  },
  {
    payer_name: 'CLEAR SPRING HEALTH',
    cv_payerID: 'CCAIL',
  },
  {
    payer_name: 'CENTRAL CALIFORNIA ALLIANCE FOR HEALTH (CCAH)',
    cv_payerID: 'CCALLH',
  },
  {
    payer_name: 'CHRISTIAN CARE MINISTRIES',
    cv_payerID: 'CCMINS',
  },
  {
    payer_name: 'CAPITAL DISTRICT PHYSICIANS HEALTH PLAN (CDPHP)',
    cv_payerID: 'CDPHP',
  },
  {
    payer_name: 'S&amp;S HEALTHCARE STRATEGIES',
    cv_payerID: 'CDSGP',
    State: 'NV',
  },
  {
    payer_name: 'PROMINENCE ADMINISTRATIVE SERVICES',
    cv_payerID: 'CDSGP',
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - FLORIDA',
    cv_payerID: 'CENPAT',
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - OHIO',
    cv_payerID: 'CENPAT',
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - INDIANA',
    cv_payerID: 'CENPAT',
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - KANSAS',
    cv_payerID: 'CENPAT',
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - GEORGIA',
    cv_payerID: 'CENPAT',
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - TEXAS',
    cv_payerID: 'CENPAT',
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - ILLINOIS',
    cv_payerID: 'CENPAT',
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - SOUTH CAROLINA',
    cv_payerID: 'CENPAT',
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - MISSOURI',
    cv_payerID: 'CENPAT',
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - AZ DOS BEFORE 10/18',
    cv_payerID: 'CENPAT',
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - WISCONSIN',
    cv_payerID: 'CENPAT',
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - MISSISSIPPI',
    cv_payerID: 'CENPAT',
  },
  {
    payer_name: 'CENTIVO ',
    cv_payerID: 'CENTV',
  },
  {
    payer_name: 'CHRISTUS HEALTH - USFHP',
    cv_payerID: 'CFMHP',
  },
  {
    payer_name: 'CAREFIRST ADMINISTRATORS / NCAS',
    cv_payerID: 'CFSAD',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF VIRGINIA',
    cv_payerID: 'CHCCN',
  },
  {
    payer_name: 'CHRISTUS HEALTH MEDICARE ADVANTAGE',
    cv_payerID: 'CHPMA',
  },
  {
    payer_name: 'CHRISTUS HEALTH PLAN HEALTH INSURANCE EXCHANGE',
    cv_payerID: 'CHPTX',
  },
  {
    payer_name: 'CIGNA HEALTH PLANS',
    cv_payerID: 'CIGNA',
  },
  {
    payer_name: 'CIGNA HEALTH PLANS',
    cv_payerID: 'CIGNA',
    State: 'AR',
  },
  {
    payer_name: 'CIGNA HEALTH PLANS',
    cv_payerID: 'CIGNA',
  },
  {
    payer_name: 'EVERNORTH BEHAVIORAL HEALTH, INC',
    cv_payerID: 'CIGNA',
  },
  {
    payer_name: 'CLEAR HEALTH ALLIANCE',
    cv_payerID: 'CLEAR',
  },
  {
    payer_name: 'COMPSYCH',
    cv_payerID: 'CMPSY',
  },
  {
    payer_name: 'PUERTO RICO MEDICARE',
    cv_payerID: 'CMSHSP',
    State: 'PR',
  },
  {
    payer_name: 'WEST VIRGINIA MEDICARE',
    cv_payerID: 'CMSHSP',
    State: 'WV',
  },
  {
    payer_name: 'MONTANA MEDICARE',
    cv_payerID: 'CMSHSP',
    State: 'MT',
  },
  {
    payer_name: 'NEVADA MEDICARE',
    cv_payerID: 'CMSHSP',
    State: 'NV',
  },
  {
    payer_name: 'DELAWARE MEDICARE',
    cv_payerID: 'CMSHSP',
    State: 'DE',
  },
  {
    payer_name: 'VERMONT MEDICARE',
    cv_payerID: 'CMSHSP',
    State: 'VT',
  },
  {
    payer_name: 'CMS MEDICARE ELIGIBILITY',
    cv_payerID: 'CMSHSP',
  },
  {
    payer_name: 'RURAL HEALTH MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'TN',
  },
  {
    payer_name: 'NEBRASKA MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'NE',
  },
  {
    payer_name: 'DISTRICT OF COLUMBIA MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'DC',
  },
  {
    payer_name: 'NORTH DAKOTA MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'ND',
  },
  {
    payer_name: 'ARKANSAS MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'AR',
  },
  {
    payer_name: 'UTAH MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'UT',
  },
  {
    payer_name: 'COLORADO MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'CO',
  },
  {
    payer_name: 'OKLAHOMA MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'OK',
  },
  {
    payer_name: 'SOUTH CAROLINA MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'SC',
  },
  {
    payer_name: 'NEW HAMPSHIRE MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'NH',
  },
  {
    payer_name: 'J5 NATIONAL PART A',
    cv_payerID: 'CMSMED',
  },
  {
    payer_name: 'IOWA MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'IA',
  },
  {
    payer_name: 'INDIANA MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'IN',
  },
  {
    payer_name: 'OHIO MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'OH',
  },
  {
    payer_name: 'CALIFORNIA MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'CA',
  },
  {
    payer_name: 'MICHIGAN MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'MI',
  },
  {
    payer_name: 'FLORIDA MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'FL',
  },
  {
    payer_name: 'NEW YORK EMPIRE MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'NY',
  },
  {
    payer_name: 'MINNESOTA MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'MN',
  },
  {
    payer_name: 'CONNECTICUT MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'CT',
  },
  {
    payer_name: 'GEORGIA MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'GA',
  },
  {
    payer_name: 'MAINE MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'ME',
  },
  {
    payer_name: 'NORTH CAROLINA MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'NC',
  },
  {
    payer_name: 'LOUISIANA MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'LA',
  },
  {
    payer_name: 'WYOMING MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'WY',
  },
  {
    payer_name: 'TEXAS MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'TX',
  },
  {
    payer_name: 'NEW JERSEY MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'NJ',
  },
  {
    payer_name: 'ILLINOIS MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'IL',
  },
  {
    payer_name: 'WISCONSIN MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'WI',
  },
  {
    payer_name: 'OREGON MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'OR',
  },
  {
    payer_name: 'KANSAS MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'KS',
  },
  {
    payer_name: 'WASHINGTON AND ALASKA MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'AK',
  },
  {
    payer_name: 'WASHINGTON AND ALASKA MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'WA',
  },
  {
    payer_name: 'TENNESSEE MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'TN',
  },
  {
    payer_name: 'MASSACHUSETTS MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'MA',
  },
  {
    payer_name: 'KENTUCKY MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'KY',
  },
  {
    payer_name: 'VIRGINIA MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'VA',
  },
  {
    payer_name: 'ARIZONA MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'AZ',
  },
  {
    payer_name: 'MARYLAND MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'MD',
  },
  {
    payer_name: 'MISSISSIPPI MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'MS',
  },
  {
    payer_name: 'ALABAMA MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'AL',
  },
  {
    payer_name: 'NEW MEXICO MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'NM',
  },
  {
    payer_name: 'HAWAII MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'HI',
  },
  {
    payer_name: 'MISSOURI MEDICARE EASTERN',
    cv_payerID: 'CMSMED',
    State: 'MO',
  },
  {
    payer_name: 'RHODE ISLAND MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'RI',
  },
  {
    payer_name: 'IDAHO MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'ID',
  },
  {
    payer_name: 'SOUTH DAKOTA MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'SD',
  },
  {
    payer_name: 'PENNSYLVANIA MEDICARE',
    cv_payerID: 'CMSMED',
    State: 'PA',
  },
  {
    payer_name: 'ARIZONA COMPLETE HEALTH',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM WESTERN SKY COMMUNITY CARE',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'WESTERN SKY COMMUNITY CARE',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'MANAGED HEALTH SERVICES - INDIANA',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'MAGNOLIA HEALTH PLAN - MISSISSIPPI',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'PEACH STATE HEALTH PLAN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'MANAGED HEALTH NETWORK',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'BUCKEYE COMMUNITY HEALTH - OHIO',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ARKANSAS TOTAL CARE',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'IOWA TOTAL CARE',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ASCENSION COMPLETE',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'NEBRASKA TOTAL CARE',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'CARE1ST HEALTH PLAN AZ MEDICAID DOS AFTER 11/30/22',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'MHS HEALTH WISCONSIN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'SUPERIOR HEALTH PLAN - TEXAS',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER OF TENNESSEE',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER FROM PENNSYLVANIA HEALTH AND WELLNESS',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'LOUISIANA HEALTH CONNECTIONS',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'HOMESTATE HEALTH PLAN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'COORDINATED CARE',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'SILVER SUMMIT HEALTH PLAN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'SUNFLOWER HEALTH PLAN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'NEW HAMPSHIRE HEALTHY FAMILIES',
    cv_payerID: 'CNTENE',
    State: 'NH',
  },
  {
    payer_name: 'SUNSHINE HEALTH ',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'CAROLINA COMPLETE HEALTH CARE',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER FROM MERIDIAN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'HEALTH NET OF CALIFORNIA - CLAIMS',
    cv_payerID: 'CNTENE',
    State: 'CA',
  },
  {
    payer_name: 'PA HEALTH AND WELLNESS',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'CALIFORNIA HEALTH AND WELLNESS',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER FROM MAGNOLIA HEALTH',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER FROM BUCKEYE COMMUNITY HEALTH PLAN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER FROM SUPERIOR HEALTH',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER FROM WELLCARE OF NEW JERSEY',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'BUCKEYE OHIO MEDICAID',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'BUCKEYE OHIO MEDICAID VISION',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'HEALTH NET OF CA, OR',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'HEALTH NET OF CA, OR',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM HEALTH NET',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM ARKANSAS HEALTH AND WELLNESS',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM SUNSHINE HEALTH',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM PEACH STATE HEALTH PLAN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM MANAGED HEALTH SERVICES',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM SUNFLOWER HEALTH PLAN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM LOUISIANA HEALTHCARE CONNECTIONS',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM MAGNOLIA HEALTH',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM HOME STATE HEALTH',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM BUCKEYE HEALTH PLAN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM PA HEALTH AND WELLNESS',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM ABSOLUTE TOTAL CARE',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM SUPERIOR HEALTHPLAN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ALLWELL FROM MANAGED HEALTH SERVICES HEALTH WI',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ABSOLUTE TOTAL CARE',
    cv_payerID: 'CNTENE',
    State: 'SC',
  },
  {
    payer_name: 'ABSOLUTE TOTAL CARE',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER FROM HEALTH NET',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER FROM HOMESTATE HEALTH',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'ADVANTAGE BY BUCKEYE',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER ILLINICARE HEALTH',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER NEW HAMPSHIRE HEALTHY FAMILIES',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'TRILLIUM COMMUNITY HEALTH PLAN',
    cv_payerID: 'CNTENE',
  },
  {
    payer_name: 'AMBETTER OF ARKANSAS',
    cv_payerID: 'CNTENE ',
  },
  {
    payer_name: 'AMBETTER FROM SUNSHINE HEALTH',
    cv_payerID: 'CNTENE ',
  },
  {
    payer_name: 'AMBETTER FROM PEACH STATE HEALTH PLAN',
    cv_payerID: 'CNTENE ',
  },
  {
    payer_name: 'AMBETTER FROM MANAGED HEALTH SERVICES',
    cv_payerID: 'CNTENE ',
  },
  {
    payer_name: 'COLORADO ACCESS',
    cv_payerID: 'COACCS',
    State: 'CO',
  },
  {
    payer_name: 'COLORADO BLUE CROSS',
    cv_payerID: 'COBCBS',
    State: 'CO',
  },
  {
    payer_name: 'HEALTH FIRST COLORADO FKA COLORADO MEDICAID',
    cv_payerID: 'COCAID',
    State: 'CO',
  },
  {
    payer_name: 'FRIDAY HEALTH PLANS',
    cv_payerID: 'COCHP',
  },
  {
    payer_name: 'KAISER FOUNDATION HEALTH PLAN OF COLORADO',
    cv_payerID: 'COKAIS',
    State: 'CO',
  },
  {
    payer_name: 'COLLECTIVE HEALTH',
    cv_payerID: 'COLLH',
  },
  {
    payer_name: 'COMMUNITY HEALTH CHOICE',
    cv_payerID: 'COMHC',
  },
  {
    payer_name: 'COMMUNITY HEALTH CHOICE TEXAS - HIM',
    cv_payerID: 'COMHC',
  },
  {
    payer_name: 'COMMUNITY HEALTH GROUP',
    cv_payerID: 'COMHGR',
  },
  {
    payer_name: 'COMMUNITY FIRST HEALTH PLAN',
    cv_payerID: 'COMMF',
  },
  {
    payer_name: 'CONNECTICARE VIP MEDICARE ADVANTAGE',
    cv_payerID: 'CONNCR',
  },
  {
    payer_name: 'CONNECTICARE, INC.',
    cv_payerID: 'CONNCR',
  },
  {
    payer_name: 'COOK CHILDRENS HEALTH PLAN',
    cv_payerID: 'COOKCH',
  },
  {
    payer_name: 'COOK MEDICAL GROUP',
    cv_payerID: 'COOKG',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF KENTUCKY',
    cv_payerID: 'COVCKY',
  },
  {
    payer_name: 'COVENANT ADMINISTRATORS, INC. (ATLANTA, GA)',
    cv_payerID: 'COVENT',
  },
  {
    payer_name: 'CORPORATE BENEFITS SERVICES',
    cv_payerID: 'CPBNSV',
  },
  {
    payer_name: 'COLONIAL PENN LIFE INSURANCE COMPANY',
    cv_payerID: 'CPLIC',
  },
  {
    payer_name: 'CREATE',
    cv_payerID: 'CREATE',
  },
  {
    payer_name: 'CAREMORE HEALTH PLAN',
    cv_payerID: 'CRMRE',
  },
  {
    payer_name: 'CAREPLUS HEALTH PLANS, INC.',
    cv_payerID: 'CRPLUS',
  },
  {
    payer_name: 'CARESOURCE OF OHIO',
    cv_payerID: 'CRSROH',
  },
  {
    payer_name: 'CARESOURCE OF OHIO',
    cv_payerID: 'CRSROH',
    State: 'OH',
  },
  {
    payer_name: 'CARESOURCE OHIO MEDICAID',
    cv_payerID: 'CRSROH',
  },
  {
    payer_name: 'CARESOURCE OHIO MEDICAID VISION',
    cv_payerID: 'CRSROH',
  },
  {
    payer_name: 'TRUSTMARK HEALTH BENEFITS (CORESOURCE LITTLE ROCK)',
    cv_payerID: 'CSFMH',
  },
  {
    payer_name: 'TRUSTMARK HEALTH (CORESOURCE AZ IL IN MD MN NC PA)',
    cv_payerID: 'CSFMH',
  },
  {
    payer_name: 'TRUSTMARK HEALTH BENEFITS (CORESOURCE INTERNAL)',
    cv_payerID: 'CSFMH',
  },
  {
    payer_name: 'TRUSTMARK HEALTH BENEFITS (CORESOURCE KC)',
    cv_payerID: 'CSFMH',
  },
  {
    payer_name: 'TRUSTMARK HEALTH BENEFITS (CORESOURCE OH)',
    cv_payerID: 'CSFMH',
  },
  {
    payer_name: 'TRUSTMARK HEALTH BENEFITS (CORESOURCE DETROIT)',
    cv_payerID: 'CSFMH',
  },
  {
    payer_name: 'CARESOURCE PASSE OF ARKANSAS',
    cv_payerID: 'CSPAR',
  },
  {
    payer_name: 'CARESOURCE OF INDIANA',
    cv_payerID: 'CSRCIN',
    State: 'IN',
  },
  {
    payer_name: 'HUMANA - CARESOURCE OF KENTUCKY',
    cv_payerID: 'CSRCKY',
  },
  {
    payer_name: 'CARESOURCE NORTH CAROLINA',
    cv_payerID: 'CSRCNC',
  },
  {
    payer_name: 'CARESOURCE OF WEST VIRGINIA',
    cv_payerID: 'CSRCWV',
  },
  {
    payer_name: 'CENTRAL STATES HEALTH AND WELFARE FUNDS',
    cv_payerID: 'CSTFND',
  },
  {
    payer_name: 'CONNECTICUT BLUE CROSS',
    cv_payerID: 'CTBCBS',
    State: 'CT',
  },
  {
    payer_name: 'CONNECTICUT MEDICAID - INPATIENT/OUTPATIENT',
    cv_payerID: 'CTCAID',
  },
  {
    payer_name: 'CONNECTICUT MEDICAID - INPATIENT/OUTPATIENT',
    cv_payerID: 'CTCAID',
  },
  {
    payer_name: 'MASS ADVANTAGE',
    cv_payerID: 'CTMASS',
  },
  {
    payer_name: 'COUNTYCARE HEALTH PLAN ',
    cv_payerID: 'CTYCHP',
  },
  {
    payer_name: 'LUCENT HEALTH',
    cv_payerID: 'CYPRSS',
  },
  {
    payer_name: 'DAKOTACARE',
    cv_payerID: 'DAKOTA',
  },
  {
    payer_name: 'BLUE CROSS OF NATIONAL CAPITAL AREA - CAREFIRST',
    cv_payerID: 'DCBCBS',
    State: 'DC',
  },
  {
    payer_name: 'DISTRICT OF COLUMBIA MEDICAID',
    cv_payerID: 'DCCAID',
    State: 'DC',
  },
  {
    payer_name: 'MEDSTAR FAMILY CHOICE DC',
    cv_payerID: 'DCMED',
  },
  {
    payer_name: 'DEAN HEALTH PLAN',
    cv_payerID: 'DEANHP',
  },
  {
    payer_name: 'DELAWARE BLUE CROSS - HIGHMARK',
    cv_payerID: 'DEBCBS',
    State: 'DE',
  },
  {
    payer_name: 'DELAWARE MEDICAID',
    cv_payerID: 'DECAID',
  },
  {
    payer_name: 'DEVOTED HEALTH',
    cv_payerID: 'DEVOT',
  },
  {
    payer_name: 'DESERET MUTUAL BENEFIT ASSOCIATES (DMBA)',
    cv_payerID: 'DMBA',
  },
  {
    payer_name: 'DENVER HEALTH MEDICAL PLAN',
    cv_payerID: 'DNVHMP',
  },
  {
    payer_name: 'DOCTORS HEALTHCARE PLANS ',
    cv_payerID: 'DRHCP',
  },
  {
    payer_name: 'DRISCOLL CHILDRENS HEALTH PLAN',
    cv_payerID: 'DRSCHP',
  },
  {
    payer_name: 'DIVERSIFIED GROUP BROKERAGE',
    cv_payerID: 'DVRGB',
  },
  {
    payer_name: 'EMPLOYEE BENEFIT MANAGEMENT SERV (EBMS)',
    cv_payerID: 'EBMS',
  },
  {
    payer_name: 'EBSO, INC.',
    cv_payerID: 'EBSO',
  },
  {
    payer_name: 'ELDERPLAN, INC.',
    cv_payerID: 'ELDER',
  },
  {
    payer_name: 'CIGNA HEALTHSPRING MARYLAND/PENNSYLNAVIA',
    cv_payerID: 'ELDRHL',
  },
  {
    payer_name: 'EL PASO HEALTH-CHIP',
    cv_payerID: 'ELPASO',
  },
  {
    payer_name: 'EMBLEMHEALTH PLAN INC HMO',
    cv_payerID: 'EMBLEM',
  },
  {
    payer_name: 'EMBLEMHEALTH PLAN INC MCR',
    cv_payerID: 'EMBLEM',
  },
  {
    payer_name: 'VYTRA HEALTHCARE',
    cv_payerID: 'EMBLEM',
  },
  {
    payer_name: 'EMBLEMHEALTH INSURANCE COMPANY',
    cv_payerID: 'EMBLEM',
  },
  {
    payer_name: 'NEW YORK EMPIRE BLUE CROSS',
    cv_payerID: 'EMHECH',
  },
  {
    payer_name: 'NEW YORK EMPIRE BLUE CROSS',
    cv_payerID: 'EMHECH',
    State: 'NY',
  },
  {
    payer_name: 'EMHS EMPLOYEE HEALTH PLAN',
    cv_payerID: 'EMHSP',
  },
  {
    payer_name: 'EMI HEALTH',
    cv_payerID: 'EMINS',
  },
  {
    payer_name: 'EMPOWER HEALTHCARE SOLUTIONS',
    cv_payerID: 'EMPOW',
  },
  {
    payer_name: 'SIGNIFICA BENEFIT SERVICES, INC.',
    cv_payerID: 'ERINGP',
  },
  {
    payer_name: 'ESSENCE',
    cv_payerID: 'ESSNCE',
  },
  {
    payer_name: 'EVRY HEALTH',
    cv_payerID: 'EVRYHP',
  },
  {
    payer_name: 'FALLON COMMUNITY HEALTH PLAN',
    cv_payerID: 'FALLON',
  },
  {
    payer_name: 'FIRSTCAROLINACARE - NEW',
    cv_payerID: 'FCACAR',
  },
  {
    payer_name: 'FIRST CHOICE VIP CARE',
    cv_payerID: 'FCVPC',
  },
  {
    payer_name: 'FIRST CHOICE VIP CARE PLUS BY SELECT HEALTH OF SC',
    cv_payerID: 'FCVSC',
  },
  {
    payer_name: 'FIDELIS CARE',
    cv_payerID: 'FDCRNY',
  },
  {
    payer_name: 'FIDELIS CARE',
    cv_payerID: 'FDCRNY',
    State: 'NY',
  },
  {
    payer_name: 'FIRST MEDICAL HEALTH PLAN (REFORM)',
    cv_payerID: 'FIRMED',
  },
  {
    payer_name: 'FLORIDA BLUE CROSS',
    cv_payerID: 'FLBCBS',
    State: 'FL',
  },
  {
    payer_name: 'FLORIDA MEDICAID',
    cv_payerID: 'FLCAID',
    State: 'FL',
  },
  {
    payer_name: 'FLORIDA HEALTH CARE PLAN',
    cv_payerID: 'FLHLTH',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF FLORIDA',
    cv_payerID: 'FLMLNA',
  },
  {
    payer_name: 'FARM BUREAU HEALTH PLANS MAPD',
    cv_payerID: 'FMBHP',
  },
  {
    payer_name: 'FIRST MEDICAL HEALTH PLAN (IMC)',
    cv_payerID: 'FMIMC',
  },
  {
    payer_name: 'FRESENIUS TOTAL HEALTH (PPO SNP)',
    cv_payerID: 'FRSNHP',
  },
  {
    payer_name: 'FIRST CHOICE HEALTH NETWORK',
    cv_payerID: 'FRSTC',
  },
  {
    payer_name: 'FIRSTCARE HEALTH PLANS',
    cv_payerID: 'FRTCR',
    State: 'TX',
  },
  {
    payer_name: 'PAYER FUSION',
    cv_payerID: 'FUSION',
  },
  {
    payer_name: 'GEORGIA BLUE CROSS',
    cv_payerID: 'GABCBS',
    State: 'GA',
  },
  {
    payer_name: 'GEORGIA MEDICAID',
    cv_payerID: 'GACAID',
    State: 'GA',
  },
  {
    payer_name: 'KAISER FOUNDATION HEALTH PLAN OF GEORGIA',
    cv_payerID: 'GAKAIS',
  },
  {
    payer_name: 'GOVERNMENT EMPLOYEE HEALTH ASSOCIATION (GEHA)',
    cv_payerID: 'GEHA',
  },
  {
    payer_name: 'GOVERNMENT EMPLOYEE HEALTH ASSOCIATION (GEHA)',
    cv_payerID: 'GEHA',
    State: 'TX',
  },
  {
    payer_name: 'GEISINGER HEALTH PLAN',
    cv_payerID: 'GEISHP',
  },
  {
    payer_name: 'GEISINGER HEALTH PLAN GOLD',
    cv_payerID: 'GHPG',
  },
  {
    payer_name: 'HIGHMARK BCBS DELAWARE HEALTH OPTIONS',
    cv_payerID: 'GHPHHO',
  },
  {
    payer_name: 'GATEWAY HEALTH PLAN - MEDICAID PENNSYLVANIA',
    cv_payerID: 'GHPMCD',
  },
  {
    payer_name: 'GATEWAY HEALTH PLAN - MEDICARE ASSURED PENNSYLVANI',
    cv_payerID: 'GHPMCR',
  },
  {
    payer_name: 'GOLDEN RULE INSURANCE COMPANY',
    cv_payerID: 'GLDRUL',
  },
  {
    payer_name: 'GEMCARE - KERN COUNTY',
    cv_payerID: 'GMCARE',
  },
  {
    payer_name: 'IMAGINE360 ADMINISTRATORS (GPA)',
    cv_payerID: 'GPADM',
  },
  {
    payer_name: 'GRAVIE INC',
    cv_payerID: 'GRAVIE',
  },
  {
    payer_name: 'KAISER FOUNDATION HEALTH PLAN OF WASHINGTON',
    cv_payerID: 'GRPNW',
  },
  {
    payer_name: 'KAISER FOUNDATION HEALTH PLAN OF WASHINGTON',
    cv_payerID: 'GRPNW',
  },
  {
    payer_name: 'CIGNA SELECT (FORMERLY GREAT WEST HEALTHCARE)',
    cv_payerID: 'GWSTHC',
  },
  {
    payer_name: 'HEALTH ALLIANCE PLAN OF MICHIGAN',
    cv_payerID: 'HAPMI',
  },
  {
    payer_name: 'HEALTHY BLUE DUAL ADVANTAGE LOUISIANA',
    cv_payerID: 'HBDALA',
  },
  {
    payer_name: 'HEALTHY BLUE MISSOURI',
    cv_payerID: 'HBLUMO',
  },
  {
    payer_name: 'HEALTHY BLUE NORTH CAROLINA',
    cv_payerID: 'HBLUNC',
  },
  {
    payer_name: 'HEALTHY BLUE NEBRASKA',
    cv_payerID: 'HBLUNE',
  },
  {
    payer_name: 'HEALTH CHOICE PATHWAY',
    cv_payerID: 'HCHGN',
  },
  {
    payer_name: 'HEALTH COST SOLUTIONS',
    cv_payerID: 'HCOSTS',
  },
  {
    payer_name: 'HEALTH FIRST HEALTH PLANS - OSCAR',
    cv_payerID: 'HFHPO',
  },
  {
    payer_name: 'HEALTHGRAM',
    cv_payerID: 'HGRAM',
  },
  {
    payer_name: 'HAWAII MEDICAID',
    cv_payerID: 'HICAID',
    State: 'HI',
  },
  {
    payer_name: 'KAISER FOUNDATION HEALTH PLAN OF HAWAII',
    cv_payerID: 'HIKAIS',
  },
  {
    payer_name: 'HEALTHCOMP, INC.',
    cv_payerID: 'HLCOMP',
  },
  {
    payer_name: 'HEALTH FIRST HEALTH PLAN',
    cv_payerID: 'HLFRT',
  },
  {
    payer_name: 'HEALTH PLANS, INC.',
    cv_payerID: 'HLPLNS',
  },
  {
    payer_name: 'HEALTHPARTNERS OF MINNESOTA',
    cv_payerID: 'HLPTMN',
  },
  {
    payer_name: 'HEALTH ALLIANCE MEDICAL PLAN OF ILLINOIS',
    cv_payerID: 'HLTAIL',
  },
  {
    payer_name: 'HEALTHBRIDGE',
    cv_payerID: 'HLTBR',
  },
  {
    payer_name: 'CONTIGO HEALTH',
    cv_payerID: 'HLTDS1',
  },
  {
    payer_name: 'HEALTHEZ',
    cv_payerID: 'HLTEZ',
  },
  {
    payer_name: 'HEALTH EXCHANGE (THE) (CERNER CORPORATION)',
    cv_payerID: 'HLTHEX',
  },
  {
    payer_name: 'HEALTH NEW ENGLAND',
    cv_payerID: 'HLTNE',
  },
  {
    payer_name: 'THE HEALTH PLAN OF WEST VIRGINIA, INC',
    cv_payerID: 'HLTPLN',
  },
  {
    payer_name: 'HMAA - HAWAII MEDICAL ASSURANCE ASSOCIATION',
    cv_payerID: 'HMAASC',
  },
  {
    payer_name: 'HMA HAWAII',
    cv_payerID: 'HMADMN',
  },
  {
    payer_name: 'HEALTHCARE MGMT ADMINISTRATORS',
    cv_payerID: 'HMAWR',
  },
  {
    payer_name: 'HOMETOWN HEALTH',
    cv_payerID: 'HOMTWN',
  },
  {
    payer_name: 'HEALTH PLAN OF SAN MATEO',
    cv_payerID: 'HPOSM',
  },
  {
    payer_name: 'HEALTH PARTNERS PLANS OF PENNSYLVANIA',
    cv_payerID: 'HPPHIL',
  },
  {
    payer_name: 'KAISER SELF FUNDED PLAN - HARRINGTON/FISERV',
    cv_payerID: 'HRGTN',
  },
  {
    payer_name: 'HARRINGTON HEALTH',
    cv_payerID: 'HRGTN',
  },
  {
    payer_name: 'HARVARD PILGRIM HEALTH CARE',
    cv_payerID: 'HRVPGM',
  },
  {
    payer_name: 'HEALTH SERVICES FOR CHILDREN WITH SPECIAL NEEDS',
    cv_payerID: 'HSCSN',
  },
  {
    payer_name: 'HEALTHSMART BENEFIT SOLUTIONS',
    cv_payerID: 'HSMRT',
  },
  {
    payer_name: 'CIGNA HEALTHSPRING TENNESSEE ALABAMA',
    cv_payerID: 'HSPRNG',
  },
  {
    payer_name: 'CIGNA HEALTHSPRING TENNESSEE ALABAMA',
    cv_payerID: 'HSPRNG',
  },
  {
    payer_name: 'CIGNA MEDICARE',
    cv_payerID: 'HSPRNG',
    State: 'TX',
  },
  {
    payer_name: 'HUMANA',
    cv_payerID: 'HUMANA',
    State: 'LA',
  },
  {
    payer_name: 'HUMANA',
    cv_payerID: 'HUMANA',
  },
  {
    payer_name: 'HUMANA OHIO MEDICAID VISION',
    cv_payerID: 'HUMANA',
  },
  {
    payer_name: 'HUMANA OHIO MEDICAID',
    cv_payerID: 'HUMOM',
  },
  {
    payer_name: 'HORIZON NJ HEALTH',
    cv_payerID: 'HZMRCY',
  },
  {
    payer_name: 'IOWA BLUE CROSS',
    cv_payerID: 'IABCBS',
    State: 'IA',
  },
  {
    payer_name: 'IOWA BLUE CROSS',
    cv_payerID: 'IABCBS',
    State: 'SD',
  },
  {
    payer_name: 'IOWA MEDICAID',
    cv_payerID: 'IACAID',
    State: 'IA',
  },
  {
    payer_name: 'IDAHO BLUE SHIELD REGENCE',
    cv_payerID: 'IDBCS',
    State: 'ID',
  },
  {
    payer_name: 'IDAHO BLUE CROSS BOISE',
    cv_payerID: 'IDBLCB',
  },
  {
    payer_name: 'IDAHO BLUE CROSS BOISE',
    cv_payerID: 'IDBLCB',
    State: 'ID',
  },
  {
    payer_name: 'IDAHO MEDICAID',
    cv_payerID: 'IDCAID',
    State: 'ID',
  },
  {
    payer_name: 'INLAND EMPIRE HEALTH PLAN - DOS AFTER 3/31/18',
    cv_payerID: 'IEHP',
  },
  {
    payer_name: 'ILLINOIS BLUE CROSS',
    cv_payerID: 'ILBCBS',
    State: 'IL',
  },
  {
    payer_name: 'ILLINOIS BLUE CROSS',
    cv_payerID: 'ILBCBS',
  },
  {
    payer_name: 'ILLINOIS MEDICAID',
    cv_payerID: 'ILCAID',
    State: 'IL',
  },
  {
    payer_name: 'PROFESSIONAL BENEFIT ADMINISTRATORS (OAKBROOK, IL)',
    cv_payerID: 'ILPBA',
  },
  {
    payer_name: 'IMCARE',
    cv_payerID: 'IMCARE',
  },
  {
    payer_name: 'INDIANA BLUE CROSS',
    cv_payerID: 'INBCBS',
  },
  {
    payer_name: 'MAESTRO HEALTH',
    cv_payerID: 'INBMS',
  },
  {
    payer_name: 'MDWISE HOOSIER HEALTHWISE',
    cv_payerID: 'INCAID',
  },
  {
    payer_name: 'MDWISE HEALTHY INDIANA PLAN ',
    cv_payerID: 'INCAID',
  },
  {
    payer_name: 'INDIANA MEDICAID',
    cv_payerID: 'INCAID',
    State: 'IN',
  },
  {
    payer_name: 'ICARE, INDEPENDENT CARE HEALTH',
    cv_payerID: 'INDCH',
  },
  {
    payer_name: 'INTERNATIONAL BENEFITS ADMINISTRATORS',
    cv_payerID: 'INTADM',
  },
  {
    payer_name: 'IU HEALTH PLAN MEDICARE ADVANTAGE',
    cv_payerID: 'IUHLTH',
  },
  {
    payer_name: 'IU HEALTH PLANS (PAYER ID IUHPLNS)',
    cv_payerID: 'IUHLTP',
  },
  {
    payer_name: 'INTER VALLEY HEALTH PLAN',
    cv_payerID: 'IVHP',
  },
  {
    payer_name: 'JAI MEDICAL SYSTEMS',
    cv_payerID: 'JAIMED',
  },
  {
    payer_name: 'UNITED HEALTHCARE COMMUNITY PLAN - TENNCARE ONLY',
    cv_payerID: 'JDHS',
  },
  {
    payer_name: 'JOHNS HOPKINS HEALTHCARE',
    cv_payerID: 'JHHP',
  },
  {
    payer_name: 'JOHNS HOPKINS USFHP',
    cv_payerID: 'JHUSFP',
  },
  {
    payer_name: 'KAISER FOUNDATION HEALTH PLAN OF THE NORTHWEST',
    cv_payerID: 'KAISNW',
  },
  {
    payer_name: 'MISSOURI BLUE CROSS OF KANSAS CITY',
    cv_payerID: 'KCBCBS',
    State: 'MO',
  },
  {
    payer_name: 'KEMPTON GROUP ADMINISTRATORS',
    cv_payerID: 'KEMCO',
  },
  {
    payer_name: 'TRANSCHOICE KEY BENEFIT ADMINISTRATORS',
    cv_payerID: 'KEYBEN',
  },
  {
    payer_name: 'KEY SELECT',
    cv_payerID: 'KEYBEN',
  },
  {
    payer_name: 'KEY BENEFIT ADMINISTRATORS, INC.',
    cv_payerID: 'KEYBEN',
  },
  {
    payer_name: 'KEY BENEFIT ADMINISTRATORS - FT MILL, SC',
    cv_payerID: 'KEYBEN',
  },
  {
    payer_name: 'KEY SOLUTIONS',
    cv_payerID: 'KEYBEN',
  },
  {
    payer_name: 'KEYSTONE FIRST',
    cv_payerID: 'KMHPLN',
  },
  {
    payer_name: 'KANSAS BLUE CROSS - TOPEKA',
    cv_payerID: 'KSBCBS',
    State: 'KS',
  },
  {
    payer_name: 'KANSAS MEDICAID',
    cv_payerID: 'KSCAID',
    State: 'KS',
  },
  {
    payer_name: 'KEYSTONE FIRST COMMUNITY HEALTHCHOICES',
    cv_payerID: 'KSFCHC',
  },
  {
    payer_name: 'KAISER FOUNDATION HEALTH PLAN MID-ATLANTIC STATES',
    cv_payerID: 'KSRMDA',
  },
  {
    payer_name: 'KAISER FOUNDATION HEALTH PLAN OF N CA REGION',
    cv_payerID: 'KSRNCA',
    State: 'CA',
  },
  {
    payer_name: 'KAISER FOUNDATION HEALTH PLAN OF S CA REGION',
    cv_payerID: 'KSRSCA',
    State: 'CA',
  },
  {
    payer_name: 'KEYSTONE FIRST VIP CHOICE',
    cv_payerID: 'KVIPC',
  },
  {
    payer_name: 'KENTUCKY BLUE CROSS',
    cv_payerID: 'KYBCBS',
  },
  {
    payer_name: 'KENTUCKY BLUE CROSS',
    cv_payerID: 'KYBCBS',
    State: 'KY',
  },
  {
    payer_name: 'KENTUCKY MEDICAID',
    cv_payerID: 'KYCAID',
    State: 'KY',
  },
  {
    payer_name: 'LA BLUE ADVANTAGE',
    cv_payerID: 'LABADV',
  },
  {
    payer_name: 'LOUISIANA BLUE CROSS',
    cv_payerID: 'LABCBS',
  },
  {
    payer_name: 'LOUISIANA BLUE CROSS',
    cv_payerID: 'LABCBS',
  },
  {
    payer_name: 'LOUISIANA MEDICAID',
    cv_payerID: 'LACAID',
  },
  {
    payer_name: 'LOUISIANA MEDICAID',
    cv_payerID: 'LACAID',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS LOUISIANA',
    cv_payerID: 'LACAR',
  },
  {
    payer_name: 'LA CARE HEALTH PLAN',
    cv_payerID: 'LACRE',
  },
  {
    payer_name: 'LOYAL AMERICAN LIFE INSUR CO MEDICARE SUPPLEMENT',
    cv_payerID: 'LALIMS',
  },
  {
    payer_name: 'OPTUM MEDICAL NETWORK',
    cv_payerID: 'LFPRT',
  },
  {
    payer_name: 'LOOMIS COMPANY (THE)',
    cv_payerID: 'LOOMCO',
  },
  {
    payer_name: 'BLUE CROSS BLUE SHIELD OF MASSACHUSETTS',
    cv_payerID: 'MABCBS',
    State: 'MA',
  },
  {
    payer_name: 'MASSACHUSETTS MEDICAID',
    cv_payerID: 'MACAID',
    State: 'MA',
  },
  {
    payer_name: 'MAGELLAN HEALTHCARE',
    cv_payerID: 'MAGLAN',
  },
  {
    payer_name: 'MAGNACARE',
    cv_payerID: 'MAGNA',
    State: 'NY',
  },
  {
    payer_name: 'MAPFRE',
    cv_payerID: 'MAPFRE',
  },
  {
    payer_name: 'MARICOPA HEALTH PLAN - MARICOPA CARE ADVANTAGE',
    cv_payerID: 'MARIHP',
  },
  {
    payer_name: 'MARPAI HEALTH',
    cv_payerID: 'MARPAI',
  },
  {
    payer_name: 'MERIDIAN MEDICARE MEDICAID PLAN ',
    cv_payerID: 'MCCIL',
  },
  {
    payer_name: 'MCLAREN HEALTH PLANS',
    cv_payerID: 'MCLREN',
  },
  {
    payer_name: 'MEDICAL CARD SYSTEMS (MCS) REFORMA',
    cv_payerID: 'MCSPR',
    State: 'PR',
  },
  {
    payer_name: 'MODA HEALTH',
    cv_payerID: 'MDAHLT',
  },
  {
    payer_name: 'MARYLAND BLUE CROSS - CAREFIRST',
    cv_payerID: 'MDBCBS',
  },
  {
    payer_name: 'MEDICAL BENEFITS ADMINISTRATORS (NEWARK, OH)',
    cv_payerID: 'MDBEN',
  },
  {
    payer_name: 'MEDICAL BENEFITS ADMINISTRATORS (NEWARK, OH)',
    cv_payerID: 'MDBEN',
  },
  {
    payer_name: 'MARYLAND MEDICAID',
    cv_payerID: 'MDCAID',
    State: 'MD',
  },
  {
    payer_name: 'MEDICO INSURANCE COMPANY',
    cv_payerID: 'MDICO',
  },
  {
    payer_name: 'MARYLAND PHYSICIANS CARE',
    cv_payerID: 'MDPHCR',
  },
  {
    payer_name: 'MAINE BLUE CROSS',
    cv_payerID: 'MEBCBS',
    State: 'ME',
  },
  {
    payer_name: 'MAINE MEDICAID',
    cv_payerID: 'MECAID',
    State: 'ME',
  },
  {
    payer_name: 'MAINE COMMUNITY HEALTH OPTIONS',
    cv_payerID: 'MECOH',
  },
  {
    payer_name: 'MEDCOST BENEFIT SERVICES (MBS)',
    cv_payerID: 'MEDCST',
  },
  {
    payer_name: 'MEDIGOLD HMO',
    cv_payerID: 'MEDGLD',
  },
  {
    payer_name: 'MEDIGOLD PPO',
    cv_payerID: 'MEDGLD',
  },
  {
    payer_name: 'MEDICA GOVERNMENT PROGRAMS',
    cv_payerID: 'MEDGP',
  },
  {
    payer_name: 'MEDICA INDIVIDUAL AND FAMILY (IFB)',
    cv_payerID: 'MEDIFB',
  },
  {
    payer_name: 'MEDICA INDIVIDUAL AND FAMILY (IFB)',
    cv_payerID: 'MEDIFB',
  },
  {
    payer_name: 'MED-PAY, INC.\\t',
    cv_payerID: 'MEDPY',
  },
  {
    payer_name: 'MERIDIAN HEALTH PLAN OF ILLINOIS DOS &lt; 7/1/21',
    cv_payerID: 'MERIL',
  },
  {
    payer_name: 'MERITAIN HEALTH MINNEAPOLIS',
    cv_payerID: 'MERITN',
  },
  {
    payer_name: 'HENNEPIN HEALTH',
    cv_payerID: 'METHPL',
  },
  {
    payer_name: 'METROPLUSHEALTH',
    cv_payerID: 'METPL',
  },
  {
    payer_name: 'MEDICA HEALTH PLAN SOLUTIONS',
    cv_payerID: 'MHSRT',
  },
  {
    payer_name: 'MICHIGAN BLUE CROSS (FEP)',
    cv_payerID: 'MIBCBI',
    State: 'MI',
  },
  {
    payer_name: 'MEDICARE PLUS BLUE - MEDICARE ADVANTAGE PLAN',
    cv_payerID: 'MIBCSI',
    State: 'MI',
  },
  {
    payer_name: 'MICHIGAN BLUE CROSS',
    cv_payerID: 'MIBCSI',
  },
  {
    payer_name: 'BLUE CARE NETWORK HMO',
    cv_payerID: 'MIBCSI',
    State: 'MI',
  },
  {
    payer_name: 'BLUE CARE NETWORK HMO',
    cv_payerID: 'MIBCSI',
  },
  {
    payer_name: 'BLUE CARE NETWORK HMO',
    cv_payerID: 'MIBCSI',
  },
  {
    payer_name: 'UPPER PENINSULA HEALTH PLAN',
    cv_payerID: 'MICAID',
  },
  {
    payer_name: 'MICHIGAN MEDICAID',
    cv_payerID: 'MICAID',
    State: 'MI',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF MICHIGAN',
    cv_payerID: 'MIMLNA',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF WISCONSIN',
    cv_payerID: 'MLNAWI',
    State: 'WI',
  },
  {
    payer_name: 'MOLINA COMPLETE CARE OF ARIZONA',
    cv_payerID: 'MLNAZ',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF  IDAHO',
    cv_payerID: 'MLNID',
  },
  {
    payer_name: 'PASSPORT HEALTH PLAN BY MOLINA HEALTHCARE',
    cv_payerID: 'MLNKY',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF NEVADA',
    cv_payerID: 'MLNNV',
  },
  {
    payer_name: 'MOLINA COMPLETE CARE OF VIRGINIA',
    cv_payerID: 'MLNVA',
  },
  {
    payer_name: 'MERCY CARE RBHA',
    cv_payerID: 'MMICR',
  },
  {
    payer_name: 'MMM OF FLORIDA',
    cv_payerID: 'MMMFL',
  },
  {
    payer_name: 'MMM HEALTHCARE',
    cv_payerID: 'MMMHC',
    State: 'PR',
  },
  {
    payer_name: 'MMM MULTI HEALTH (REFORM)',
    cv_payerID: 'MMMHRF',
  },
  {
    payer_name: 'MEDICAL MUTUAL OF OHIO',
    cv_payerID: 'MMUTOH',
  },
  {
    payer_name: 'MUNICIPAL HEALTH BENEFIT FUND',
    cv_payerID: 'MNHBF',
  },
  {
    payer_name: 'MINNESOTA BLUE CROSS BLUE SHIELD HEALTH CARE PROGR',
    cv_payerID: 'MNHCP',
    State: 'MN',
  },
  {
    payer_name: 'UCARE PLANS',
    cv_payerID: 'MNUCAR',
  },
  {
    payer_name: 'UCARE OF MINNESOTA DOS BEFORE 1-1-2022',
    cv_payerID: 'MNUCAR',
  },
  {
    payer_name: 'MISSOURI BLUE CROSS - ST LOUIS MO',
    cv_payerID: 'MOBCBS',
    State: 'MO',
  },
  {
    payer_name: 'MISSOURI MEDICAID',
    cv_payerID: 'MOCAID',
    State: 'MO',
  },
  {
    payer_name: 'MONTEFIORE CMO',
    cv_payerID: 'MOCMO',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF ILLINOIS',
    cv_payerID: 'MOLIL',
  },
  {
    payer_name: 'MORECARE',
    cv_payerID: 'MORECA',
  },
  {
    payer_name: 'MARTINS POINT HEALTH CARE USFHP/GENERATIONS ADV',
    cv_payerID: 'MRTNP',
  },
  {
    payer_name: 'MARY WASHINGTON HEALTH PLAN',
    cv_payerID: 'MRYWSH',
  },
  {
    payer_name: 'MISSISSIPPI BLUE CROSS',
    cv_payerID: 'MSBCBS',
    State: 'MS',
  },
  {
    payer_name: 'MISSISSIPPI MEDICAID',
    cv_payerID: 'MSCAID',
    State: 'MS',
  },
  {
    payer_name: 'MEDSTAR FAMILY CHOICE MD',
    cv_payerID: 'MSFC',
  },
  {
    payer_name: 'MISSISSIPPI BLUE CROSS-STATE EMPLOYEE',
    cv_payerID: 'MSSEHP',
    State: 'MS',
  },
  {
    payer_name: 'MONTANA BLUE CROSS',
    cv_payerID: 'MTBCBS',
    State: 'MT',
  },
  {
    payer_name: 'MONTANA MEDICAID',
    cv_payerID: 'MTCAID',
    State: 'MT',
  },
  {
    payer_name: 'MUTUAL OF OMAHA MEDICARE ADVANTAGE',
    cv_payerID: 'MUTOMA',
  },
  {
    payer_name: 'MUTUAL OF OMAHA',
    cv_payerID: 'MUTOMH',
  },
  {
    payer_name: 'NATIONAL ASSOCIATION OF LETTER CARRIERS',
    cv_payerID: 'NAOLC',
  },
  {
    payer_name: 'NEXTBLUE OF NORTH DAKOTA',
    cv_payerID: 'NBOND',
  },
  {
    payer_name: 'CAREFIRST ADMINISTRATORS / NCAS',
    cv_payerID: 'NCAS',
  },
  {
    payer_name: 'NORTH CAROLINA BLUE CROSS',
    cv_payerID: 'NCBCBS',
    State: 'NC',
  },
  {
    payer_name: 'NORTH CAROLINA MEDICAID',
    cv_payerID: 'NCCAID',
    State: 'NC',
  },
  {
    payer_name: 'NORTH DAKOTA BLUE CROSS',
    cv_payerID: 'NDBCBI',
    State: 'ND',
  },
  {
    payer_name: 'NEBRASKA BLUE CROSS',
    cv_payerID: 'NEBCBS',
    State: 'NE',
  },
  {
    payer_name: 'NEBRASKA MEDICAID',
    cv_payerID: 'NECAID',
    State: 'NE',
  },
  {
    payer_name: 'MASS GENERAL BRIGHAM HEALTH PLAN ',
    cv_payerID: 'NGHBHP',
  },
  {
    payer_name: 'NEIGHBORHOOD HEALTH PARTNERSHIP OF FLORIDA',
    cv_payerID: 'NGHPRT',
  },
  {
    payer_name: 'NEW HAMPSHIRE BLUE CROSS',
    cv_payerID: 'NHBCBS',
    State: 'NH',
  },
  {
    payer_name: 'NEW HAMPSHIRE MEDICAID',
    cv_payerID: 'NHCAID',
    State: 'NH',
  },
  {
    payer_name: 'NETWORK HEALTH INSURANCE CORP MEDICARE',
    cv_payerID: 'NHICMC',
  },
  {
    payer_name: 'HORIZON BLUE CROSS OF NEW JERSEY',
    cv_payerID: 'NJBCBS',
  },
  {
    payer_name: 'HORIZON BLUE CROSS OF NEW JERSEY',
    cv_payerID: 'NJBCBS',
    State: 'NY',
  },
  {
    payer_name: 'HORIZON BLUE CROSS OF NEW JERSEY',
    cv_payerID: 'NJBCBS',
    State: 'NJ',
  },
  {
    payer_name: 'NEW JERSEY MEDICAID',
    cv_payerID: 'NJCAID',
    State: 'NJ',
  },
  {
    payer_name: 'NIPPON LIFE INSURANCE COMPANY OF AMERICA',
    cv_payerID: 'NLICOA',
  },
  {
    payer_name: 'NEW MEXICO BLUE CROSS',
    cv_payerID: 'NMBCBS',
  },
  {
    payer_name: 'NEW MEXICO BLUE CROSS',
    cv_payerID: 'NMBCBS',
    State: 'NM',
  },
  {
    payer_name: 'NEW MEXICO MEDICAID',
    cv_payerID: 'NMCAID',
    State: 'NM',
  },
  {
    payer_name: 'NOVA HEALTHCARE ADMINISTRATORS, INC. (GRAND ISLAND',
    cv_payerID: 'NOVAHC',
  },
  {
    payer_name: 'NATIONAL TELECOMMUNICATIONS COOP ASSOC. (NTCA)',
    cv_payerID: 'NTCA',
  },
  {
    payer_name: 'TUFTS HEALTH PUBLIC PLANS',
    cv_payerID: 'NTHLMA',
  },
  {
    payer_name: 'NETWORK HEALTH PLAN OF WISCONSIN',
    cv_payerID: 'NTWHL',
  },
  {
    payer_name: 'NOVASYS HEALTH NETWORK',
    cv_payerID: 'NVASYS',
  },
  {
    payer_name: 'NEVADA BLUE CROSS',
    cv_payerID: 'NVBCBS',
    State: 'NV',
  },
  {
    payer_name: 'NORTHWEST ADMINISTRATORS, INC.',
    cv_payerID: 'NWADM',
  },
  {
    payer_name: 'NEW ERA LIFE INSURANCE COMPANY',
    cv_payerID: 'NWERAL',
  },
  {
    payer_name: 'NEW YORK BLUE CROSS WESTERN',
    cv_payerID: 'NYBCBS',
  },
  {
    payer_name: 'NEW YORK BLUE CROSS WESTERN',
    cv_payerID: 'NYBCBS',
  },
  {
    payer_name: 'NEW YORK BLUE CROSS OF NORTHEASTERN NEW YORK',
    cv_payerID: 'NYBCNE',
    State: 'NY',
  },
  {
    payer_name: 'NEW YORK MEDICAID TITLE XIX - PHASE II',
    cv_payerID: 'NYCAID',
    State: 'NY',
  },
  {
    payer_name: 'NEW YORK MEDICAID INPATIENT - PHASE II',
    cv_payerID: 'NYCAID',
    State: 'NY',
  },
  {
    payer_name: 'NEW YORK MEDICAID OUTPATIENT - PHASE II',
    cv_payerID: 'NYCAID',
    State: 'NY',
  },
  {
    payer_name: 'NEW YORK BLUE CROSS OF  ROCHESTER',
    cv_payerID: 'NYEXCL',
    State: 'NY',
  },
  {
    payer_name: 'NEW YORK BLUE CROSS CENTRAL REGION',
    cv_payerID: 'NYEXCL',
    State: 'NY',
  },
  {
    payer_name: 'HEALTHFIRST OF NEW YORK',
    cv_payerID: 'NYHFST',
  },
  {
    payer_name: 'NEW YORK INDEPENDENT HEALTH ASSOC (IHA) - WESTERN',
    cv_payerID: 'NYIHAW',
  },
  {
    payer_name: 'MVP HEALTH CARE',
    cv_payerID: 'NYMVP',
    State: 'NY',
  },
  {
    payer_name: 'MVP HEALTH CARE',
    cv_payerID: 'NYMVP',
  },
  {
    payer_name: 'OHIO BLUE CROSS',
    cv_payerID: 'OHBCBS',
    State: 'OH',
  },
  {
    payer_name: 'ANTHEM OHIO MEDICAID',
    cv_payerID: 'OHBCBS',
  },
  {
    payer_name: 'OHIO MEDICAID',
    cv_payerID: 'OHCAID',
    State: 'OH',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF OHIO',
    cv_payerID: 'OHMLNA',
  },
  {
    payer_name: 'MOLINA OHIO MEDICAID',
    cv_payerID: 'OHMLNA',
  },
  {
    payer_name: 'OHIORISE - AETNA BETTER HEALTH OF OHIO',
    cv_payerID: 'OHRISE',
  },
  {
    payer_name: 'OKLAHOMA BLUE CROSS',
    cv_payerID: 'OKBCBS',
    State: 'OK',
  },
  {
    payer_name: 'OKLAHOMA MEDICAID',
    cv_payerID: 'OKCAID',
    State: 'OK',
  },
  {
    payer_name: 'COMMUNITY CARE MANAGED HEALTHCARE PLANS OF OK',
    cv_payerID: 'OKCMCR',
  },
  {
    payer_name: 'SENTARA HEALTH PLAN',
    cv_payerID: 'OPTSNT',
  },
  {
    payer_name: 'OREGON MEDICAID',
    cv_payerID: 'ORCAID',
    State: 'OR',
  },
  {
    payer_name: 'HEALTH SHARE OF OREGON (MENTAL HEALTH)',
    cv_payerID: 'ORHSM',
  },
  {
    payer_name: 'OREGON BLUE CROSS REGENCE',
    cv_payerID: 'ORRBCS',
    State: 'OR',
  },
  {
    payer_name: 'OSCAR HEALTH',
    cv_payerID: 'OSCAR',
  },
  {
    payer_name: 'TRICARE OVERSEAS PROGRAM',
    cv_payerID: 'OVRSEA',
  },
  {
    payer_name: 'OXFORD HEALTH PLANS',
    cv_payerID: 'OXFORD',
  },
  {
    payer_name: 'PENNSYLVANIA BLUE CROSS WESTERN',
    cv_payerID: 'PABCBS',
    State: 'PA',
  },
  {
    payer_name: 'PENNSYLVANIA BLUE CROSS CENTRAL',
    cv_payerID: 'PABCBS',
    State: 'PA',
  },
  {
    payer_name: 'PENNSYLVANIA FREEDOM BLUE MEDICARE ADVANTAGE',
    cv_payerID: 'PABCBS',
  },
  {
    payer_name: 'PENNSYLVANIA MEDICAID',
    cv_payerID: 'PACAID',
    State: 'PA',
  },
  {
    payer_name: 'CAPITAL BLUE CROSS',
    cv_payerID: 'PACAPB',
  },
  {
    payer_name: 'AMERIHEALTH NEW JERSEY/DELAWARE - HMO',
    cv_payerID: 'PAIBCE',
  },
  {
    payer_name: 'AMERIHEALTH DELAWARE PPO',
    cv_payerID: 'PAIBCE',
  },
  {
    payer_name: 'PENNSYLVANIA INDEPENDENCE AMERIHEALTH PPO',
    cv_payerID: 'PAIBCE',
  },
  {
    payer_name: 'KEYSTONE EAST HMO',
    cv_payerID: 'PAIBCE',
  },
  {
    payer_name: 'PENNSYLVANIA INDEPENDENCE BLUE CROSS',
    cv_payerID: 'PAIBCE',
    State: 'PA',
  },
  {
    payer_name: 'SUMMIT COMMUNITY CARE',
    cv_payerID: 'PASSE',
  },
  {
    payer_name: 'PIEDMONT COMMUNITY HEALTH PLAN',
    cv_payerID: 'PDMTHP',
  },
  {
    payer_name: 'PLAN DE SALUD HOSPITAL MENONITA',
    cv_payerID: 'PDSHM',
  },
  {
    payer_name: 'PEOPLES HEALTH NETWORK',
    cv_payerID: 'PEOPLE',
  },
  {
    payer_name: 'PERFORMCARE',
    cv_payerID: 'PFMCR',
  },
  {
    payer_name: 'PROVIDENCE HEALTH ASSURANCE MEDICAID AFTER 123120',
    cv_payerID: 'PHAMCD',
  },
  {
    payer_name: 'PROVIDENCE HEALTH ASSURANCE MEDICARE SUPPLEMENT',
    cv_payerID: 'PHAMCR',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS FLORIDA',
    cv_payerID: 'PHCMCO',
  },
  {
    payer_name: 'PHYSICIANS HEALTH PLAN MID-MICHIGAN / PHP',
    cv_payerID: 'PHPMI',
  },
  {
    payer_name: 'PHYSICIANS HEALTH PLAN OF MICHIGAN MEDICARE',
    cv_payerID: 'PHPMIM',
  },
  {
    payer_name: 'PHYSICIAN HEALTH PLAN OF NORTHERN INDIANA - PHP',
    cv_payerID: 'PHPNI',
  },
  {
    payer_name: 'PROMINENCE HEALTH PLAN OF NEVADA',
    cv_payerID: 'PHPNV',
  },
  {
    payer_name: 'PHYSICIANS MUTUAL INSURANCE COMPANY',
    cv_payerID: 'PHYSMT',
  },
  {
    payer_name: 'PERSONAL INSURANCE ADMINISTRATORS',
    cv_payerID: 'PIADMN',
  },
  {
    payer_name: 'PREFERRED MEDICARE CHOICE (PMC)',
    cv_payerID: 'PMC',
  },
  {
    payer_name: 'PREFERRED MEDICARE CHOICE (REFORM)',
    cv_payerID: 'PMCHOR',
  },
  {
    payer_name: 'PAN-AMERICAN LIFE INSURANCE COMPANY',
    cv_payerID: 'PNAIC',
  },
  {
    payer_name: 'PREFERRED ONE OF MINNESOTA',
    cv_payerID: 'PRFONE',
  },
  {
    payer_name: 'PROMINENCE HEALTHFIRST OF FLORIDA',
    cv_payerID: 'PRHFFL',
  },
  {
    payer_name: 'PRIORITY HEALTH OF MICHIGAN',
    cv_payerID: 'PRIRTY',
  },
  {
    payer_name: 'PARKLAND COMMUNITY HEALTH PLAN',
    cv_payerID: 'PRKLND',
  },
  {
    payer_name: 'PARAMOUNT',
    cv_payerID: 'PRMNT',
    State: 'NY',
  },
  {
    payer_name: 'PRIME WEST',
    cv_payerID: 'PRMWST',
  },
  {
    payer_name: 'PROVIDENCE HEALTH PLAN',
    cv_payerID: 'PROVHP',
    State: 'OR',
  },
  {
    payer_name: 'PROVIDENCE HEALTH PLAN',
    cv_payerID: 'PROVHP',
  },
  {
    payer_name: 'TRIPLE-S ADVANVTAGE',
    cv_payerID: 'PRSSA',
  },
  {
    payer_name: 'TRIPLE-S SALUD',
    cv_payerID: 'PRSSS',
    State: 'PR',
  },
  {
    payer_name: 'PARTNERSHIP HEALTHPLAN OF CALIFORNIA',
    cv_payerID: 'PRTHP',
  },
  {
    payer_name: 'PROVIDENCE PACE CA',
    cv_payerID: 'PRVPCA',
  },
  {
    payer_name: 'PACIFICSOURCE COMMUNITY HEALTH SOLUTIONS',
    cv_payerID: 'PSCSOL',
  },
  {
    payer_name: 'PACIFICSOURCE ADMINISTRATORS (PSA)',
    cv_payerID: 'PSHLTH',
  },
  {
    payer_name: 'PACIFICSOURCE HEALTH PLANS',
    cv_payerID: 'PSHLTH',
  },
  {
    payer_name: 'PACIFICSOURCE MEDICARE',
    cv_payerID: 'PSMED',
  },
  {
    payer_name: 'PASSPORT ADVANTAGE',
    cv_payerID: 'PSPRT',
  },
  {
    payer_name: 'QUIKTRIP CORPORATION',
    cv_payerID: 'QTCORP',
  },
  {
    payer_name: 'QUARTZ ASO',
    cv_payerID: 'QUARTZ',
  },
  {
    payer_name: 'QUALCHOICE OF ARKANSAS',
    cv_payerID: 'QUCHO',
    State: 'AR',
  },
  {
    payer_name: 'RESERVE NATIONAL INSURANCE',
    cv_payerID: 'RESNI',
  },
  {
    payer_name: 'REGENCE GROUP ADMINISTRATORS',
    cv_payerID: 'RGADM',
  },
  {
    payer_name: 'RHODE ISLAND BLUE CROSS',
    cv_payerID: 'RIBCBS',
    State: 'RI',
  },
  {
    payer_name: 'NEIGHBORHOOD HEALTH PLAN OF RHODE ISLAND',
    cv_payerID: 'RINHP',
  },
  {
    payer_name: 'ROCKY MOUNTAIN HMO',
    cv_payerID: 'RKYMHP',
  },
  {
    payer_name: 'SCOTT AND WHITE HEALTH PLAN',
    cv_payerID: 'SAWHP',
  },
  {
    payer_name: 'SOUTH CAROLINA BLUE CROSS',
    cv_payerID: 'SCBCBS',
  },
  {
    payer_name: 'SOUTH CAROLINA BLUE CROSS',
    cv_payerID: 'SCBCBS',
  },
  {
    payer_name: 'SOUTH CAROLINA MEDICAID',
    cv_payerID: 'SCCAID',
    State: 'SC',
  },
  {
    payer_name: 'SANTA CLARA FAMILY HEALTH PLAN',
    cv_payerID: 'SCFHP',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF NEW YORK',
    cv_payerID: 'SCHCTC',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF SOUTH CAROLINA',
    cv_payerID: 'SCMLNA',
  },
  {
    payer_name: 'SCAN HEALTH PLAN',
    cv_payerID: 'SCNHMO',
  },
  {
    payer_name: 'FIRST CHOICE BY SELECT HEALTH OF SOUTH CAROLINA',
    cv_payerID: 'SCSLHT',
    State: 'SC',
  },
  {
    payer_name: 'SOUTH DAKOTA MEDICAID',
    cv_payerID: 'SDCAID',
    State: 'SD',
  },
  {
    payer_name: 'SECURITY HEALTH PLAN',
    cv_payerID: 'SECHP',
  },
  {
    payer_name: 'SELMAN AND COMPANY',
    cv_payerID: 'SELMN',
  },
  {
    payer_name: 'SAN FRANCISCO HEALTH PLAN',
    cv_payerID: 'SFHP',
  },
  {
    payer_name: 'SHARP HEALTH PLAN',
    cv_payerID: 'SHARP',
  },
  {
    payer_name: 'SHARED HEALTH MISSISSIPPI',
    cv_payerID: 'SHTMS',
  },
  {
    payer_name: 'SIERRA HEALTH SERVICES, INC. (CLAIMS)',
    cv_payerID: 'SIERA',
  },
  {
    payer_name: 'SIHO INSURANCE SERVICES',
    cv_payerID: 'SIHO',
    State: 'IN',
  },
  {
    payer_name: 'SISCO',
    cv_payerID: 'SISCO',
  },
  {
    payer_name: 'HEALTH PLAN OF SAN JOAQUIN',
    cv_payerID: 'SJHP',
  },
  {
    payer_name: 'STANDARD LIFE AND ACCIDENT INS CO-SECONDARY CLAIMS',
    cv_payerID: 'SLAICO',
  },
  {
    payer_name: 'SIMPLY HEALTHCARE PLANS, INC.',
    cv_payerID: 'SMPLH',
  },
  {
    payer_name: 'SANFORD HEALTH PLAN',
    cv_payerID: 'SNFDHP',
  },
  {
    payer_name: 'SENTINEL SECURITY LIFE',
    cv_payerID: 'SSLCO',
  },
  {
    payer_name: 'UNITEDHEALTHCARE STUDENT RESOURCES',
    cv_payerID: 'STDNT',
  },
  {
    payer_name: 'STATE FARM INSURANCE COMPANIES',
    cv_payerID: 'STFARM',
  },
  {
    payer_name: 'PROMINENCE HEALTH PLAN PPO/HMO',
    cv_payerID: 'STMRH',
  },
  {
    payer_name: 'PROMINENCE HEALTH PLAN OF TEXAS',
    cv_payerID: 'STMRHT',
  },
  {
    payer_name: 'SUMMACARE HEALTH PLAN',
    cv_payerID: 'SUMCHP',
  },
  {
    payer_name: 'SUTTER AND AETNA INSURANCE COMPANY',
    cv_payerID: 'SUTAET',
  },
  {
    payer_name: 'ST. VINCENT CATHOLIC MEDICAL CENTER NEW YORK',
    cv_payerID: 'SVMNY',
  },
  {
    payer_name: 'SENIOR WHOLE HEALTH OF MASSACHUSETTS',
    cv_payerID: 'SWHMA',
  },
  {
    payer_name: 'SENIOR WHOLE HEALTH NEW YORK',
    cv_payerID: 'SWHNY',
  },
  {
    payer_name: 'TRANSAMERICA PREMIER LIFE INSURANCE COMPANY',
    cv_payerID: 'TALI',
    State: 'IA',
  },
  {
    payer_name: 'THRIVENT FINANCIAL',
    cv_payerID: 'THRVNT',
  },
  {
    payer_name: 'THRIVENT FINANCIAL AID ASSOC FOR LUTHERAN MEDICARE',
    cv_payerID: 'THRVNT',
  },
  {
    payer_name: 'THRIVENT FINANCIAL LUTHERAN BROTHERHOOD MEDICARE',
    cv_payerID: 'THRVNT',
  },
  {
    payer_name: 'TENNESSEE BLUE CROSS',
    cv_payerID: 'TNBCBS',
    State: 'TN',
  },
  {
    payer_name: 'TENNESSEE BLUECARE/TENNCARE',
    cv_payerID: 'TNCAID',
  },
  {
    payer_name: 'TRICARE FOR LIFE',
    cv_payerID: 'TRCRU',
  },
  {
    payer_name: 'TRICARE - WEST REGION',
    cv_payerID: 'TRICAR',
  },
  {
    payer_name: 'TRICARE - EAST REGION',
    cv_payerID: 'TRICRE',
  },
  {
    payer_name: 'TRUSTMARK SMALL BUSINESS BENEFITS',
    cv_payerID: 'TRSMRK',
  },
  {
    payer_name: 'TRUE HEALTH NEW MEXICO',
    cv_payerID: 'TRUNM',
  },
  {
    payer_name: 'TEST MED',
    cv_payerID: 'TSTMED',
  },
  {
    payer_name: 'TEST MHS ',
    cv_payerID: 'TSTMHS',
  },
  {
    payer_name: 'TUFTS ASSOCIATED HEALTH PLAN',
    cv_payerID: 'TUFTS',
  },
  {
    payer_name: 'TEXAS BLUE CROSS',
    cv_payerID: 'TXBCBS',
    State: 'TX',
  },
  {
    payer_name: 'TEXAS MEDICAID',
    cv_payerID: 'TXCAID',
    State: 'TX',
  },
  {
    payer_name: 'TEXAS MEDICAID',
    cv_payerID: 'TXCAID',
  },
  {
    payer_name: 'TEXAS CHILDRENS HEALTH PLAN - CHIP',
    cv_payerID: 'TXCHIP',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF TEXAS',
    cv_payerID: 'TXMLNA',
  },
  {
    payer_name: 'UNITEDHEALTHCARE ARIZONA PHYSICIANS IPA',
    cv_payerID: 'UHC',
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cv_payerID: 'UHC',
    State: 'WI',
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cv_payerID: 'UHC',
    State: 'MO',
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cv_payerID: 'UHC',
    State: 'AR',
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cv_payerID: 'UHC',
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cv_payerID: 'UHC',
    State: 'SC',
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cv_payerID: 'UHC',
    State: 'FL',
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cv_payerID: 'UHC',
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cv_payerID: 'UHC',
    State: 'KY',
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cv_payerID: 'UHC',
    State: 'TX',
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cv_payerID: 'UHC',
    State: 'OH',
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cv_payerID: 'UHC',
    State: 'GA',
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cv_payerID: 'UHC',
    State: 'WA',
  },
  {
    payer_name: 'PREFERRED CARE PARTNERS',
    cv_payerID: 'UHC',
  },
  {
    payer_name: 'UNITEDHEALTHCARE OHIO MEDICAID',
    cv_payerID: 'UHC',
  },
  {
    payer_name: 'UNITEDHEALTHCARE OHIO MEDICAID VISION',
    cv_payerID: 'UHC',
  },
  {
    payer_name: 'MEDICA HEALTHCARE PLAN OF FLORIDA',
    cv_payerID: 'UHC',
  },
  {
    payer_name: 'MEDICA HEALTH PLAN',
    cv_payerID: 'UHC',
    State: 'MN',
  },
  {
    payer_name: 'MEDICA HEALTH PLAN',
    cv_payerID: 'UHC',
  },
  {
    payer_name: 'UNITEDHEALTHCARE WEST - PACIFICARE OF OREGON',
    cv_payerID: 'UHC',
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN OF MICHIGAN',
    cv_payerID: 'UHCGLH',
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN OF MISSOURI',
    cv_payerID: 'UHCMO',
  },
  {
    payer_name: 'ULTIMATE HEALTH PLANS',
    cv_payerID: 'ULTHP',
  },
  {
    payer_name: 'UNITED MEDICAL RESOURCES',
    cv_payerID: 'UMRWAU',
  },
  {
    payer_name: 'HEALTHCHOICE OKLAHOMA',
    cv_payerID: 'UMRWAU',
  },
  {
    payer_name: 'OKLAHOMA DEPARTMENT OF CORRECTIONS',
    cv_payerID: 'UMRWAU',
  },
  {
    payer_name: 'UMWA HEALTH AND RETIREMENT FUNDS',
    cv_payerID: 'UMWA',
  },
  {
    payer_name: 'UNICARE (TX, MA, KS, WV, RI, IL)',
    cv_payerID: 'UNICAR',
  },
  {
    payer_name: 'UNIVERSITY HEALTHCARE MARKETPLACE',
    cv_payerID: 'UNIVAZ',
  },
  {
    payer_name: 'UNIVERA',
    cv_payerID: 'UNIVNY',
    State: 'NY',
  },
  {
    payer_name: 'UNIVERA',
    cv_payerID: 'UNIVNY',
  },
  {
    payer_name: 'UNITED AMERICAN INSURANCE COMPANY',
    cv_payerID: 'UNTDA',
  },
  {
    payer_name: 'OPTUMHEALTH CARE SOLUTIONS',
    cv_payerID: 'UNTDRN',
  },
  {
    payer_name: 'UNIVERSITY OF UTAH HEALTH PLAN',
    cv_payerID: 'UNUTHP',
    State: 'UT',
  },
  {
    payer_name: 'UNIVERSITY OF UTAH HEALTH PLAN',
    cv_payerID: 'UNUTHP',
    State: 'MT',
  },
  {
    payer_name: 'UNIVERSITY FAMILY CARE/PHYSICIAN CARE ADVANTAGE',
    cv_payerID: 'UNVFC',
  },
  {
    payer_name: 'UPMC HEALTH PLAN',
    cv_payerID: 'UPMC',
    State: 'PA',
  },
  {
    payer_name: 'IRON ROAD HEALTHCARE',
    cv_payerID: 'UPREHS',
  },
  {
    payer_name: 'USAA - MEDICARE SUPPLEMENTAL',
    cv_payerID: 'USAAM',
  },
  {
    payer_name: 'USAA (U.S. AUTOMOBILE ASSOCIATION)',
    cv_payerID: 'USALCO',
  },
  {
    payer_name: 'UTAH MEDICAID',
    cv_payerID: 'UTCAID',
    State: 'UT',
  },
  {
    payer_name: 'UTAH BLUE CROSS - FEP',
    cv_payerID: 'UTFEPI',
    State: 'UT',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF UTAH',
    cv_payerID: 'UTMLNA',
    State: 'UT',
  },
  {
    payer_name: 'UTAH REGENCE BLUE CROSS BLUE SHIELD',
    cv_payerID: 'UTREBC',
    State: 'UT',
  },
  {
    payer_name: 'SELECTHEALTH',
    cv_payerID: 'UTSLHT',
  },
  {
    payer_name: 'VIRGINIA BLUE CROSS',
    cv_payerID: 'VABCBS',
    State: 'VA',
  },
  {
    payer_name: 'VIRGINIA MEDICAID',
    cv_payerID: 'VACAID',
    State: 'VA',
  },
  {
    payer_name: 'VETERANS AFFAIRS COMMUNITY CARE NETWORK RGN 1 2 3',
    cv_payerID: 'VAFEE',
  },
  {
    payer_name: 'CARELON BEHAVIORAL HEALTH',
    cv_payerID: 'VALOP',
  },
  {
    payer_name: 'VANTAGE HEALTH PLAN',
    cv_payerID: 'VANTAG  ',
  },
  {
    payer_name: 'VETERANS ADMINISTRATION FEE BASIS PROGRAMS',
    cv_payerID: 'VETFBP',
  },
  {
    payer_name: 'CHAMPVA - HAC',
    cv_payerID: 'VETHAC',
  },
  {
    payer_name: 'VIBRA HEALTH PLAN',
    cv_payerID: 'VIBRA',
  },
  {
    payer_name: 'VIVA HEALTH CARE AND VIVA MEDICARE',
    cv_payerID: 'VIVAHL',
  },
  {
    payer_name: 'VNS HEALTH',
    cv_payerID: 'VNSNY',
  },
  {
    payer_name: 'VERMONT BLUE CROSS',
    cv_payerID: 'VTBCBS',
    State: 'VT',
  },
  {
    payer_name: 'VERMONT MEDICAID INPATIENT',
    cv_payerID: 'VTCAID',
    State: 'VT',
  },
  {
    payer_name: 'VERMONT MEDICAID OUTPATIENT',
    cv_payerID: 'VTCAID',
    State: 'VT',
  },
  {
    payer_name: 'WASHINGTON MEDICAID',
    cv_payerID: 'WACAID',
  },
  {
    payer_name: 'WASHINGTON MEDICAID',
    cv_payerID: 'WACAID',
    State: 'WA',
  },
  {
    payer_name: 'COMMUNITY HEALTH PLAN OF WASHINGTON (CHPWA)',
    cv_payerID: 'WACHP',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF WASHINGTON',
    cv_payerID: 'WAMLNA',
  },
  {
    payer_name: 'LIFEWISE HEALTHPLAN OF OREGON',
    cv_payerID: 'WAPBC',
  },
  {
    payer_name: 'BLUE CROSS WA/AK PREMERA BLUE CROSS',
    cv_payerID: 'WAPBCS',
  },
  {
    payer_name: 'BLUE CROSS WA/AK PREMERA BLUE CROSS',
    cv_payerID: 'WAPBCS',
    State: 'AK',
  },
  {
    payer_name: 'BLUE CROSS WA/AK PREMERA BLUE CROSS',
    cv_payerID: 'WAPBCS',
    State: 'WA',
  },
  {
    payer_name: 'WASHINGTON REGENCE BLUE SHIELD',
    cv_payerID: 'WARBCS',
    State: 'WA',
  },
  {
    payer_name: 'WEBTPA',
    cv_payerID: 'WEBTPA',
  },
  {
    payer_name: 'CARE1ST HEALTH PLAN OF ARIZONA MEDICARE',
    cv_payerID: 'WELLCR',
  },
  {
    payer_name: 'CARE1ST HEALTH PLAN AZ MEDICAID DOS BEFORE 12/1/22',
    cv_payerID: 'WELLCR',
  },
  {
    payer_name: 'WELLCARE HEALTH PLANS',
    cv_payerID: 'WELLCR',
  },
  {
    payer_name: 'WISCONSIN BLUE CROSS',
    cv_payerID: 'WIBCBS',
    State: 'WI',
  },
  {
    payer_name: 'WISCONSIN BLUE CROSS',
    cv_payerID: 'WIBCBS',
  },
  {
    payer_name: 'WISCONSIN BLUE CROSS',
    cv_payerID: 'WIBCBS',
    State: 'WI',
  },
  {
    payer_name: 'WISCONSIN MEDICAID',
    cv_payerID: 'WICAID',
    State: 'WI',
  },
  {
    payer_name: 'WISCONSIN CHRONIC DISEASE PROGRAM',
    cv_payerID: 'WICDP',
  },
  {
    payer_name: 'WISCONSIN WELL WOMENS PROGRAM',
    cv_payerID: 'WIWWP',
  },
  {
    payer_name: 'WPS COMMERCIAL / REGULAR BUSINESS',
    cv_payerID: 'WPSCR',
  },
  {
    payer_name: 'WPS COMMERCIAL / REGULAR BUSINESS',
    cv_payerID: 'WPSCR',
    State: 'WI',
  },
  {
    payer_name: 'WESTERN HEALTH ADVANTAGE',
    cv_payerID: 'WSTHA',
  },
  {
    payer_name: 'WESTERN SOUTHERN LIFE GROUP',
    cv_payerID: 'WSTSL',
  },
  {
    payer_name: 'WEST VIRGINIA HIGHMARK BLUE CROSS BLUE SHIELD',
    cv_payerID: 'WVBCBS',
    State: 'WV',
  },
  {
    payer_name: 'WEST VIRGINIA FREEDOM BLUE MEDICARE ADVANTAGE',
    cv_payerID: 'WVBCBS',
    State: 'WV',
  },
  {
    payer_name: 'WEST VIRGINIA MEDICAID',
    cv_payerID: 'WVCAID',
    State: 'WV',
  },
  {
    payer_name: 'WYOMING BLUE CROSS',
    cv_payerID: 'WYBCBI',
    State: 'WY',
  },
  {
    payer_name: 'WYOMING MEDICAID',
    cv_payerID: 'WYCAID',
    State: 'WY',
  },
  {
    payer_name: 'ZING HEALTH',
    cv_payerID: 'ZINGIL',
  },
];
let onlyCSProfessionalRawArray = [
  {
    payer_name: '1199SEIU FAMILY OF FUNDS',
    cs_payerID: 13162,
  },
  {
    payer_name: 'BEHAVIORAL HEALTH SERV. INC. (BHSI)',
    cs_payerID: '00720',
    State: 'MN',
  },
  {
    payer_name: 'MINNESOTA BLUE CROSS AND BLUE SHIELD',
    cs_payerID: '00720',
    State: 'MN',
  },
  {
    payer_name: 'FIRST PLAN OF MINNESOTA',
    cs_payerID: '00720',
    State: 'MN',
  },
  {
    payer_name: 'MINNESOTA MEDICAID',
    cs_payerID: 411674742,
    State: 'MN',
  },
  {
    payer_name: 'NORTH DAKOTA MEDICAID',
    cs_payerID: 'NDDHSMED',
    State: 'ND',
  },
  {
    payer_name: 'AARP MEDICARE SUPPLEMENT PLANS',
    cs_payerID: 36273,
  },
  {
    payer_name: 'AARP',
    cs_payerID: 36273,
  },
  {
    payer_name: 'AARP HOSPITAL INDEMNITY PLANS',
    cs_payerID: 36273,
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF CALIFORNIA',
    cs_payerID: '128CA',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF FLORIDA',
    cs_payerID: '128FL',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF ILLINOIS',
    cs_payerID: 26337,
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF ILLINOIS - MMAI',
    cs_payerID: 26337,
  },
  {
    payer_name: 'AETNA BETTER HEALTH - IL MEDICAID',
    cs_payerID: 26337,
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF ILLINOIS - MEDICAID',
    cs_payerID: 68024,
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF KANSAS',
    cs_payerID: '128KS',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF LOUISIANA',
    cs_payerID: '128LA',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF MARYLAND',
    cs_payerID: '128MD',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF MICHIGAN',
    cs_payerID: '128MI',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF NEW JERSEY',
    cs_payerID: 46320,
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF NEW YORK',
    cs_payerID: 34734,
  },
  {
    payer_name: 'OHIO DUALS',
    cs_payerID: 50023,
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF PENNSYLVANIA',
    cs_payerID: 23228,
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF PENNSYLVANIA\\t',
    cs_payerID: 23228,
    State: 'PA',
  },
  {
    payer_name: 'AETNA BETTER HEALTH - PENNSYLVANIA MEDICAID',
    cs_payerID: 23228,
  },
  {
    payer_name: 'AETNA BETTER HEALTH KIDS',
    cs_payerID: 23228,
    State: 'PA',
  },
  {
    payer_name: 'AETNA BETTER HEALTH TX MEDICAID CHIP',
    cs_payerID: 38692,
    State: 'TX',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF TEXAS CHIP',
    cs_payerID: 38692,
    State: 'TX',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF TEXAS',
    cs_payerID: 38692,
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF TEXAS',
    cs_payerID: 38692,
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF WEST VIRGINIA',
    cs_payerID: '128WV',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS NEXT VIP',
    cs_payerID: 47073,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS NEXT FLORIDA',
    cs_payerID: 45408,
  },
  {
    payer_name: 'FIRST CHOICE NEXT SOUTH CAROLINA',
    cs_payerID: 57103,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS VIP CARE - DELAWARE DSNP',
    cs_payerID: 87406,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS VIP CARE - FLORIDA DSNP',
    cs_payerID: 88232,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS VIP CARE PLUS MICHIGAN',
    cs_payerID: 77013,
  },
  {
    payer_name: 'ADMINISTRATIVE CONCEPTS',
    cs_payerID: 22384,
  },
  {
    payer_name: 'CITY OF AMARILLO',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - OPEN ACCESS HMO',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - GOLDEN CHOICE (MEDICARE ADVANTAGE PLAN)',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - EPO',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - OPEN CHOICE (OC)',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - USACCESS',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA GOLDEN MEDICARE PLAN',
    cs_payerID: 60054,
  },
  {
    payer_name: 'INNOVATION HEALTH LEAP',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA  - AEXEL',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - MANAGED CHOICE (MC)',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA AFFORDABLE HEALTH CHOICES - SRC',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - HMO',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA HEALTH FUND (AHF)',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - TRADITIONAL CHOICE (TC)',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - ELECT CHOICE (EC)',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA LEAP',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA LIFE AND CASUALTY',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - CHOICE POS II',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - GOLDEN MEDICARE (MEDICARE ADVANTAGE PLAN)',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - INDEMNITY',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - PPO',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA AFFORDABLE HEALTH CHOICES',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - QPOS',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS DISTRICT OF COLUMBIA',
    cs_payerID: 77002,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS DELAWARE',
    cs_payerID: 77799,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS NEXT NORTH CAROLINA',
    cs_payerID: 83148,
  },
  {
    payer_name: 'ALABAMA BLUE SHIELD',
    cs_payerID: '00510',
    State: 'AL',
  },
  {
    payer_name: 'ALABAMA MEDICAID',
    cs_payerID: 752548221,
    State: 'AL',
  },
  {
    payer_name: 'ALLIANT HEALTH PLANS OF GEORGIA',
    cs_payerID: 58234,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS PA CHC ',
    cs_payerID: 77062,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS VIP CARE PA COMMHEALTHCHOICES',
    cs_payerID: 77062,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS VIP CARE',
    cs_payerID: 77062,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS VIP CARE PENNSYLVANIA',
    cs_payerID: 77062,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS OHIO',
    cs_payerID: 84243,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS PENNSYLVANIA',
    cs_payerID: 22248,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS NORTH CAROLINA ',
    cs_payerID: 81671,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS NEW HAMPSHIRE',
    cs_payerID: 87716,
  },
  {
    payer_name: 'AMERICAN POSTAL WORKERS UNION',
    cs_payerID: 44444,
  },
  {
    payer_name: 'ANTHEM HEALTHKEEPERS',
    cs_payerID: 26375,
  },
  {
    payer_name: 'UNIVERSITY HEALTH PLAN (UHP) OF NJ DOS &gt;03/01/2010',
    cs_payerID: 26375,
  },
  {
    payer_name: 'AMERICAID COMMUNITY CARE (MD)',
    cs_payerID: 26375,
  },
  {
    payer_name: 'AMERIGROUP CORPORATION (HOUSTON)',
    cs_payerID: 26375,
  },
  {
    payer_name: 'AMERIGROUP CORPORATION',
    cs_payerID: 26375,
  },
  {
    payer_name: 'AMERIGROUP IL',
    cs_payerID: 26375,
  },
  {
    payer_name: 'AMERIGROUP COMMUNITY CARE',
    cs_payerID: 26375,
  },
  {
    payer_name: 'AMERIKIDS - DALLAS/FT. WORTH',
    cs_payerID: 26375,
  },
  {
    payer_name: 'AMERIGROUP CORPORATION (FT WORTH)',
    cs_payerID: 26375,
  },
  {
    payer_name: 'AMERIGROUP NJ',
    cs_payerID: 26375,
  },
  {
    payer_name: 'AMERIGROUP IOWA',
    cs_payerID: 26375,
  },
  {
    payer_name: 'AMERIGROUP OF KANSAS',
    cs_payerID: 26375,
  },
  {
    payer_name: 'AMERIGROUP',
    cs_payerID: 26375,
  },
  {
    payer_name: 'AMERIGROUP FLORIDA INC',
    cs_payerID: 26375,
  },
  {
    payer_name: 'ANTARES MANAGEMENT SOLUTIONS',
    cs_payerID: 34192,
  },
  {
    payer_name: 'MUTUAL HEALTH SERVICES',
    cs_payerID: 34192,
  },
  {
    payer_name: 'ANTHEM MAINEHEALTH',
    cs_payerID: '00958',
  },
  {
    payer_name: 'APEXHEALTH',
    cs_payerID: 83112,
  },
  {
    payer_name: 'ARKANSAS MEDICAID',
    cs_payerID: 716007869,
    State: 'AR',
  },
  {
    payer_name: 'ASPIRUS MEDICARE ADVANTAGE',
    cs_payerID: 36483,
  },
  {
    payer_name: 'ASURIS NORTHWEST REGENCE',
    cs_payerID: 93221,
  },
  {
    payer_name: 'AETNA SSI',
    cs_payerID: 62118,
  },
  {
    payer_name: 'AULTCARE HEALTH INSURING CORPORATION ',
    cs_payerID: 'AULOH',
  },
  {
    payer_name: 'PRIMETIME HEALTH PLAN',
    cs_payerID: 'AULOH',
  },
  {
    payer_name: 'AULTCARE CORPORATION ',
    cs_payerID: 'AULOH',
  },
  {
    payer_name: 'AULTRA ADMINISTRATIVE GROUP',
    cs_payerID: 'AULOH',
  },
  {
    payer_name: 'AULTCARE ',
    cs_payerID: 'AULOH',
  },
  {
    payer_name: 'AULTCARE INSURANCE COMPANY',
    cs_payerID: 'AULOH',
  },
  {
    payer_name: 'AVMED, INC.',
    cs_payerID: 59274,
  },
  {
    payer_name: 'ARIZONA BLUE SHIELD FEP',
    cs_payerID: 53589,
    State: 'AZ',
  },
  {
    payer_name: 'ARIZONA BLUE SHIELD',
    cs_payerID: 53589,
    State: 'AZ',
  },
  {
    payer_name: 'HEALTH CHOICE ARIZONA',
    cs_payerID: 62179,
  },
  {
    payer_name: 'MERCY CARE PLAN',
    cs_payerID: 86052,
  },
  {
    payer_name: 'BLUE CROSS COMPLETE OF MICHIGAN',
    cs_payerID: 32002,
  },
  {
    payer_name: 'BLUE MEDICARE ADVANTAGE',
    cs_payerID: '00772',
  },
  {
    payer_name: 'BANNER MEDICARE ADVANTAGE PRIME HMO (BMAH)',
    cs_payerID: 84323,
  },
  {
    payer_name: 'BANNER MEDICARE ADVANTAGE PLUS PPO (BMAP)',
    cs_payerID: 84324,
  },
  {
    payer_name: 'BRAVEN HEALTH',
    cs_payerID: 84367,
  },
  {
    payer_name: 'BANNER UNIVERSITY FAMILY CARE (UNIVER OF AZ HLTH)',
    cs_payerID: 66901,
  },
  {
    payer_name: 'BCBS OF WESTERN NEW YORK MEDICAID / CHP',
    cs_payerID: '00246',
  },
  {
    payer_name: 'CALIFORNIA ANTHEM BLUE CROSS',
    cs_payerID: 47198,
  },
  {
    payer_name: 'ANTHEM BLUE CROSS',
    cs_payerID: 47198,
  },
  {
    payer_name: 'MOTION PICTURE INDUSTRY PENSIONS AND HEALTH PLAN',
    cs_payerID: 47198,
  },
  {
    payer_name: 'ANTHEM BLUE CROSS CALIFORNIA',
    cs_payerID: 47198,
  },
  {
    payer_name: 'WRITERS GUILD INDUSTRY HEALTH PLAN',
    cs_payerID: 47198,
  },
  {
    payer_name: 'DIRECTORS GUILD OF AMERICA ',
    cs_payerID: 47198,
  },
  {
    payer_name: 'ANTHEM BC PARTNERSHIP',
    cs_payerID: 47198,
  },
  {
    payer_name: 'CAL MEDICONNECT',
    cs_payerID: 47198,
    State: 'CA',
  },
  {
    payer_name: 'CALIFORNIA FIELD IRONWORKERS TRUST FUNDS',
    cs_payerID: 47198,
    State: 'CA',
  },
  {
    payer_name: 'CALIFORNIA BLUE SHIELD',
    cs_payerID: 94036,
    State: 'CA',
  },
  {
    payer_name: 'BLUE SHIELD OF CALIFORNIA PROMISE HEALTH PLAN',
    cs_payerID: 57115,
    State: 'CA',
  },
  {
    payer_name: 'CARE 1ST PARTNER PLAN LLC',
    cs_payerID: 57115,
    State: 'CA',
  },
  {
    payer_name: 'CALIFORNIA MEDI-CAL',
    cs_payerID: 610442,
    State: 'CA',
  },
  {
    payer_name: 'CALIFORNIA CHILDRENS SERVICES',
    cs_payerID: 610442,
    State: 'CA',
  },
  {
    payer_name: 'MOLINA DUAL OPTIONS',
    cs_payerID: 38333,
    State: 'CA',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF CALIFORNIA',
    cs_payerID: 38333,
    State: 'CA',
  },
  {
    payer_name: 'CARE N CARE INSURANCE CO',
    cs_payerID: 66010,
  },
  {
    payer_name: 'CLEAR SPRING HEALTH',
    cs_payerID: 85468,
  },
  {
    payer_name: 'CHRISTIAN CARE MINISTRIES',
    cs_payerID: 59355,
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - OHIO',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - FLORIDA',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - WISCONSIN',
    cs_payerID: 68068,
  },
  {
    payer_name: 'GROUP PRACTICE AFFILIATES',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - INDIANA',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - GEORGIA',
    cs_payerID: 68068,
  },
  {
    payer_name: 'INTEGRATED MENTAL HEALTH SERVICES ',
    cs_payerID: 68068,
  },
  {
    payer_name: 'INTEGRATED MENTAL HEALTH SERVICES (IMHS)',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - TEXAS',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - KANSAS',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - AZ DOS BEFORE 10/18',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - SOUTH CAROLINA',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - ILLINOIS',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - MISSOURI',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - MISSISSIPPI',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CHRISTUS HEALTH - USFHP',
    cs_payerID: 90551,
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF VIRGINIA',
    cs_payerID: '128VA',
  },
  {
    payer_name: 'HEALTHSOURCE OF NEW HAMPSHIRE',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE OF NEW YORK',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE OF OHIO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - HMO (CHP)',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA PPO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CGLIC, MILWAUKEE',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - HOUSTON',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - NORTHERN NEW JERSEY',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - NASHVILLE',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - SOUTHERN NEW JERSEY',
    cs_payerID: 62308,
  },
  {
    payer_name: 'KERN PPO - CALIFORNIA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE PROVIDENT',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE OF ARKANSAS (MEDICARE)',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE OF NORTH TEXAS',
    cs_payerID: 62308,
  },
  {
    payer_name: 'EQUICOR/EQUITABLE',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - CONNECTICUT',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - NEW YORK',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - ORLANDO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - PHOENIX',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - SOUTHERN CALIFORNIA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - SOUTHERN FLORIDA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - ST LOUIS',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - WASHINGTON',
    cs_payerID: 62308,
  },
  {
    payer_name: 'EQUICOR HEALTH PLAN - HOUSTON',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA INTERNATIONAL EXPATRIATE BENEFITS',
    cs_payerID: 62308,
  },
  {
    payer_name: 'SMARTHEALTH EMPLOYEE PLAN ONLY',
    cs_payerID: 62308,
  },
  {
    payer_name: 'UFCW LOCAL 1529',
    cs_payerID: 62308,
  },
  {
    payer_name: 'ALBUQUERQUE PPO - NEW MEXICO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - CALIFORNIA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - NORTHERN CALIFORNIA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - OKLAHOMA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - TAMPA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - TULSA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'OCALA PPO - FLORIDA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'PORTLAND PPO - OREGON',
    cs_payerID: 62308,
  },
  {
    payer_name: 'NALC/AFFORDABLE',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLANS',
    cs_payerID: 62308,
  },
  {
    payer_name: 'ARKANSAS BEST CORPORATION - CHOICE BENEFITS',
    cs_payerID: 62308,
  },
  {
    payer_name: 'SETON HEALTH PLAN',
    cs_payerID: 62308,
    State: 'TX',
  },
  {
    payer_name: 'COLLECTIVE HEALTH',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE OF NORTH CAROLINA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE OF TENNESSEE',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE OF MASSACHUSETTS',
    cs_payerID: 62308,
  },
  {
    payer_name: 'EQUICOR PPO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - MASSACHUSETTS',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - PENNSYLVANIA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - SALINAS',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - SAN DIEGO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - WICHITA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'GHC INDIVIDUAL PLANS',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - ATLANTA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'SPECIAL AGENT MUTUAL BENEFIT ASSOCIATION',
    cs_payerID: 62308,
  },
  {
    payer_name: 'SAMBA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - OSCAR',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - CIGNA PREMIER PLUS',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - DAYTON',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - DELAWARE',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - DENVER',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - GEORGIA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - SALT LAKE CITY',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - TUCSON',
    cs_payerID: 62308,
  },
  {
    payer_name: 'JACKSON PPO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - KNOXVILLE PPO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'APWU HEALTH PLAN (ALL STATES EXCEPT USVI)',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE OF KENTUCKY',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE OF SOUTH CAROLINA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - CHARLOTTE',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - CINCINNATI',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - COLUMBUS',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - DALLAS',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - KANSAS CITY',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - MEMPHIS',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - NORTHERN LOUISIANA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'JACKSONVILLE PPO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'SACRAMENTO PPO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE OF MAINE',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - CHICAGO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - CLEVELAND',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - LOS ANGELES',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - LOUISIANA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - RALEIGH',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - RICHMOND',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA - DENTAL',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - COMED',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE OF INDIANA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA (CONNECTICUT GENERAL)',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - MID ATLANTIC',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - SAN FRANCISCO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CLEAR HEALTH ALLIANCE',
    cs_payerID: 'CLEAR',
  },
  {
    payer_name: 'WISCONSIN MEDICARE',
    cs_payerID: '06302',
    State: 'WI',
  },
  {
    payer_name: 'MINNESOTA MEDICARE',
    cs_payerID: '06202',
    State: 'MN',
  },
  {
    payer_name: 'NORTHERN CALIFORNIA MEDICARE',
    cs_payerID: '01112',
    State: 'CA',
  },
  {
    payer_name: 'ILLINOIS MEDICARE',
    cs_payerID: '06102',
    State: 'IL',
  },
  {
    payer_name: 'IOWA MEDICARE',
    cs_payerID: '05102',
    State: 'IA',
  },
  {
    payer_name: 'TEXAS MEDICARE',
    cs_payerID: '04412',
    State: 'TX',
  },
  {
    payer_name: 'MISSOURI MEDICARE EASTERN',
    cs_payerID: '05302',
    State: 'MO',
  },
  {
    payer_name: 'VIRGINIA MEDICARE',
    cs_payerID: 11302,
    State: 'VA',
  },
  {
    payer_name: 'RETIRED RAILROAD MEDICARE',
    cs_payerID: 'C00882',
  },
  {
    payer_name: 'SOUTHERN CALIFORNIA MEDICARE',
    cs_payerID: '01182',
    State: 'CA',
  },
  {
    payer_name: 'INDIANA MEDICARE',
    cs_payerID: '08102',
    State: 'IN',
  },
  {
    payer_name: 'NEVADA MEDICARE',
    cs_payerID: '01312',
    State: 'NV',
  },
  {
    payer_name: 'OHIO MEDICARE',
    cs_payerID: 15202,
    State: 'OH',
  },
  {
    payer_name: 'FLORIDA MEDICARE',
    cs_payerID: '09102',
    State: 'FL',
  },
  {
    payer_name: 'COLORADO MEDICARE',
    cs_payerID: '04112',
    State: 'CO',
  },
  {
    payer_name: 'WEST VIRGINIA MEDICARE',
    cs_payerID: 11402,
    State: 'WV',
  },
  {
    payer_name: 'NEBRASKA MEDICARE',
    cs_payerID: '05402',
    State: 'NE',
  },
  {
    payer_name: 'CONNECTICUT MEDICARE',
    cs_payerID: 13102,
    State: 'CT',
  },
  {
    payer_name: 'TENNESSEE MEDICARE',
    cs_payerID: 10312,
    State: 'TN',
  },
  {
    payer_name: 'ARIZONA MEDICARE',
    cs_payerID: '03102',
    State: 'AZ',
  },
  {
    payer_name: 'NEW MEXICO MEDICARE',
    cs_payerID: '04212',
    State: 'NM',
  },
  {
    payer_name: 'OKLAHOMA MEDICARE',
    cs_payerID: '04312',
    State: 'OK',
  },
  {
    payer_name: 'OREGON MEDICARE',
    cs_payerID: '02302',
    State: 'OR',
  },
  {
    payer_name: 'LOUISIANA MEDICARE',
    cs_payerID: '07202',
    State: 'LA',
  },
  {
    payer_name: 'MICHIGAN MEDICARE',
    cs_payerID: '08202',
    State: 'MI',
  },
  {
    payer_name: 'WASHINGTON MEDICARE',
    cs_payerID: '02402',
    State: 'WA',
  },
  {
    payer_name: 'NEW YORK MEDICARE (UPSTATE)',
    cs_payerID: 13282,
    State: 'NY',
  },
  {
    payer_name: 'NORTH CAROLINA MEDICARE ',
    cs_payerID: 11502,
    State: 'NC',
  },
  {
    payer_name: 'GEORGIA MEDICARE',
    cs_payerID: 10212,
    State: 'GA',
  },
  {
    payer_name: 'MISSISSIPPI MEDICARE',
    cs_payerID: '07302',
    State: 'MS',
  },
  {
    payer_name: 'SOUTH CAROLINA MEDICARE',
    cs_payerID: 11202,
    State: 'SC',
  },
  {
    payer_name: 'NORTH DAKOTA MEDICARE',
    cs_payerID: '03302',
    State: 'ND',
  },
  {
    payer_name: 'ARKANSAS MEDICARE',
    cs_payerID: '07102',
    State: 'AR',
  },
  {
    payer_name: 'DELAWARE MEDICARE',
    cs_payerID: 12102,
    State: 'DE',
  },
  {
    payer_name: 'PENNSYLVANIA MEDICARE',
    cs_payerID: 12502,
    State: 'PA',
  },
  {
    payer_name: 'DISTRICT OF COLUMBIA METROPOLITAN AREA MEDICARE',
    cs_payerID: 12202,
    State: 'DC',
  },
  {
    payer_name: 'VIRGINIA MEDICARE (ALEX, ARLGTN, FAIRFAX',
    cs_payerID: 12202,
    State: 'VA',
  },
  {
    payer_name: 'KENTUCKY MEDICARE',
    cs_payerID: 15102,
    State: 'KY',
  },
  {
    payer_name: 'KANSAS MEDICARE',
    cs_payerID: '05202',
    State: 'KS',
  },
  {
    payer_name: 'MARYLAND MEDICARE (MONTG, PRINCE GEORGE)',
    cs_payerID: 12202,
    State: 'MD',
  },
  {
    payer_name: 'IDAHO MEDICARE',
    cs_payerID: '02202',
    State: 'ID',
  },
  {
    payer_name: 'ALABAMA MEDICARE',
    cs_payerID: 10112,
    State: 'AL',
  },
  {
    payer_name: 'MASSACHUSETTS MEDICARE',
    cs_payerID: 14212,
    State: 'MA',
  },
  {
    payer_name: 'NEW HAMPSHIRE MEDICARE',
    cs_payerID: 14312,
    State: 'NH',
  },
  {
    payer_name: 'VERMONT MEDICARE',
    cs_payerID: 14512,
    State: 'VT',
  },
  {
    payer_name: 'MAINE MEDICARE',
    cs_payerID: 14112,
    State: 'ME',
  },
  {
    payer_name: 'NEW YORK EMPIRE MEDICARE',
    cs_payerID: 13202,
    State: 'NY',
  },
  {
    payer_name: 'MEDICARE OF NEW YORK DOWNSTATE',
    cs_payerID: 13202,
    State: 'NY',
  },
  {
    payer_name: 'MISSOURI NORTHWEST MEDICARE - KANSAS CITY, MO',
    cs_payerID: '05302',
    State: 'MO',
  },
  {
    payer_name: 'MONTANA MEDICARE',
    cs_payerID: '03202',
    State: 'MT',
  },
  {
    payer_name: 'NEW YORK MEDICARE GHI',
    cs_payerID: 13292,
    State: 'NY',
  },
  {
    payer_name: 'MARYLAND MEDICARE',
    cs_payerID: 12302,
    State: 'MD',
  },
  {
    payer_name: 'RHODE ISLAND MEDICARE',
    cs_payerID: 14412,
    State: 'RI',
  },
  {
    payer_name: 'MEDICARE DME MAC JURISDICTION A',
    cs_payerID: 16013,
  },
  {
    payer_name: 'MEDICARE DME MAC JURISDICTION B',
    cs_payerID: 17013,
  },
  {
    payer_name: 'MEDICARE DME MAC JURISDICTION C',
    cs_payerID: 18003,
  },
  {
    payer_name: 'MEDICARE DME MAC JURISDICTION D',
    cs_payerID: 19003,
  },
  {
    payer_name: 'NEBRASKA TOTAL CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'SILVER SUMMIT HEALTH PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'SUNSHINE HEALTH ',
    cs_payerID: 68069,
  },
  {
    payer_name: 'PEACH STATE HEALTH PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'SUPERIOR MEDICARE ADVANTAGE PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'SUPERIOR HEALTH PLAN - TEXAS',
    cs_payerID: 68069,
  },
  {
    payer_name: 'MHS HEALTH WISCONSIN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'MANAGED HEALTH SERVICES - INDIANA',
    cs_payerID: 68069,
  },
  {
    payer_name: 'HOOSIER CARE CONNECT',
    cs_payerID: 68069,
  },
  {
    payer_name: 'HEALTH NET OF CALIFORNIA AND OREGON (CLAIMS)',
    cs_payerID: 95567,
    State: 'CA',
  },
  {
    payer_name: 'HEALTH NET COMMUNITY SOLUTIONS/CALVIVA HEALTH',
    cs_payerID: 95567,
    State: 'CA',
  },
  {
    payer_name: 'TOTAL CAROLINA CARE',
    cs_payerID: 68069,
    State: 'SC',
  },
  {
    payer_name: 'ABSOLUTE TOTAL CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'BUCKEYE COMMUNITY HEALTH - OHIO',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ADVANTAGE BY BUCKEYE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'MAGNOLIA HEALTH PLAN - MISSISSIPPI',
    cs_payerID: 68069,
  },
  {
    payer_name: 'LOUISIANA HEALTH CONNECTIONS',
    cs_payerID: 68069,
  },
  {
    payer_name: 'HOMESTATE HEALTH PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'COORDINATED CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'SUNFLOWER HEALTH PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'NEW HAMPSHIRE HEALTHY FAMILIES',
    cs_payerID: 68069,
    State: 'NH',
  },
  {
    payer_name: 'GRANITE STATE HEALTH PLAN',
    cs_payerID: 68069,
    State: 'NH',
  },
  {
    payer_name: 'CALIFORNIA HEALTH AND WELLNESS',
    cs_payerID: 68069,
  },
  {
    payer_name: 'AMBETTER FROM PEACH STATE HEALTH PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'AMBETTER ILLINICARE HEALTH',
    cs_payerID: 68069,
  },
  {
    payer_name: 'AMBETTER NEW HAMPSHIRE HEALTHY FAMILIES',
    cs_payerID: 68069,
  },
  {
    payer_name: 'PA HEALTH AND WELLNESS',
    cs_payerID: 68069,
  },
  {
    payer_name: 'HEALTH NET INDIVIDUAL MEDICARE ADVANTAGE PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'HEALTH NET OF CA, OR',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY HEALTH NET',
    cs_payerID: 68069,
  },
  {
    payer_name: 'HEALTH NET OF CA, OR - DOS &gt;12/31/17',
    cs_payerID: 68069,
  },
  {
    payer_name: 'HEALTH NET INDIVIDUAL FAMILY PLAN - DOS &gt;12/31/17',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM ARIZONA COMPLETE CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL DSNP ',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM HEALTH NET',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE SPECIALTY NO PREMIUM (CSNP)',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM HEALTH NET',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE DUAL LIBERTY (DSNP)',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE GIVEBACK (HMO)',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM ARIZONA COMPLETE CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE NO PREMIUM ESSENTIALS (HMO)',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE ASSIST (HMO)',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE NO PREMIUM (HMO)',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM ARKANSAS HEALTH &amp; WELLNES',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM ARKANSAS HEALTH AND WELLNESS',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM SUNSHINE HEALTH',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM SUNSHINE HEALTH',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM PEACH STATE HEALTH PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM PEACH STATE HEALTH PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM MANAGED HEALTH SERVICES',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM MANAGED HEALTH SERVICES',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM SUNFLOWER HEALTH PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM SUNFLOWER HEALTH PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM LOUISIANA HEALTHCARE CONNECTIONS',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM LOUISIANA HEALTHCARE CONN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM MAGNOLIA HEALTH',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM MAGNOLIA HEALTH',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM HOME STATE HEALTH',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM HOME STATE HEALTH',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM BUCKEYE HEALTH PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM BUCKEYE HEALTH PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM PA HEALTH &amp; WELLNESS',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM PA HEALTH AND WELLNESS',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM ABSOLUTE TOTAL CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM ABSOLUTE TOTAL CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM SUPERIOR HEALTHPLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM SUPERIOR HEALTHPLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM MANAGED HEALTH SEVICES WI',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM MANAGED HEALTH SERVICES HEALTH WI',
    cs_payerID: 68069,
  },
  {
    payer_name: 'AMBETTER FROM HEALTH NET',
    cs_payerID: 68069,
  },
  {
    payer_name: 'AMBETTER FROM HOMESTATE HEALTH',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ARIZONA COMPLETE HEALTH',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM WESTERN SKY COMMUNITY CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM WESTRN SKY COMMUNITY CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WESTERN SKY COMMUNITY CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'AMBETTER FROM SUNFLOWER HEALTH PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ARKANSAS TOTAL CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'IOWA TOTAL CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ASCENSION COMPLETE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'AMBETTER FROM PENNSYLVANIA HEALTH AND WELLNESS',
    cs_payerID: 68069,
  },
  {
    payer_name: 'CAROLINA COMPLETE HEALTH CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'AMBETTER FROM MERIDIAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'BUCKEYE OHIO MEDICAID',
    cs_payerID: '0004202',
  },
  {
    payer_name: 'BUCKEYE OHIO MEDICAID VISION',
    cs_payerID: 'V004202',
  },
  {
    payer_name: 'ANTHEM MEDIBLUE PLUS (HMO)',
    cs_payerID: '00050',
    State: 'CO',
  },
  {
    payer_name: 'COLORADO BLUE SHIELD',
    cs_payerID: '00050',
    State: 'CO',
  },
  {
    payer_name: 'ANTHEM DUAL ADVANTAGE (HMO SNP)',
    cs_payerID: '00050',
    State: 'CO',
  },
  {
    payer_name: 'HEALTH FIRST COLORADO FKA COLORADO MEDICAID\\t',
    cs_payerID: 77016,
    State: 'CO',
  },
  {
    payer_name: 'HEALTH FIRST COLORADO FKA COLORADO MEDICAID',
    cs_payerID: 77016,
    State: 'CO',
  },
  {
    payer_name: 'KAISER PERMANENTE',
    cs_payerID: 'RH003',
    State: 'CO',
  },
  {
    payer_name: 'KAISER PERMANENTE OF COLORADO',
    cs_payerID: 'RH003',
    State: 'CO',
  },
  {
    payer_name: 'COLLECTIVE HEALTH',
    cs_payerID: 36479,
  },
  {
    payer_name: 'COMMUNITY HEALTH CHOICE',
    cs_payerID: 48145,
  },
  {
    payer_name: 'COMMUNITY HEALTH CHOICE TEXAS - HIM',
    cs_payerID: 60495,
  },
  {
    payer_name: 'CONNECTICARE VIP MEDICARE ADVANTAGE',
    cs_payerID: 78375,
  },
  {
    payer_name: 'CONNECTICARE, INC.',
    cs_payerID: '06105',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF KENTUCKY',
    cs_payerID: '128KY',
  },
  {
    payer_name: 'CREATE',
    cs_payerID: 'CREA8',
  },
  {
    payer_name: 'CARESOURCE OF OHIO',
    cs_payerID: 31114,
  },
  {
    payer_name: 'CARESOURCE THE COMMUNITY TRANSITION PLAN',
    cs_payerID: 31114,
    State: 'OH',
  },
  {
    payer_name: 'CARESOURCE ADVANTAGE',
    cs_payerID: 31114,
    State: 'OH',
  },
  {
    payer_name: 'CARESOURCE OHIO MEDICAID',
    cs_payerID: '0003150',
  },
  {
    payer_name: 'CARESOURCE OHIO MEDICAID VISION',
    cs_payerID: 'CSVIS001',
  },
  {
    payer_name: 'TRUSTMARK HEALTH BENEFITS (CORESOURCE DETROIT)',
    cs_payerID: 38225,
  },
  {
    payer_name: 'TRUSTMARK HEALTH BENEFITS (CORESOURCE OH)',
    cs_payerID: 35183,
  },
  {
    payer_name: 'TRUSTMARK HEALTH (CORESOURCE AZ IL IN MD MN NC PA)',
    cs_payerID: 35182,
  },
  {
    payer_name: 'TRUSTMARK HEALTH BENEFITS (CORESOURCE LITTLE ROCK)',
    cs_payerID: 75136,
  },
  {
    payer_name: 'TRUSTMARK HEALTH BENEFITS (CORESOURCE INTERNAL)',
    cs_payerID: 35187,
  },
  {
    payer_name: 'TRUSTMARK HEALTH BENEFITS (CORESOURCE KC)',
    cs_payerID: 48117,
  },
  {
    payer_name: 'CARESOURCE PASSE OF ARKANSAS',
    cs_payerID: 'ARCS1',
  },
  {
    payer_name: 'CARESOURCE OF INDIANA',
    cs_payerID: 'INCS1',
    State: 'IN',
  },
  {
    payer_name: 'CARESOURCE HEALTHY INDIANA PLAN (HIP)',
    cs_payerID: 'INCS1',
    State: 'IN',
  },
  {
    payer_name: 'CARESOURCE HOOSIER HEALTHWISE (HHW)',
    cs_payerID: 'INCS1',
    State: 'IN',
  },
  {
    payer_name: 'CARESOURCE OF KENTUCKY',
    cs_payerID: 'KYCS1',
  },
  {
    payer_name: 'HUMANA CARESOURCE OF KY',
    cs_payerID: 'KYCS1',
  },
  {
    payer_name: 'CARESOURCE NORTH CAROLINA',
    cs_payerID: 'NCCS1',
  },
  {
    payer_name: 'CARESOURCE OF WEST VIRGINIA',
    cs_payerID: 'WVCS1',
  },
  {
    payer_name: 'CONNECTICUT BLUE SHIELD',
    cs_payerID: '00060',
    State: 'CT',
  },
  {
    payer_name: 'AETNA BETTER HEALTH PLAN',
    cs_payerID: 61274678,
  },
  {
    payer_name: 'CONNECTICUT MEDICAID',
    cs_payerID: 61274678,
  },
  {
    payer_name: 'MASS ADVANTAGE',
    cs_payerID: 86220,
  },
  {
    payer_name: 'COUNTYCARE HEALTH PLAN',
    cs_payerID: '06541',
  },
  {
    payer_name: 'BLUE SHIELD OF NATIONAL CAPITOL AREA - CAREFIRST',
    cs_payerID: 'SB580',
    State: 'DC',
  },
  {
    payer_name: 'DISTRICT OF COLUMBIA MEDICAID',
    cs_payerID: 77033,
    State: 'DC',
  },
  {
    payer_name: 'DEANCAREHMO',
    cs_payerID: 39113,
  },
  {
    payer_name: 'WELLFIRST HEALTH',
    cs_payerID: 39113,
  },
  {
    payer_name: 'DEAN HEALTH PLANS',
    cs_payerID: 39113,
  },
  {
    payer_name: "CHILDREN'S COMMUNITY HEALTH PLAN",
    cs_payerID: 39113,
  },
  {
    payer_name: 'DELAWARE BLUE SHIELD - HIGHMARK',
    cs_payerID: '00570',
    State: 'DE',
  },
  {
    payer_name: 'DIAMOND PLAN',
    cs_payerID: 345724166,
  },
  {
    payer_name: 'DELAWARE MEDICAID',
    cs_payerID: 345724166,
  },
  {
    payer_name: 'EBMS HEALTHEWEB',
    cs_payerID: 81039,
  },
  {
    payer_name: 'EMPLOYEE BENEFIT MANAGEMENT SERV (EBMS) HEALTHEWEB',
    cs_payerID: 81039,
  },
  {
    payer_name: 'CIGNA HEALTHSPRING MARYLAND/PENNSYLNAVIA',
    cs_payerID: 52192,
  },
  {
    payer_name: 'EMBLEMHEALTH PLAN INC HMO',
    cs_payerID: 25531,
  },
  {
    payer_name: 'EMBLEM HEALTH/HEALTH INSURANCE PLAN OF GREATER NY',
    cs_payerID: 55247,
  },
  {
    payer_name: 'EMBLEMHEALTH MANAGED LTC',
    cs_payerID: 55247,
  },
  {
    payer_name: 'HIP-HEALTH INSURANCE PLAN OF GREATER NY',
    cs_payerID: 55247,
  },
  {
    payer_name: 'EMBLEM HEALTH MEDICARE CHOICE VALUE',
    cs_payerID: 55247,
  },
  {
    payer_name: 'EMBLEMHEALTH PLAN INC MCR',
    cs_payerID: 13551,
  },
  {
    payer_name: 'VYTRA HEALTHCARE',
    cs_payerID: 22264,
  },
  {
    payer_name: 'EMPIRE HEALTHCHOICE HMO NY',
    cs_payerID: '00803',
    State: 'NY',
  },
  {
    payer_name: 'EMPIRE BCBS HEALTHPLUS',
    cs_payerID: '00803',
  },
  {
    payer_name: 'NEW YORK EMPIRE BLUE SHIELD - HEALTHNET',
    cs_payerID: '00803',
  },
  {
    payer_name: 'EMPIRE BCBS HEALTHPLUS FIDA ADVANTAGE PLAN',
    cs_payerID: '00803',
  },
  {
    payer_name: 'NEW YORK EMPIRE BLUE SHIELD',
    cs_payerID: '00803',
    State: 'NY',
  },
  {
    payer_name: 'EMPOWER HEALTHCARE SOLUTIONS',
    cs_payerID: 12956,
  },
  {
    payer_name: 'SIGNIFICA BENEFIT SERVICES, INC.',
    cs_payerID: 23250,
  },
  {
    payer_name: 'FALLON TOTAL CARE',
    cs_payerID: 22254,
  },
  {
    payer_name: 'FALLON COMMUNITY HEALTH PLAN',
    cs_payerID: 22254,
  },
  {
    payer_name: 'FIRST CHOICE VIP CARE',
    cs_payerID: 32456,
  },
  {
    payer_name: 'FIRST CHOICE VIP CARE PLUS BY SELECT HEALTH OF SC',
    cs_payerID: 77009,
  },
  {
    payer_name: 'WELLCARE BY FIDELIS CARE',
    cs_payerID: 11315,
  },
  {
    payer_name: 'FIDELIS DUAL ADVANTAGE NYC',
    cs_payerID: 11315,
  },
  {
    payer_name: 'FIDELIS CARE OF NEW YORK',
    cs_payerID: 11315,
  },
  {
    payer_name: 'FIDELIS CARE',
    cs_payerID: 11315,
  },
  {
    payer_name: 'NEW YORK STATE CATHOLIC HEALTH PLAN',
    cs_payerID: 11315,
  },
  {
    payer_name: 'FIDELIS CARE AT HOME',
    cs_payerID: 11315,
  },
  {
    payer_name: 'FIDELIS MEDICAID ADVANTAGE PLUS',
    cs_payerID: 11315,
    State: 'NY',
  },
  {
    payer_name: 'CENTERCARE',
    cs_payerID: 11315,
  },
  {
    payer_name: 'FLORIDA BLUE SHIELD',
    cs_payerID: '00590',
    State: 'FL',
  },
  {
    payer_name: 'FLORIDA MEDICAID',
    cs_payerID: 77027,
    State: 'FL',
  },
  {
    payer_name: 'FLORIDA HEALTH CARE PLAN',
    cs_payerID: 59322,
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF FLORIDA',
    cs_payerID: 51062,
  },
  {
    payer_name: 'FARM BUREAU HEALTH PLANS MAPD',
    cs_payerID: 'RP061',
  },
  {
    payer_name: 'PAYER FUSION',
    cs_payerID: 27048,
  },
  {
    payer_name: 'GEORGIA BANKERS',
    cs_payerID: '00601',
    State: 'GA',
  },
  {
    payer_name: 'GEORGIA BLUE SHIELD',
    cs_payerID: '00601',
    State: 'GA',
  },
  {
    payer_name: 'GEORGIA BLUE CHOICE',
    cs_payerID: '00601',
    State: 'GA',
  },
  {
    payer_name: 'STATE MERIT',
    cs_payerID: '00601',
    State: 'GA',
  },
  {
    payer_name: 'GEORGIA MEDICAID',
    cs_payerID: 77034,
    State: 'GA',
  },
  {
    payer_name: 'GEORGIA MEDICAID ANESTHESIA',
    cs_payerID: 77034,
    State: 'GA',
  },
  {
    payer_name: 'GEHA CONNECTION DENTAL PLUS',
    cs_payerID: 44054,
    State: 'TX',
  },
  {
    payer_name: 'GEHA CONNECTION DENTAL FEDERAL',
    cs_payerID: 44054,
    State: 'TX',
  },
  {
    payer_name: 'GEHA STANDARD OPTION',
    cs_payerID: 44054,
    State: 'TX',
  },
  {
    payer_name: 'PRE-EXISTING CONDITION INSURANCE PLAN (PCIP)',
    cs_payerID: 44054,
    State: 'TX',
  },
  {
    payer_name: 'STATE OF TEXAS DENTAL',
    cs_payerID: 44054,
    State: 'TX',
  },
  {
    payer_name: 'GEHA HIGH DEDUCTIBLE HEALTH PLAN (HDHP)',
    cs_payerID: 44054,
    State: 'TX',
  },
  {
    payer_name: 'GEHA HIGH OPTION',
    cs_payerID: 44054,
    State: 'TX',
  },
  {
    payer_name: 'FEDERAL EMPLOYEES HEALTH BENEFIT PROGRAM (FEHB)',
    cs_payerID: 44054,
    State: 'TX',
  },
  {
    payer_name: 'FEDERAL EMPLOYEES DENTAL AND VISION (FEDVIP)',
    cs_payerID: 44054,
    State: 'TX',
  },
  {
    payer_name: 'GEISINGER HEALTH PLAN',
    cs_payerID: 75273,
  },
  {
    payer_name: 'HIGHMARK BCBS DELAWARE HEALTH OPTIONS',
    cs_payerID: 47181,
  },
  {
    payer_name: 'GATEWAY HEALTH PLAN - MEDICAID PENNSYLVANIA',
    cs_payerID: 25169,
  },
  {
    payer_name: 'GATEWAY HEALTH PLAN - MEDICARE ASSURED PENNSYLVANI',
    cs_payerID: 60550,
  },
  {
    payer_name: 'ROONEY LIFE, INC.',
    cs_payerID: 37602,
  },
  {
    payer_name: 'GOLDEN RULE INSURANCE',
    cs_payerID: 37602,
  },
  {
    payer_name: 'GRAVIE INC',
    cs_payerID: 'GRV01',
  },
  {
    payer_name: 'HAP/AHL/CURANET',
    cs_payerID: 382242827,
  },
  {
    payer_name: 'MEDICAL VALUE PLAN - OHIO (MVP)',
    cs_payerID: 382242827,
  },
  {
    payer_name: 'HEALTHY BLUE DUAL ADVANTAGE LOUISIANA',
    cs_payerID: '00551',
  },
  {
    payer_name: 'HEALTHY BLUE MISSOURI',
    cs_payerID: '00541',
  },
  {
    payer_name: 'HEALTHY BLUE NORTH CAROLINA',
    cs_payerID: '00602',
  },
  {
    payer_name: 'HEALTHY BLUE NEBRASKA',
    cs_payerID: '00544',
  },
  {
    payer_name: 'HEALTH FIRST HEALTH PLANS - OSCAR',
    cs_payerID: 'RP039',
  },
  {
    payer_name: 'HEALTHPARTNERS OF MINNESOTA',
    cs_payerID: 94267,
  },
  {
    payer_name: 'HEALTHPARTNERS UNITYPOINT HEALTH',
    cs_payerID: 94267,
  },
  {
    payer_name: 'HEALTH PLAN (THE)',
    cs_payerID: 95677,
  },
  {
    payer_name: 'HEALTH PLAN OF THE UPPER OHIO VALLEY',
    cs_payerID: 95677,
  },
  {
    payer_name: 'THE HEALTH PLAN OF WEST VIRGINIA, INC',
    cs_payerID: 95677,
  },
  {
    payer_name: 'HAWAII HMSA',
    cs_payerID: 990040115,
  },
  {
    payer_name: 'AKAMAI ADVANTAGE (MEDICARE ADVANTAGE PLAN) ',
    cs_payerID: 990040115,
  },
  {
    payer_name: 'HAWAII QUEST',
    cs_payerID: 990040115,
  },
  {
    payer_name: 'HEALTH PARTNERS, PA',
    cs_payerID: 80142,
  },
  {
    payer_name: 'HEALTH PARTNERS OF PHILADELPHIA INC',
    cs_payerID: 80142,
  },
  {
    payer_name: 'HARVARD PILGRIM HEALTH CARE',
    cs_payerID: 'HPHC0001',
  },
  {
    payer_name: 'HEALTH SERVICES FOR CHILDREN WITH SPECIAL NEEDS',
    cs_payerID: 37290,
  },
  {
    payer_name: 'JSL ADMINISTRATORS',
    cs_payerID: 37283,
  },
  {
    payer_name: 'AAG AMERICAN ADMINISTRATIVE GROUP',
    cs_payerID: 37283,
  },
  {
    payer_name: 'PITTMAN &amp; ASSOCIATES',
    cs_payerID: 37283,
  },
  {
    payer_name: 'AAG GALLAGHER BENEFITS',
    cs_payerID: 37283,
  },
  {
    payer_name: 'GALLAGHER BENEFITS ADMINISTRATOR / AAG',
    cs_payerID: 37283,
  },
  {
    payer_name: 'HEALTHSMART BENEFIT SOLUTIONS',
    cs_payerID: 37283,
  },
  {
    payer_name: 'CINCINNATI FINANCIAL CORPORTATION',
    cs_payerID: 37283,
  },
  {
    payer_name: 'OATH (THE) - A HEALTH PLAN OF ALABAMA INC. ',
    cs_payerID: 'HSTN',
  },
  {
    payer_name: 'HEALTHSPRING OF ALABAMA',
    cs_payerID: 'HSTN',
    State: 'AL',
  },
  {
    payer_name: 'CIGNA HEALTHSPRING TENNESSEE/ALABAMA',
    cs_payerID: 'HSTN',
  },
  {
    payer_name: 'HEALTHSPRING TENNESSEE',
    cs_payerID: 'HSTN',
    State: 'TN',
  },
  {
    payer_name: 'HEALTHSPRING INC.',
    cs_payerID: 'HSTN',
  },
  {
    payer_name: 'CIGNA HEALTHSPRING BRAVO OF TN, AL',
    cs_payerID: 'HSTN',
  },
  {
    payer_name: 'CIGNA HEALTHSPRING BRAVO HEALTH TEXAS',
    cs_payerID: 52192,
    State: 'TX',
  },
  {
    payer_name: 'CIGNA MEDICARE',
    cs_payerID: 52192,
    State: 'TX',
  },
  {
    payer_name: 'CIGNA HEALTHSPRING',
    cs_payerID: 52192,
    State: 'TX',
  },
  {
    payer_name: 'CIGNA HEALTHSPRING STAR+PLUS',
    cs_payerID: 52192,
    State: 'TX',
  },
  {
    payer_name: 'HEALTHY VALUE',
    cs_payerID: 61101,
  },
  {
    payer_name: 'PRIME HEALTH OF KANSAS',
    cs_payerID: 61101,
  },
  {
    payer_name: 'VENCOR',
    cs_payerID: 61101,
  },
  {
    payer_name: 'GROUP HEALTH INSURANCE - DELEWARE',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA HEALTH CHICAGO INS CO',
    cs_payerID: 61101,
  },
  {
    payer_name: 'LINCOLN NATIONAL - PHOENIX, AZ',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA CARE PLAN',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA INSURANCE CO',
    cs_payerID: 61101,
  },
  {
    payer_name: 'ARCADIAN MANAGEMENT SERVICES',
    cs_payerID: 61101,
  },
  {
    payer_name: 'IBA SELF FUNDED GROUP',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HEALTH VALUE MGMT - DELEWARE',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA HEALTH PLAN - HMO',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA MEDICAL PLAN - KY',
    cs_payerID: 61101,
  },
  {
    payer_name: 'KENTUCKY KARE',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA GOLD PLAN',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA PUERTO RICO',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA',
    cs_payerID: 61101,
  },
  {
    payer_name: 'PRIME HEALTH KANSAS CITY',
    cs_payerID: 61101,
  },
  {
    payer_name: 'WISCONSIN HEALTH',
    cs_payerID: 61101,
  },
  {
    payer_name: 'OSF HEALTH PLANS',
    cs_payerID: 61101,
  },
  {
    payer_name: 'CARE NETWORK',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HPLAN, INC',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA GROUP HEALTH PLAN',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA HEALTH PLAN',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA MEDICAL PLAN - CA',
    cs_payerID: 61101,
  },
  {
    payer_name: 'PRIME BENEFIT SYSTEMS, INC',
    cs_payerID: 61101,
  },
  {
    payer_name: 'PRIME HEALTH MANAGEMENT SERVICES',
    cs_payerID: 61101,
  },
  {
    payer_name: 'OCHSNER HEALTH PLAN',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA HEALTHY HORIZONS - LOUISIANA',
    cs_payerID: 61101,
    State: 'LA',
  },
  {
    payer_name: 'GROUP HEALTH INSURANCE',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA INSURANCE AGENCY',
    cs_payerID: 61101,
  },
  {
    payer_name: 'MOTOROLA, INC.',
    cs_payerID: 61101,
  },
  {
    payer_name: 'CARITEN SENIOR HEALTH\\t',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HMPK, INC',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA HEALTH',
    cs_payerID: 61101,
  },
  {
    payer_name: 'MICHAEL REESE HMO PLAN',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA OHIO MEDICAID VISION',
    cs_payerID: 'V021919',
  },
  {
    payer_name: 'HUMANA OHIO MEDICAID',
    cs_payerID: 61103,
  },
  {
    payer_name: 'HORIZON NJ HEALTH',
    cs_payerID: 22326,
  },
  {
    payer_name: 'IOWA BLUE SHIELD',
    cs_payerID: 88848,
    State: 'IA',
  },
  {
    payer_name: 'SOUTH DAKOTA BLUE SHIELD',
    cs_payerID: 88848,
    State: 'SD',
  },
  {
    payer_name: 'IOWA MEDICAID',
    cs_payerID: 18049,
    State: 'IA',
  },
  {
    payer_name: 'IDAHO BLUE SHIELD REGENCE',
    cs_payerID: '00611',
    State: 'ID',
  },
  {
    payer_name: 'ILLINOIS BLUE SHIELD',
    cs_payerID: '00621',
  },
  {
    payer_name: 'BLUE CROSS COMMUNITY FAMILY HEALTH PLAN',
    cs_payerID: '00621',
    State: 'IL',
  },
  {
    payer_name: 'HEALTH CARE SERVICE CORPORATION DBA BCBS OF IL',
    cs_payerID: '00621',
  },
  {
    payer_name: 'ILLINOIS MEDICAID',
    cs_payerID: '37-1320188',
    State: 'IL',
  },
  {
    payer_name: 'IMCARE',
    cs_payerID: 41600,
  },
  {
    payer_name: 'ITASCA MEDICAL CARE',
    cs_payerID: 41600,
  },
  {
    payer_name: 'ANTHEM - CENTRAL, NORTHERN, SOUTHERN',
    cs_payerID: '00630',
  },
  {
    payer_name: 'INDIANA BLUE SHIELD',
    cs_payerID: '00630',
  },
  {
    payer_name: 'INDIANA MEDICAID',
    cs_payerID: 'IHCP',
    State: 'IN',
  },
  {
    payer_name: 'KAISER PERMANENTE OF THE NORTHWEST',
    cs_payerID: 'RH002',
  },
  {
    payer_name: 'KAISER FOUNDATION HEALTH PLAN OF THE NORTHWEST',
    cs_payerID: 'RH002',
  },
  {
    payer_name: 'HEALTH SHARE OF OREGON CCO - KAISER PERMANENTE NW',
    cs_payerID: 'RH002',
  },
  {
    payer_name: 'MISSOURI BLUE SHIELD OF KANSAS CITY',
    cs_payerID: 47171,
    State: 'MO',
  },
  {
    payer_name: 'KEY BENEFIT ADMINISTRATORS, INC.',
    cs_payerID: 37217,
  },
  {
    payer_name: 'KEY BENEFIT ADMINISTRATORS - FT MILL, SC',
    cs_payerID: 37216,
  },
  {
    payer_name: 'TRANSCHOICE KEY BENEFIT ADMINISTRATORS',
    cs_payerID: 37284,
  },
  {
    payer_name: 'KEY SELECT',
    cs_payerID: 37321,
  },
  {
    payer_name: 'KEY SOLUTIONS',
    cs_payerID: 37323,
  },
  {
    payer_name: 'KEYSTONE FIRST',
    cs_payerID: 23284,
  },
  {
    payer_name: 'KANSAS BLUE SHIELD - TOPEKA',
    cs_payerID: 47163,
    State: 'KS',
  },
  {
    payer_name: 'KEYSTONE FIRST COMMUNITY HEALTHCHOICES',
    cs_payerID: 42344,
  },
  {
    payer_name: 'KAISER FOUNDATION HEALTH PLAN MID-ATLANTIC STATES',
    cs_payerID: 'RH010',
  },
  {
    payer_name: 'KAISER PERMANENTE',
    cs_payerID: 'RH009',
    State: 'CA',
  },
  {
    payer_name: 'KAISER PERMANENTE OF N CA REGION',
    cs_payerID: 'RH009',
    State: 'CA',
  },
  {
    payer_name: 'KAISER PERMANENTE',
    cs_payerID: 94134,
    State: 'CA',
  },
  {
    payer_name: 'KAISER PERMANENTE OF S CA REGION',
    cs_payerID: 94134,
    State: 'CA',
  },
  {
    payer_name: 'KEYSTONE FIRST VIP CHOICE',
    cs_payerID: 77741,
  },
  {
    payer_name: 'ANTHEM KENTUCKY BCBS',
    cs_payerID: '00660',
  },
  {
    payer_name: 'ANTHEM BLUE PREFERRED',
    cs_payerID: '00660',
    State: 'KY',
  },
  {
    payer_name: 'ANTHEM BLUE PREFERRED PLUS',
    cs_payerID: '00660',
    State: 'KY',
  },
  {
    payer_name: 'ANTHEM BLUE ACCESS PRODUCTS',
    cs_payerID: '00660',
    State: 'KY',
  },
  {
    payer_name: 'FEP',
    cs_payerID: '00660',
    State: 'KY',
  },
  {
    payer_name: 'KY BCBS MEDICAID MANAGED CARE',
    cs_payerID: '00660',
    State: 'KY',
  },
  {
    payer_name: 'ANTHEM KY MEDICAID',
    cs_payerID: '00660',
    State: 'KY',
  },
  {
    payer_name: 'KENTUCKY BLUE SHIELD',
    cs_payerID: '00660',
    State: 'KY',
  },
  {
    payer_name: 'KENTUCKY MEDICAID',
    cs_payerID: 'KYMEDICAID',
    State: 'KY',
  },
  {
    payer_name: 'LA BLUE ADVANTAGE',
    cs_payerID: 72107,
  },
  {
    payer_name: 'STATE EMPLOYEES GROUP BENEFITS PROGRAM',
    cs_payerID: 53120,
  },
  {
    payer_name: 'LOUISIANA BLUE SHIELD',
    cs_payerID: 53120,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS LOUISIANA',
    cs_payerID: 27357,
  },
  {
    payer_name: 'LA CARE HEALTH PLAN',
    cs_payerID: 'LACAR',
  },
  {
    payer_name: 'BLUE CROSS BLUE SHIELD OF MASSACHUSETTS',
    cs_payerID: '00200',
    State: 'MA',
  },
  {
    payer_name: 'MASSACHUSETTS MEDICAID (FORMAT 9)',
    cs_payerID: 'DMA7384',
    State: 'MA',
  },
  {
    payer_name: 'MASSACHUSETTS MEDICAID (FORMAT 5)',
    cs_payerID: 'DMA7384',
    State: 'MA',
  },
  {
    payer_name: 'OSCAR HEALTH PLAN OF NEW YORK - DOS &lt;1/1/17',
    cs_payerID: 11303,
  },
  {
    payer_name: 'MAGNACARE',
    cs_payerID: 11303,
  },
  {
    payer_name: 'LOCAL 486 PLUMBERS AND STEAMFITTERS',
    cs_payerID: '00690',
  },
  {
    payer_name: 'MARYLAND BLUE SHIELD - CAREFIRST',
    cs_payerID: '00690',
  },
  {
    payer_name: 'MEDICO INSURANCE COMPANY',
    cs_payerID: 23160,
  },
  {
    payer_name: 'MARYLAND PHYSICIANS CARE',
    cs_payerID: 76498,
  },
  {
    payer_name: 'MAINE BLUE SHIELD',
    cs_payerID: '00680',
    State: 'ME',
  },
  {
    payer_name: 'MAINE MEDICAID',
    cs_payerID: 'ME_MMIS_4_DXCMS',
    State: 'ME',
  },
  {
    payer_name: 'MEDICA GOVERNMENT PROGRAMS',
    cs_payerID: 'MEDM1',
  },
  {
    payer_name: 'MERITAIN HEALTH MINNEAPOLIS',
    cs_payerID: 41124,
  },
  {
    payer_name: 'EMPLOYEE BENEFIT SERVICES OF LOUISIANA, INC. (EBS)',
    cs_payerID: 41124,
  },
  {
    payer_name: 'METROPLUSHEALTH',
    cs_payerID: 13265,
  },
  {
    payer_name: 'MICHIGAN BLUE SHIELD',
    cs_payerID: '00710',
    State: 'MI',
  },
  {
    payer_name: 'MICHIGAN BLUE SHIELD FEP',
    cs_payerID: '00710',
    State: 'MI',
  },
  {
    payer_name: 'BLUE CROSS COMPLETE OF MI (MIBCN)',
    cs_payerID: '00710',
  },
  {
    payer_name: 'MEDICARE PLUS BLUE - MEDICARE ADVANTAGE PLAN',
    cs_payerID: '00710',
    State: 'MI',
  },
  {
    payer_name: 'MCARE',
    cs_payerID: '00710',
    State: 'MI',
  },
  {
    payer_name: 'BCBS COMPLETE',
    cs_payerID: '00710',
    State: 'MI',
  },
  {
    payer_name: 'BLUE CARE NETWORK HMO',
    cs_payerID: '00710',
    State: 'MI',
  },
  {
    payer_name: 'MICHIGAN CHILD',
    cs_payerID: 'D00111',
    State: 'MI',
  },
  {
    payer_name: 'MICHIGAN MEDICAID',
    cs_payerID: 'D00111',
    State: 'MI',
  },
  {
    payer_name: 'CAPE HEALTH PLAN',
    cs_payerID: 38334,
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF MICHIGAN',
    cs_payerID: 38334,
  },
  {
    payer_name: 'ABRI HEALTH PLAN',
    cs_payerID: 'ABRI1',
    State: 'WI',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF WISCONSIN',
    cs_payerID: 'ABRI1',
    State: 'WI',
  },
  {
    payer_name: 'MOLINA COMPLETE CARE OF ARIZONA',
    cs_payerID: 'MCC01',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF  IDAHO',
    cs_payerID: 61799,
  },
  {
    payer_name: 'PASSPORT HEALTH PLAN BY MOLINA HEALTHCARE',
    cs_payerID: 61325,
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF NEVADA',
    cs_payerID: 'MLNNV',
  },
  {
    payer_name: 'MOLINA COMPLETE CARE OF VIRGINIA',
    cs_payerID: 'MCC02',
  },
  {
    payer_name: 'MERCY CARE RBHA',
    cs_payerID: 33628,
  },
  {
    payer_name: 'MEDICAL MUTUAL OF OHIO - PROLINK',
    cs_payerID: 29076,
  },
  {
    payer_name: 'CAROLINA CARE PLAN, INC.',
    cs_payerID: 29076,
  },
  {
    payer_name: 'UCARE MEDICARE PLANS DOS BEFORE 1-1-2020',
    cs_payerID: 52629,
  },
  {
    payer_name: 'UCARE IFP DOS BEFORE 1-1-2019',
    cs_payerID: 52629,
  },
  {
    payer_name: 'UCARE MN HEALTH CARE PROGRAMS DOS BEFORE 1-1-2022',
    cs_payerID: 52629,
  },
  {
    payer_name: 'UCARE IFP DOS ON OR AFTER 1-1-2019',
    cs_payerID: 55413,
  },
  {
    payer_name: 'UCARE MN HC PROGRAMS DOS ON OR AFTER 1-1-2022',
    cs_payerID: 55413,
  },
  {
    payer_name: 'UCARE MEDICARE PLANS DOS ON OR AFTER 1-1-2020',
    cs_payerID: 55413,
  },
  {
    payer_name: 'MISSOURI BLUE SHIELD - ST LOUIS MO',
    cs_payerID: '00241',
    State: 'MO',
  },
  {
    payer_name: 'MISSOURI MEDICAID',
    cs_payerID: 431754897,
    State: 'MO',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF ILLINOIS',
    cs_payerID: 20934,
  },
  {
    payer_name: 'MORECARE',
    cs_payerID: 65465,
  },
  {
    payer_name: 'MS BCBS - STATE EMPLOYEES',
    cs_payerID: '00230',
    State: 'MS',
  },
  {
    payer_name: 'MISSISSIPPI BLUE SHIELD',
    cs_payerID: '00230',
    State: 'MS',
  },
  {
    payer_name: 'MISSISSIPPI MEDICAID',
    cs_payerID: 77032,
    State: 'MS',
  },
  {
    payer_name: 'MONTANA BLUE SHIELD',
    cs_payerID: 'BCBS',
    State: 'MT',
  },
  {
    payer_name: 'BLUE PREFERRED PPO',
    cs_payerID: 'BCBS',
    State: 'MT',
  },
  {
    payer_name: 'BLUE FOCUS POS',
    cs_payerID: 'BCBS',
    State: 'MT',
  },
  {
    payer_name: 'EXCLUSICARE',
    cs_payerID: 71412,
  },
  {
    payer_name: 'ASSURED LIFE ASSOCIATION',
    cs_payerID: 71412,
  },
  {
    payer_name: 'MUTUAL OF OMAHA',
    cs_payerID: 71412,
  },
  {
    payer_name: 'NATIONAL RURAL LETTER CARRIERS ASSOC',
    cs_payerID: 71412,
  },
  {
    payer_name: 'MUTUAL OF OMAHA',
    cs_payerID: 71412,
  },
  {
    payer_name: 'GPM LIFE',
    cs_payerID: 71412,
  },
  {
    payer_name: 'MUTUALLY PREFERRED',
    cs_payerID: 71412,
  },
  {
    payer_name: 'UNITED OF OMAHA',
    cs_payerID: 71412,
  },
  {
    payer_name: 'NORTH CAROLINA BLUE SHIELD',
    cs_payerID: 560894904,
    State: 'NC',
  },
  {
    payer_name: 'NORTH CAROLINA MEDICAID',
    cs_payerID: 'DNC00',
    State: 'NC',
  },
  {
    payer_name: 'NORTH DAKOTA BLUE SHIELD',
    cs_payerID: 55891,
    State: 'ND',
  },
  {
    payer_name: 'NEBRASKA BLUE SHIELD',
    cs_payerID: '00760',
    State: 'NE',
  },
  {
    payer_name: 'NEW HAMPSHIRE BLUE SHIELD',
    cs_payerID: '00770',
    State: 'NH',
  },
  {
    payer_name: 'NEW HAMPSHIRE MEDICAID',
    cs_payerID: 26000618,
    State: 'NH',
  },
  {
    payer_name: 'HORIZON BLUE SHIELD OF NJ FEP',
    cs_payerID: 22099,
    State: 'NJ',
  },
  {
    payer_name: 'NEW JERSEY BLUE SELECT',
    cs_payerID: 22099,
    State: 'NJ',
  },
  {
    payer_name: 'HORIZON BLUE SHIELD OF NEW JERSEY',
    cs_payerID: 22099,
    State: 'NJ',
  },
  {
    payer_name: 'NEW JERSEY BLUE CHOICE',
    cs_payerID: 22099,
    State: 'NJ',
  },
  {
    payer_name: 'OMNIA HEALTH PLANS',
    cs_payerID: 22099,
    State: 'NJ',
  },
  {
    payer_name: 'HORIZON BLUE SHIELD OF NJ OUT OF AREA',
    cs_payerID: 22099,
    State: 'NJ',
  },
  {
    payer_name: 'NIPPON LIFE INSURANCE COMPANY OF AMERICA',
    cs_payerID: 81264,
  },
  {
    payer_name: 'NEW MEXICO BLUE SHIELD',
    cs_payerID: '00790',
    State: 'NM',
  },
  {
    payer_name: 'LOVELACE SANDIA HEALTH PLAN DOS &gt;5/31/2014',
    cs_payerID: '00790',
  },
  {
    payer_name: 'BLUE CROSS MEDICARE ADVANTAGE',
    cs_payerID: '00790',
    State: 'NM',
  },
  {
    payer_name: 'LOVELACE MEDICARE ADVANTAGE',
    cs_payerID: '00790',
    State: 'NM',
  },
  {
    payer_name: 'BLUE SALUD',
    cs_payerID: '00790',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF NEW MEXICO',
    cs_payerID: '09824',
  },
  {
    payer_name: 'MOLINA SALUD',
    cs_payerID: '09824',
  },
  {
    payer_name: 'LOVELACE SALUD',
    cs_payerID: '09824',
  },
  {
    payer_name: 'NEVADA BLUE SHIELD',
    cs_payerID: '00265',
    State: 'NV',
  },
  {
    payer_name: 'NEW YORK MEDICAID - PHASE II',
    cs_payerID: 141797357,
    State: 'NY',
  },
  {
    payer_name: 'NEW YORK BLUE SHIELD  CENTRAL REGION',
    cs_payerID: '00805',
    State: 'NY',
  },
  {
    payer_name: 'NEW YORK BLUE SHIELD OF ROCHESTER',
    cs_payerID: '00804',
    State: 'NY',
  },
  {
    payer_name: 'NEW YORK BLUE CROSS UTICA/WATERTOWN',
    cs_payerID: '00806',
    State: 'NY',
  },
  {
    payer_name: 'HMO BLUE',
    cs_payerID: '00806',
    State: 'NY',
  },
  {
    payer_name: 'CHILDHEALTH PLUS BY HEALTHFIRST (CHP)',
    cs_payerID: 80141,
  },
  {
    payer_name: 'HEALTHFIRST NEW YORK (COMMERCIAL)',
    cs_payerID: 80141,
  },
  {
    payer_name: 'HEALTHFIRST 65 PLUS',
    cs_payerID: 80141,
  },
  {
    payer_name: 'HEALTHFIRST FAMILY HEALTH PLUS (FHP)',
    cs_payerID: 80141,
  },
  {
    payer_name: 'HEALTHFIRST COMPLETE CARE',
    cs_payerID: 80141,
  },
  {
    payer_name: 'HEALTHFIRST MAXIMUM',
    cs_payerID: 80141,
  },
  {
    payer_name: 'HEALTHFIRST HEALTH PLAN OF NEW JJERSEY',
    cs_payerID: 80141,
  },
  {
    payer_name: 'SENIOR HEALTH PARTNERS A HEALTHFIRST COMPANY',
    cs_payerID: 80141,
  },
  {
    payer_name: 'HEALTHFIRST OF NEW YORK',
    cs_payerID: 80141,
  },
  {
    payer_name: 'HEALTHFIRST, INC. (NEW YORK)',
    cs_payerID: 80141,
  },
  {
    payer_name: 'HEALTHFIRST PHSP',
    cs_payerID: 80141,
  },
  {
    payer_name: 'UFCW - CENTRAL OHIO',
    cs_payerID: '00834',
  },
  {
    payer_name: 'QUALCHOICE OF OHIO',
    cs_payerID: '00834',
  },
  {
    payer_name: 'OHIO BLUE SHIELD',
    cs_payerID: '00834',
  },
  {
    payer_name: 'ANTHEM OHIO MEDICAID',
    cs_payerID: '0002937',
  },
  {
    payer_name: 'OHIO MEDICAID',
    cs_payerID: 'MMISODJFS',
    State: 'OH',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF OHIO',
    cs_payerID: 20149,
  },
  {
    payer_name: 'MOLINA OHIO MEDICAID',
    cs_payerID: 73160,
  },
  {
    payer_name: 'OHIORISE - AETNA BETTER HEALTH OF OHIO',
    cs_payerID: 45221,
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF OHIORISE',
    cs_payerID: 45221,
  },
  {
    payer_name: 'OKLAHOMA BLUE SHIELD',
    cs_payerID: '00840',
    State: 'OK',
  },
  {
    payer_name: 'LOVELACE MEDICARE ADVANTAGE OK',
    cs_payerID: '00840',
    State: 'OK',
  },
  {
    payer_name: 'OKLAHOMA MEDICAID',
    cs_payerID: 731476619,
    State: 'OK',
  },
  {
    payer_name: 'OREGON BLUE SHIELD REGENCE',
    cs_payerID: '00851',
    State: 'OR',
  },
  {
    payer_name: 'OSCAR HEALTH',
    cs_payerID: 'OSCAR',
  },
  {
    payer_name: 'OSCAR HEALTH PLAN OF NEW YORK - DOS &gt;12/31/16',
    cs_payerID: 'OSCAR',
  },
  {
    payer_name: 'OXFORD HEALTH PLANS',
    cs_payerID: '06111',
  },
  {
    payer_name: 'PENNSYLVANIA BLUE CHOICE',
    cs_payerID: 54771,
    State: 'PA',
  },
  {
    payer_name: 'HEALTH KEEPERS, INC.',
    cs_payerID: 54771,
    State: 'PA',
  },
  {
    payer_name: 'CONNECT BLUE EPO',
    cs_payerID: 54771,
    State: 'PA',
  },
  {
    payer_name: 'PENNSYLVANIA PERSONAL CHOICE',
    cs_payerID: 54771,
    State: 'PA',
  },
  {
    payer_name: 'PRIORITY HEALTH CARE',
    cs_payerID: 54771,
    State: 'PA',
  },
  {
    payer_name: 'PENINSULA HEALTH CARE',
    cs_payerID: 54771,
    State: 'PA',
  },
  {
    payer_name: 'PENNSYLVANIA BLUE SHIELD',
    cs_payerID: 54771,
    State: 'PA',
  },
  {
    payer_name: 'PENNSYLVANIA MEDICAID',
    cs_payerID: 236003113,
    State: 'PA',
  },
  {
    payer_name: 'CAPITAL BLUE CROSS - PHYSICIAN CONTRACTED PROVIDER',
    cs_payerID: 23045,
  },
  {
    payer_name: 'PENNSYLVANIA INDEPENDENCE BLUE CROSS',
    cs_payerID: 54704,
    State: 'PA',
  },
  {
    payer_name: 'PIEDMONT COMMUNITY HEALTH PLAN',
    cs_payerID: 55768,
  },
  {
    payer_name: 'PERFORMCARE',
    cs_payerID: 65391,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS FLORIDA',
    cs_payerID: 77003,
  },
  {
    payer_name: 'PHP-FAMILY CARE OF MI',
    cs_payerID: 37330,
  },
  {
    payer_name: 'PHYSICIANS HEALTH PLAN MID-MICHIGAN / PHP',
    cs_payerID: 37330,
  },
  {
    payer_name: 'PHYSICIAN HEALTH PLAN OF NORTHERN INDIANA - PHP',
    cs_payerID: 12399,
  },
  {
    payer_name: 'PROMINENCE HEALTH PLAN OF NEVADA',
    cs_payerID: 93082,
  },
  {
    payer_name: 'PREFERRED ONE',
    cs_payerID: 411479744,
  },
  {
    payer_name: 'PREFERRED ONE CORPORATION',
    cs_payerID: 411479744,
  },
  {
    payer_name: 'PREFERRED ONE COMMUNITY HEALTH PLAN',
    cs_payerID: 411479744,
  },
  {
    payer_name: 'PROMINENCE HEALTHFIRST OF FLORIDA',
    cs_payerID: 83352,
  },
  {
    payer_name: 'PRIORITY HEALTH OF MICHIGAN',
    cs_payerID: 'PRIORITY',
  },
  {
    payer_name: 'CARE CHOICES HMO/PREFERRED CHOICES OF MICHIGAN PPO',
    cs_payerID: 'PRIORITY',
  },
  {
    payer_name: 'PARAMOUNT ADVANTAGE',
    cs_payerID: 4198872500,
    State: 'OH',
  },
  {
    payer_name: 'PARAMOUNT',
    cs_payerID: 4198872500,
    State: 'OH',
  },
  {
    payer_name: 'PRIME WEST',
    cs_payerID: 61604,
  },
  {
    payer_name: 'PRIME HEALTH COMPLETE',
    cs_payerID: 61604,
  },
  {
    payer_name: 'PACIFICSOURCE HEALTH PLANS',
    cs_payerID: 93029,
  },
  {
    payer_name: 'PACIFICSOURCE ADMINISTRATORS (PSA)',
    cs_payerID: 93031,
  },
  {
    payer_name: 'PACIFICSOURCE COMMUNITY HEALTH PLAN INC.',
    cs_payerID: 20377,
  },
  {
    payer_name: 'PACIFICSOURCE MEDICARE',
    cs_payerID: 20377,
  },
  {
    payer_name: 'QUARTZ ASO',
    cs_payerID: 39180,
  },
  {
    payer_name: 'PREFERRED BLUE',
    cs_payerID: '00401',
    State: 'SC',
  },
  {
    payer_name: 'MEDICARE BLUE',
    cs_payerID: '00401',
  },
  {
    payer_name: 'PLANNED ADMINISTRATORS',
    cs_payerID: '00401',
  },
  {
    payer_name: 'BLUE CHOICE HEALTH PLAN',
    cs_payerID: '00401',
    State: 'SC',
  },
  {
    payer_name: 'SC BCBS STATE EMPLOYEE HEALTH PLAN',
    cs_payerID: '00401',
    State: 'SC',
  },
  {
    payer_name: 'THOMAS COOPER AGENCY',
    cs_payerID: '00401',
    State: 'SC',
  },
  {
    payer_name: 'CAROLINA BENEFIT ADMINISTRATORS',
    cs_payerID: '00401',
    State: 'SC',
  },
  {
    payer_name: 'SOUTH CAROLINA BLUE SHIELD',
    cs_payerID: '00401',
    State: 'SC',
  },
  {
    payer_name: '\\tSOUTH CAROLINA BLUE CROSS BLUE SHIELD STATE EMPLO',
    cs_payerID: '00401',
    State: 'SC',
  },
  {
    payer_name: 'SC BCBS PREFERRED HEALTH SYSTEMS - HMO BLUE',
    cs_payerID: '00401',
    State: 'SC',
  },
  {
    payer_name: 'EMPLOYERS LIFE INSURANCE',
    cs_payerID: '00401',
  },
  {
    payer_name: 'EMPLOYEE BENEFIT SERVICES DBA KEY BENEFIT ADMIN',
    cs_payerID: '00401',
    State: 'SC',
  },
  {
    payer_name: 'MEDICAL CLAIMS MANAGEMENT CORPORATION',
    cs_payerID: '00401',
  },
  {
    payer_name: '\\tFEDERAL EMPLOYEE HEALTH BENEFITS PROGRAM (FEP)',
    cs_payerID: '00401',
  },
  {
    payer_name: 'CONSOLIDATED BENEFITS INC.',
    cs_payerID: '00401',
  },
  {
    payer_name: 'SOUTH CAROLINA MEDICAID',
    cs_payerID: 'SCXIX',
    State: 'SC',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF SOUTH CAROLINA',
    cs_payerID: 46299,
  },
  {
    payer_name: 'SELECT HEALTH OF SOUTH CAROLINA',
    cs_payerID: 23285,
    State: 'SC',
  },
  {
    payer_name: 'SELMAN AND COMPANY',
    cs_payerID: 52214,
  },
  {
    payer_name: 'SIMPLY HEALTHCARE PLANS, INC.',
    cs_payerID: 'SMPLY',
  },
  {
    payer_name: 'STUDENT INSURANCE-MEGA LIFE &amp; HEALTH INSURANCE CO',
    cs_payerID: 74227,
  },
  {
    payer_name: 'STUDENT INSURANCE-MIDWEST NATIONAL LIFE INS OF TN',
    cs_payerID: 74227,
  },
  {
    payer_name: 'MEGA LIFE &amp; HEALTH INSURANCE CO-STUDENT INSURANCE',
    cs_payerID: 74227,
  },
  {
    payer_name: 'MIDWEST NATIONAL LIFE INS OF TN-STUDENT INSURANCE',
    cs_payerID: 74227,
  },
  {
    payer_name: 'CHESAPEAKE LIFE INSURANCE CO-STUDENT INSURANCE',
    cs_payerID: 74227,
  },
  {
    payer_name: 'PROMINENCE HEALTH PLAN OF TEXAS',
    cs_payerID: 80095,
  },
  {
    payer_name: 'SENIOR WHOLE HEALTH OF MASSACHUSETTS',
    cs_payerID: 'SWHMA',
  },
  {
    payer_name: 'TENNESSEE BLUE SHIELD',
    cs_payerID: '00890',
    State: 'TN',
  },
  {
    payer_name: 'VOLUNTEER STATE HEALTH PLAN',
    cs_payerID: '00890',
    State: 'TN',
  },
  {
    payer_name: 'BLUECARE - BCBSTN',
    cs_payerID: '00890',
  },
  {
    payer_name: 'TENNESSEE BLUECARE',
    cs_payerID: '00890',
  },
  {
    payer_name: 'TENNCARE SELECT',
    cs_payerID: '00890',
  },
  {
    payer_name: 'TRICARE - WEST REGION',
    cs_payerID: 'SCWI0',
  },
  {
    payer_name: 'TEST MED',
    cs_payerID: 29076,
  },
  {
    payer_name: 'TEST MHS',
    cs_payerID: 34192,
  },
  {
    payer_name: 'TEXAS BLUE SHIELD',
    cs_payerID: 84980,
    State: 'TX',
  },
  {
    payer_name: 'BRYAN INDEPENDENT SCHOOL',
    cs_payerID: 84980,
    State: 'TX',
  },
  {
    payer_name: 'CSHCN (CHILDREN WITH SPECIAL HEALTH CARE NEEDS)',
    cs_payerID: '617591011C21P',
    State: 'TX',
  },
  {
    payer_name: 'TEXAS MEDICAID',
    cs_payerID: '617591011C21P',
    State: 'TX',
  },
  {
    payer_name: 'RIGHT CARE FROM SCOTT &amp; WHITE HEALTH PLAN',
    cs_payerID: '617591011C21P',
    State: 'TX',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF TEXAS',
    cs_payerID: 20554,
  },
  {
    payer_name: 'ALTRU &amp; YOU',
    cs_payerID: 94265,
  },
  {
    payer_name: 'MEDICA HEALTH PLAN',
    cs_payerID: 94265,
  },
  {
    payer_name: 'RIDGEVIEW COMMUNITY NETWORK',
    cs_payerID: 94265,
    State: 'MN',
  },
  {
    payer_name: 'MEDICA HEALTH PLANS (ACCESSABILITY SOLUTION)',
    cs_payerID: 94265,
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE CHOICE',
    cs_payerID: 87726,
    State: 'TX',
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARECOMPLETE OPEN PREMIER',
    cs_payerID: 87726,
    State: 'WI',
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN INDIANA',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN OF MASSACHUSETTS',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARE GOLD',
    cs_payerID: 87726,
    State: 'SC',
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARECOMPLETE CHOICE',
    cs_payerID: 87726,
    State: 'AR',
  },
  {
    payer_name: 'UNITEDHEALTHCARE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE LONG TERM CARE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN HAWAII',
    cs_payerID: 87726,
  },
  {
    payer_name: 'PHYSICIAN HEALTH PARTNERS MEDICARE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE PLAN OF MISSOURI',
    cs_payerID: 87726,
    State: 'MO',
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARECOMPLETE CHOICE',
    cs_payerID: 87726,
    State: 'GA',
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARE GOLD',
    cs_payerID: 87726,
    State: 'TX',
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN LOUISIANA',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE MAHP-MD IPA, OPTIMUM CHOICE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN WASHINGTON',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN RHODE ISLAND',
    cs_payerID: 87726,
  },
  {
    payer_name: 'AARP MEDICARE COMPLETE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN PENNSYLVANIA',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE PLAN OF HAWAII',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN NEW JERSEY',
    cs_payerID: 87726,
  },
  {
    payer_name: 'NEW MEXICO CENTENNIAL CARE PLAN',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE CHOICE',
    cs_payerID: 87726,
    State: 'GA',
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE CHOICE',
    cs_payerID: 87726,
    State: 'AR',
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN RIVER VALLEY',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE LEVEL FUNDED PLAN',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN - MS CHIP',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN NEW MEXICO',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE WEST (AZ,CA,CO,NV,OK,OR,TX,WA)',
    cs_payerID: 87726,
  },
  {
    payer_name: 'DEFINITY HEALTH',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARE SILVER',
    cs_payerID: 87726,
    State: 'GA',
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARECOMPLETE ASSIST',
    cs_payerID: 87726,
    State: 'WI',
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN TEXAS ',
    cs_payerID: 87726,
  },
  {
    payer_name: 'OPTUMHEALTH BEHAVIORAL SOLUTIONS OF NEW MEXICO',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN WISCONSIN',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARE COMPLETE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN MARYLAND',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE CHRONIC COMPLETE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN OF NEW MEXICO CENT',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN OF HAWAII QUEST IN',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARE SILVER',
    cs_payerID: 87726,
    State: 'MO',
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE PLAN OF TEXAS',
    cs_payerID: 87726,
    State: 'TX',
  },
  {
    payer_name: 'UNITEDHEALTHCARE GROUP MEDICARE ADVANTAGE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN DELAWARE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'ARNETT HEALTH PLAN',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN NEW YORK',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE PLAN OF WISCONSIN',
    cs_payerID: 87726,
    State: 'WI',
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARECOMPLETE CHOICE',
    cs_payerID: 87726,
    State: 'SC',
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARE GOLD',
    cs_payerID: 87726,
    State: 'GA',
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE CHOICE',
    cs_payerID: 87726,
    State: 'SC',
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARE GOLD',
    cs_payerID: 87726,
    State: 'AR',
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN OHIO',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN IOWA',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN MASSACHUSETTS SCO',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE PLAN OF WASHINGTON',
    cs_payerID: 87726,
    State: 'WA',
  },
  {
    payer_name: 'HARVARD PILGRIM PASSPORT CONNECT',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN TENNESSEE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE PLAN OF NEW MEXICO',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARE SILVER',
    cs_payerID: 87726,
    State: 'SC',
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARE SILVER',
    cs_payerID: 87726,
    State: 'TX',
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARE GOLD',
    cs_payerID: 87726,
    State: 'MO',
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE CHOICE',
    cs_payerID: 87726,
    State: 'MO',
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARE SILVER',
    cs_payerID: 87726,
    State: 'AR',
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARECOMPLETE OPEN',
    cs_payerID: 87726,
    State: 'WI',
  },
  {
    payer_name: 'CARE IMPROVEMENT PLUS',
    cs_payerID: 87726,
  },
  {
    payer_name: 'OPTUMHEALTH BEHAVIORAL SOLUTIONS',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE NURSING HOME PLAN',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE EMPIRE PLAN',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN MISSISSIPPI',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITED HEALTHCARE OF THE MID-ATLANTIC',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARECOMPLETE CHOICE',
    cs_payerID: 87726,
    State: 'MO',
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARECOMPLETE CHOICE',
    cs_payerID: 87726,
    State: 'TX',
  },
  {
    payer_name: 'UNITED HEALTHCARE COMMUNITY PLAN OF KENTUCKY',
    cs_payerID: 87726,
    State: 'KY',
  },
  {
    payer_name: 'CARE IMPROVEMENT PLUS SOUTH CENTRAL INS. CO.',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN FLORIDA',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN MS CAN',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE DEFINITY HEALTH PLAN',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE PLAN OF FLORIDA',
    cs_payerID: 87726,
    State: 'FL',
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE PLAN OF OHIO',
    cs_payerID: 87726,
    State: 'OH',
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN NEBRASKA',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARE SOLUTIONS FKA SECUREHORI',
    cs_payerID: 87726,
  },
  {
    payer_name: 'ARIZONA PHYSICIANS IPA',
    cs_payerID: '03432',
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN FKA APIPA',
    cs_payerID: '03432',
  },
  {
    payer_name: 'UNITEDHEALTHCARE ARIZONA PHYSICIANS IPA',
    cs_payerID: '03432',
  },
  {
    payer_name: 'UNITEDHEALTHCARE OHIO MEDICAID',
    cs_payerID: 88337,
  },
  {
    payer_name: 'UNITEDHEALTHCARE OHIO MEDICAID VISION',
    cs_payerID: '8357V',
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN OF MISSOURI',
    cs_payerID: 86050,
  },
  {
    payer_name: 'ULTIMATE HEALTH PLANS',
    cs_payerID: 77022,
  },
  {
    payer_name: 'UNITED MEDICAL RESOURCES',
    cs_payerID: 39026,
  },
  {
    payer_name: 'BENEFIT PLANNERS, INC.',
    cs_payerID: 39026,
  },
  {
    payer_name: 'MIDWEST PREFERRED',
    cs_payerID: 39026,
  },
  {
    payer_name: 'ECOH',
    cs_payerID: 39026,
  },
  {
    payer_name: 'GREATER LA CROSSE CARE 65+',
    cs_payerID: 39026,
  },
  {
    payer_name: 'UMR FKA UMR WAUSAU',
    cs_payerID: 39026,
  },
  {
    payer_name: 'WAUSAU PREFERRED HEALTH PLANS',
    cs_payerID: 39026,
  },
  {
    payer_name: 'UICI - ADMINISTRATORS - STATE OF NEVADA\\t',
    cs_payerID: 39026,
  },
  {
    payer_name: 'UMR CINCINNATI REPRICING VIA HEALTHSPAN',
    cs_payerID: 39026,
  },
  {
    payer_name: 'KEY HEALTH PLAN',
    cs_payerID: 39026,
  },
  {
    payer_name: 'GREATER WISCONSIN RAPIDS PROVIDER CHOICE',
    cs_payerID: 39026,
  },
  {
    payer_name: 'HARRINGTON BENEFIT SERVICES, INC.',
    cs_payerID: 39026,
  },
  {
    payer_name: 'EAU CLAIRE HEALTH PROTECTION PLAN',
    cs_payerID: 39026,
  },
  {
    payer_name: 'UMR ORLANDO HEALTH NETWORK',
    cs_payerID: 39026,
  },
  {
    payer_name: 'UMP - MIDWEST SECURITIES',
    cs_payerID: 39026,
  },
  {
    payer_name: 'HEY HEALTH PLAN',
    cs_payerID: 39026,
  },
  {
    payer_name: 'GREEN BAY HEALTH PROTECTION PLAN',
    cs_payerID: 39026,
  },
  {
    payer_name: 'OSHKOSH AREA HEALTH PROTECTION PLAN',
    cs_payerID: 39026,
  },
  {
    payer_name: 'TRANS HEALTH PROTECTION PLAN (THE)',
    cs_payerID: 39026,
  },
  {
    payer_name: 'EMPLOYERS INSURANCE OF WAUSAU',
    cs_payerID: 39026,
  },
  {
    payer_name: 'TEACHERS HEALTH TRUST',
    cs_payerID: 39026,
  },
  {
    payer_name: 'EHC',
    cs_payerID: 39026,
  },
  {
    payer_name: 'UMR-HARRINGTON HEALTH',
    cs_payerID: 39026,
  },
  {
    payer_name: 'COMMUNITY PREFERRED HEALTH PLAN',
    cs_payerID: 39026,
  },
  {
    payer_name: 'EAU CLAIRE PROVIDERS CHOICE',
    cs_payerID: 39026,
  },
  {
    payer_name: 'LA CROSSE CARE PLUS',
    cs_payerID: 39026,
  },
  {
    payer_name: 'WAUSAU INSURANCE COMPANIES',
    cs_payerID: 39026,
  },
  {
    payer_name: 'UMR FKA UMR ONALASKA',
    cs_payerID: 39026,
  },
  {
    payer_name: 'UNITED MEDICAL RESOURCES ONALASKA',
    cs_payerID: 39026,
  },
  {
    payer_name: 'UNICARE',
    cs_payerID: 80314,
  },
  {
    payer_name: 'GIC INDEMNITY PLAN',
    cs_payerID: 80314,
  },
  {
    payer_name: 'UPMC FOR BEST HEALTH',
    cs_payerID: 95216,
    State: 'PA',
  },
  {
    payer_name: 'UPMC FOR LIFE',
    cs_payerID: 95216,
    State: 'PA',
  },
  {
    payer_name: 'UPMC HEALTH PLAN',
    cs_payerID: 95216,
    State: 'PA',
  },
  {
    payer_name: 'UTAH MEDICAID',
    cs_payerID: 'SKUT0',
    State: 'UT',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF UTAH',
    cs_payerID: 'SX109',
    State: 'UT',
  },
  {
    payer_name: 'HEALTHY ADVANTAGE',
    cs_payerID: 'SX109',
    State: 'UT',
  },
  {
    payer_name: 'HEALTHY ADVANTAGE PLUS',
    cs_payerID: 'SX109',
    State: 'UT',
  },
  {
    payer_name: 'UTAH REGENCE BLUE CROSS BLUE SHIELD',
    cs_payerID: '00910',
    State: 'UT',
  },
  {
    payer_name: 'ANTHEM HEALTHKEEPERS PLUS',
    cs_payerID: '00423',
    State: 'VA',
  },
  {
    payer_name: 'VIRGINIA BLUE SHIELD',
    cs_payerID: '00423',
    State: 'VA',
  },
  {
    payer_name: 'HEALTHKEEPERS INC.',
    cs_payerID: '00423',
    State: 'VA',
  },
  {
    payer_name: 'VIRGINIA MEDICAID',
    cs_payerID: 'VMAP FHSC FA',
    State: 'VA',
  },
  {
    payer_name: 'VIRGINIA MEDICAID LAB',
    cs_payerID: 'VMAP FHSC FA',
    State: 'VA',
  },
  {
    payer_name: 'VETERANS ADMINISTRATION FEE BASIS PROGRAMS',
    cs_payerID: 12115,
  },
  {
    payer_name: 'CHAMPVA - HAC',
    cs_payerID: 84146,
  },
  {
    payer_name: 'SPINA BIFIDA - VA HAC',
    cs_payerID: 84146,
  },
  {
    payer_name: 'CHILDREN OF WOMEN VIETNAM VETERANS - VA HAC',
    cs_payerID: 84146,
  },
  {
    payer_name: 'VIVA HEALTH CARE AND VIVA MEDICARE',
    cs_payerID: 63114,
  },
  {
    payer_name: 'VNSNY CHOICE TOTAL',
    cs_payerID: 77073,
  },
  {
    payer_name: 'VISITING NURSE SERVICE OF NEW YORK',
    cs_payerID: 77073,
  },
  {
    payer_name: 'NY PRESBYTERIAN SELECT HEALTH',
    cs_payerID: 77073,
  },
  {
    payer_name: 'VISITING NURSE SERVICE OF NEW YORK/CHOICE SNP',
    cs_payerID: 77073,
  },
  {
    payer_name: 'VNSNY CHOICE',
    cs_payerID: 77073,
  },
  {
    payer_name: 'VERMONT BLUE SHIELD',
    cs_payerID: 'BCBSVT',
    State: 'VT',
  },
  {
    payer_name: 'VERMONT MEDICAID',
    cs_payerID: 'VERMONTGMC',
    State: 'VT',
  },
  {
    payer_name: 'WASHINGTON STATE DEPARTMENT OF CORRECTIONS',
    cs_payerID: 77045,
    State: 'WA',
  },
  {
    payer_name: 'APPLE HEALTH AKA WASHINGTON MEDICAID',
    cs_payerID: 77045,
    State: 'WA',
  },
  {
    payer_name: 'WASHINGTON MEDICAID',
    cs_payerID: 77045,
    State: 'WA',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF WASHINGTON',
    cs_payerID: 38336,
  },
  {
    payer_name: 'LIFEWISE OF WASHINGTON',
    cs_payerID: '00430',
  },
  {
    payer_name: 'BLUE CROSS WA/AK PREMERA BLUE CROSS',
    cs_payerID: '00430',
    State: 'WA',
  },
  {
    payer_name: 'BLUE CROSS WA/AK PREMERA BLUE CROSS',
    cs_payerID: '00430',
    State: 'AK',
  },
  {
    payer_name: 'UMP PLUS',
    cs_payerID: '00932',
    State: 'WA',
  },
  {
    payer_name: 'WASHINGTON BLUE SHIELD REGENCE',
    cs_payerID: '00932',
    State: 'WA',
  },
  {
    payer_name: 'WELLCARE OF  CT, FL, GA, LA, NJ, NY, OH, TX, SC',
    cs_payerID: 14163,
  },
  {
    payer_name: 'HEALTHEASE KIDS FLORIDA',
    cs_payerID: 14163,
  },
  {
    payer_name: 'WELLCARE NORTH CAROLINA, INC',
    cs_payerID: 14163,
  },
  {
    payer_name: 'TEXAS FIRST HEALTH PLAN',
    cs_payerID: 14163,
  },
  {
    payer_name: 'CMS TITLE 21',
    cs_payerID: 14163,
  },
  {
    payer_name: 'SELECTCARE OF TX (HPN) HERITAGE PHYSICIAN NETWORK',
    cs_payerID: 14163,
  },
  {
    payer_name: 'WELLCARE ADVOCATE',
    cs_payerID: 14163,
  },
  {
    payer_name: 'STERLING MEDICARE ADVANTAGE DOS AFTER 04/30/14',
    cs_payerID: 14163,
  },
  {
    payer_name: 'CENTRAL SENIOR CARE',
    cs_payerID: 14163,
  },
  {
    payer_name: 'WELLCARE PFFS',
    cs_payerID: 14163,
  },
  {
    payer_name: 'ADVICARE',
    cs_payerID: 14163,
  },
  {
    payer_name: 'STAYWELL KIDS FLORIDA',
    cs_payerID: 14163,
  },
  {
    payer_name: 'NORTHWEST DIAGNOSTIC',
    cs_payerID: 14163,
  },
  {
    payer_name: 'STAYWELL FLORIDA',
    cs_payerID: 14163,
  },
  {
    payer_name: 'WINDSOR HEALTH PLAN',
    cs_payerID: 14163,
  },
  {
    payer_name: 'SELECTCARE OF TX (HOUSTON)',
    cs_payerID: 14163,
  },
  {
    payer_name: 'KATY MEDICAL GROUP',
    cs_payerID: 14163,
  },
  {
    payer_name: "WELLCARE BY 'OHANA",
    cs_payerID: 14163,
  },
  {
    payer_name: 'WELLCARE OF KENTUCKY',
    cs_payerID: 14163,
  },
  {
    payer_name: 'WELLCARE HEALTH PLAN',
    cs_payerID: 14163,
  },
  {
    payer_name: 'HARMONY HEALTH PLAN LTSS ',
    cs_payerID: 14163,
  },
  {
    payer_name: 'CMS TITLE 19 REFORM',
    cs_payerID: 14163,
  },
  {
    payer_name: 'SELECTCARE OF TEXAS (BEAUMONT)',
    cs_payerID: 14163,
  },
  {
    payer_name: 'TODAYS OPTIONS',
    cs_payerID: 14163,
  },
  {
    payer_name: 'SELECTCARE OF TEXAS (MEMORIAL CLINICAL ASSOCIATES)',
    cs_payerID: 14163,
  },
  {
    payer_name: 'GOLDEN TRIANGLE / GTPA',
    cs_payerID: 14163,
  },
  {
    payer_name: 'HARMONY HEALTH PLAN OF ILLINOIS, INDIANA, MISSOURI',
    cs_payerID: 14163,
  },
  {
    payer_name: 'WELLCARE LIBERTY (HMO SNP)',
    cs_payerID: 14163,
  },
  {
    payer_name: 'SELECTCARE OF TEXAS (KELSEY-SEYBOLD)',
    cs_payerID: 14163,
  },
  {
    payer_name: 'EASY CHOICE HEALTH PLAN OF CALIFORNIA',
    cs_payerID: 14163,
  },
  {
    payer_name: 'WELLCARE HEALTH PLANS',
    cs_payerID: 14163,
  },
  {
    payer_name: 'OHANA HEALTH PLAN HAWAII',
    cs_payerID: 14163,
  },
  {
    payer_name: 'WELLCARE OF SC',
    cs_payerID: 14163,
  },
  {
    payer_name: 'HEALTHEASE FLORIDA',
    cs_payerID: 14163,
  },
  {
    payer_name: 'CLAIMS MANAGEMENT SERVICES, INC.',
    cs_payerID: '00950',
    State: 'WI',
  },
  {
    payer_name: 'COMMUNITYCONNECT HEALTH PLAN',
    cs_payerID: '00950',
    State: 'WI',
  },
  {
    payer_name: 'WISCONSIN BLUE SHIELD',
    cs_payerID: '00950',
    State: 'WI',
  },
  {
    payer_name: 'WISCONSIN MEDICAID',
    cs_payerID: 'WISC_TXIX',
    State: 'WI',
  },
  {
    payer_name: 'WEST VIRGINIA HIGHMARK BLUE CROSS BLUE SHIELD',
    cs_payerID: 54828,
    State: 'WV',
  },
  {
    payer_name: 'WEST VIRGINIA MEDICAID',
    cs_payerID: 'WV_MMIS_4MOLINA',
    State: 'WV',
  },
  {
    payer_name: 'WYOMING BLUE SHIELD',
    cs_payerID: '00960',
    State: 'WY',
  },
  {
    payer_name: 'ZING HEALTH',
    cs_payerID: 83248,
  },
];
let onlycsInstitutionsRawArray = [
  {
    payer_name: '1199SEIU FAMILY OF FUNDS',
    cs_payerID: 13162,
  },
  {
    payer_name: 'MINNESOTA BLUE PLUS',
    cs_payerID: '00220',
  },
  {
    payer_name: 'MINNESOTA BLUE CROSS',
    cs_payerID: '00220',
  },
  {
    payer_name: 'MINNESOTA MEDICAID',
    cs_payerID: 411674742,
    State: 'MN',
  },
  {
    payer_name: 'AARP',
    cs_payerID: 36273,
  },
  {
    payer_name: 'AARP MEDICARE SUPPLEMENT PLANS',
    cs_payerID: 36273,
  },
  {
    payer_name: 'AARP HOSPITAL INDEMNITY PLANS',
    cs_payerID: 36273,
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF CALIFORNIA',
    cs_payerID: '128CA',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF FLORIDA',
    cs_payerID: '128FL',
  },
  {
    payer_name: 'AETNA BETTER HEALTH - IL MEDICAID',
    cs_payerID: 26337,
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF ILLINOIS - MMAI',
    cs_payerID: 26337,
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF ILLINOIS',
    cs_payerID: 26337,
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF ILLINOIS - MEDICAID',
    cs_payerID: 68024,
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF KANSAS',
    cs_payerID: '128KS',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF LOUISIANA',
    cs_payerID: '128LA',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF MARYLAND',
    cs_payerID: '128MD',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF MICHIGAN',
    cs_payerID: '128MI',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF NEW JERSEY',
    cs_payerID: 46320,
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF NEW YORK',
    cs_payerID: 34734,
  },
  {
    payer_name: 'OHIO DUALS',
    cs_payerID: 50023,
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF PENNSYLVANIA',
    cs_payerID: 23228,
  },
  {
    payer_name: 'AETNA BETTER HEALTH - PENNSYLVANIA MEDICAID',
    cs_payerID: 23228,
  },
  {
    payer_name: 'AETNA BETTER HEALTH KIDS',
    cs_payerID: 23228,
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF PENNSYLVANIA',
    cs_payerID: 23228,
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF TEXAS CHIP',
    cs_payerID: 38692,
    State: 'TX',
  },
  {
    payer_name: 'AETNA BETTER HEALTH TX MEDICAID CHIP',
    cs_payerID: 38692,
    State: 'TX',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF TEXAS',
    cs_payerID: 38692,
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF TEXAS',
    cs_payerID: 38692,
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF WEST VIRGINIA',
    cs_payerID: '128WV',
  },
  {
    payer_name: 'AMERIHEALTH CARITAS NEXT VIP',
    cs_payerID: 47073,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS NEXT FLORIDA',
    cs_payerID: 45408,
  },
  {
    payer_name: 'FIRST CHOICE NEXT SOUTH CAROLINA',
    cs_payerID: 57103,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS VIP CARE - DELAWARE DSNP',
    cs_payerID: 87406,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS VIP CARE - FLORIDA DSNP',
    cs_payerID: 88232,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS VIP CARE PLUS MICHIGAN',
    cs_payerID: 77013,
  },
  {
    payer_name: 'ADMINISTRATIVE CONCEPTS',
    cs_payerID: 'E2384',
  },
  {
    payer_name: 'AETNA - TRADITIONAL CHOICE (TC)',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - CHOICE POS II',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - ELECT CHOICE (EC)',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - EPO',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - GOLDEN CHOICE (MEDICARE ADVANTAGE PLAN)',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - GOLDEN MEDICARE - MEDICARE ADVANTAGE PLAN',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - INDEMNITY',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - AEXEL',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA LIFE AND CASUALTY',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - OPEN ACCESS HMO',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA AFFORDABLE HEALTH CHOICES - SRC',
    cs_payerID: 60054,
  },
  {
    payer_name: 'INNOVATION HEALTH LEAP',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - HMO',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - PPO',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - OPEN CHOICE (OC)',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA HEALTH FUND (AHF)',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - MANAGED CHOICE (MC)',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA GOLDEN MEDICARE PLAN',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA LEAP',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA AFFORDABLE HEALTH CHOICES',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - QPOS',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AETNA - USACCESS',
    cs_payerID: 60054,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS DISTRICT OF COLUMBIA',
    cs_payerID: 77002,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS DELAWARE',
    cs_payerID: 77799,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS NEXT NORTH CAROLINA',
    cs_payerID: 83148,
  },
  {
    payer_name: 'ALABAMA BLUE CROSS',
    cs_payerID: '00010BC',
    State: 'AL',
  },
  {
    payer_name: 'ALABAMA MEDICAID - INPATIENT',
    cs_payerID: 752548221,
    State: 'AL',
  },
  {
    payer_name: 'ALABAMA MEDICAID',
    cs_payerID: 752548221,
    State: 'AL',
  },
  {
    payer_name: 'ALLIANT HEALTH PLANS OF GEORGIA',
    cs_payerID: 58234,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS VIP CARE PA COMMHEALTHCHOICES',
    cs_payerID: 77062,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS PA CHC ',
    cs_payerID: 77062,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS VIP CARE PENNSYLVANIA',
    cs_payerID: 77062,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS VIP CARE',
    cs_payerID: 77062,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS OHIO',
    cs_payerID: 84243,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS PENNSYLVANIA',
    cs_payerID: 22248,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS NORTH CAROLINA ',
    cs_payerID: 81671,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS NEW HAMPSHIRE',
    cs_payerID: 87716,
  },
  {
    payer_name: 'APWU HEALTH',
    cs_payerID: 44444,
  },
  {
    payer_name: 'AMERICAN POSTAL WORKERS UNION',
    cs_payerID: 44444,
  },
  {
    payer_name: 'AMERIGROUP CORPORATION (HOUSTON)',
    cs_payerID: 26375,
  },
  {
    payer_name: 'AMERIGROUP IL',
    cs_payerID: 26375,
  },
  {
    payer_name: 'AMERIGROUP',
    cs_payerID: 26375,
  },
  {
    payer_name: 'AMERIGROUP FLORIDA INC',
    cs_payerID: 26375,
  },
  {
    payer_name: 'AMERIGROUP IOWA',
    cs_payerID: 26375,
  },
  {
    payer_name: 'ANTHEM HEALTHKEEPERS',
    cs_payerID: 26375,
  },
  {
    payer_name: 'AMERIGROUP CORPORATION',
    cs_payerID: 26375,
  },
  {
    payer_name: 'AMERIKIDS - DALLAS/FT. WORTH',
    cs_payerID: 26375,
  },
  {
    payer_name: 'AMERICAID COMMUNITY CARE (MD)',
    cs_payerID: 26375,
  },
  {
    payer_name: 'AMERIGROUP COMMUNITY CARE',
    cs_payerID: 26375,
  },
  {
    payer_name: 'UNIVERSITY HEALTH PLAN (UHP) OF NJ DOS &gt;03/01/2010',
    cs_payerID: 26375,
  },
  {
    payer_name: 'AMERIGROUP CORPORATION (FT WORTH)',
    cs_payerID: 26375,
  },
  {
    payer_name: 'AMERIGROUP OF KANSAS',
    cs_payerID: 26375,
  },
  {
    payer_name: 'AMERIGROUP NJ',
    cs_payerID: 26375,
  },
  {
    payer_name: 'ANTARES MANAGEMENT SOLUTIONS',
    cs_payerID: 34192,
  },
  {
    payer_name: 'MUTUAL HEALTH SERVICES',
    cs_payerID: 34192,
  },
  {
    payer_name: 'ANTHEM MAINEHEALTH',
    cs_payerID: '00958',
  },
  {
    payer_name: 'APEXHEALTH',
    cs_payerID: 83112,
  },
  {
    payer_name: 'ARKANSAS MEDICAID',
    cs_payerID: 716007869,
    State: 'AR',
  },
  {
    payer_name: 'ASPIRUS MEDICARE ADVANTAGE',
    cs_payerID: 36483,
  },
  {
    payer_name: 'ASURIS NORTHWEST REGENCE',
    cs_payerID: 93221,
  },
  {
    payer_name: 'AETNA SSI',
    cs_payerID: 62118,
  },
  {
    payer_name: 'AULTRA ADMINISTRATIVE GROUP',
    cs_payerID: 'AULOH',
  },
  {
    payer_name: 'PRIMETIME HEALTH PLAN',
    cs_payerID: 'AULOH',
  },
  {
    payer_name: 'AULTCARE INSURANCE COMPANY',
    cs_payerID: 'AULOH',
  },
  {
    payer_name: 'AULTCARE HEALTH INSURING CORPORATION ',
    cs_payerID: 'AULOH',
  },
  {
    payer_name: 'AULTCARE COPORATION ',
    cs_payerID: 'AULOH',
  },
  {
    payer_name: 'AULTCARE ',
    cs_payerID: 'AULOH',
  },
  {
    payer_name: 'AVMED, INC.',
    cs_payerID: 59274,
  },
  {
    payer_name: 'ARIZONA BLUE CROSS FEP',
    cs_payerID: 53589,
    State: 'AZ',
  },
  {
    payer_name: 'ARIZONA BLUE CROSS HMO',
    cs_payerID: 53589,
    State: 'AZ',
  },
  {
    payer_name: 'ARIZONA BLUE CROSS',
    cs_payerID: 53589,
    State: 'AZ',
  },
  {
    payer_name: 'ARIZONA BLUE CROSS - OUT OF AREA',
    cs_payerID: 53589,
    State: 'AZ',
  },
  {
    payer_name: 'HEALTH CHOICE ARIZONA',
    cs_payerID: 62179,
  },
  {
    payer_name: 'MERCY CARE PLAN',
    cs_payerID: 86052,
  },
  {
    payer_name: 'BLUE CROSS COMPLETE OF MICHIGAN',
    cs_payerID: 32002,
  },
  {
    payer_name: 'BLUE MEDICARE ADVANTAGE',
    cs_payerID: '00772',
  },
  {
    payer_name: 'BANNER MEDICARE ADVANTAGE PRIME HMO (BMAH)',
    cs_payerID: 84323,
  },
  {
    payer_name: 'BANNER MEDICARE ADVANTAGE PLUS PPO (BMAP)',
    cs_payerID: 84324,
  },
  {
    payer_name: 'BRAVEN HEALTH',
    cs_payerID: 84367,
  },
  {
    payer_name: 'BANNER UNIVERSITY FAMILY CARE (UNIVER OF AZ HLTH)',
    cs_payerID: 66901,
  },
  {
    payer_name: 'BCBS OF WESTERN NEW YORK MEDICAID / CHP',
    cs_payerID: '00246',
  },
  {
    payer_name: 'MOTION PICTURE INDUSTRY PENSIONS AND HEALTH PLAN',
    cs_payerID: 47198,
  },
  {
    payer_name: 'ANTHEM BC PARTNERSHIP',
    cs_payerID: 47198,
  },
  {
    payer_name: 'CALIFORNIA FIELD IRONWORKERS TRUST FUNDS',
    cs_payerID: 47198,
    State: 'CA',
  },
  {
    payer_name: 'CALIFORNIA ANTHEM BLUE CROSS',
    cs_payerID: 47198,
  },
  {
    payer_name: 'ANTHEM BLUE CROSS CALIFORNIA',
    cs_payerID: 47198,
    State: 'CA',
  },
  {
    payer_name: 'WRITERS GUILD INDUSTRY HEALTH PLAN',
    cs_payerID: 47198,
  },
  {
    payer_name: 'DIRECTORS GUILD OF AMERICA ',
    cs_payerID: 47198,
  },
  {
    payer_name: 'CAL MEDICONNECT',
    cs_payerID: 47198,
    State: 'CA',
  },
  {
    payer_name: 'CARE 1ST PARTNER PLAN LLC',
    cs_payerID: 57115,
    State: 'CA',
  },
  {
    payer_name: 'BLUE SHIELD OF CALIFORNIA PROMISE HEALTH PLAN',
    cs_payerID: 57115,
    State: 'CA',
  },
  {
    payer_name: 'CALIFORNIA BLUE SHIELD',
    cs_payerID: 94036,
    State: 'CA',
  },
  {
    payer_name: 'CALIFORNIA CHILDRENS SERVICES',
    cs_payerID: 610442,
    State: 'CA',
  },
  {
    payer_name: 'CALIFORNIA MEDI-CAL',
    cs_payerID: 610442,
    State: 'CA',
  },
  {
    payer_name: 'MOLINA DUAL OPTIONS',
    cs_payerID: 38333,
    State: 'CA',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF CALIFORNIA',
    cs_payerID: 38333,
    State: 'CA',
  },
  {
    payer_name: 'CARE N CARE INSURANCE CO',
    cs_payerID: 66010,
  },
  {
    payer_name: 'CLEAR SPRING HEALTH',
    cs_payerID: 85468,
  },
  {
    payer_name: 'CHRISTIAN CARE MINISTRIES',
    cs_payerID: 59355,
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - FLORIDA',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - OHIO',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - INDIANA',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - KANSAS',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - GEORGIA',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - TEXAS',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CENPATICO TEXAS',
    cs_payerID: 68068,
  },
  {
    payer_name: 'INTEGRATED MENTAL HEALTH SERVICES ',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - ILLINOIS',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - SOUTH CAROLINA',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - MISSOURI',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - AZ DOS BEFORE 10/18',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - WISCONSIN',
    cs_payerID: 68068,
  },
  {
    payer_name: 'GROUP PRACTICE AFFILIATES',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CENPATICO BEHAVIORAL HEALTH - MISSISSIPPI',
    cs_payerID: 68068,
  },
  {
    payer_name: 'CHRISTUS HEALTH - USFHP',
    cs_payerID: 90551,
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF VIRGINIA',
    cs_payerID: '128VA',
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - KNOXVILLE PPO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - SOUTHERN FLORIDA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE OF MASSACHUSETTS',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE OF SOUTH CAROLINA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'OCALA PPO - FLORIDA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - RALEIGH',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - NORTHERN NEW JERSEY',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - SAN DIEGO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - TUCSON',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - WASHINGTON',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE OF INDIANA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - CHICAGO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - CLEVELAND',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - NORTHERN CALIFORNIA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - NORTHERN LOUISIANA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'APWU HEALTH PLAN (ALL STATES EXCEPT USVI)',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - SALINAS',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - DALLAS',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - DENVER',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE OF MAINE',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE OF NORTH CAROLINA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - COLUMBUS',
    cs_payerID: 62308,
  },
  {
    payer_name: 'SPECIAL AGENT MUTUAL BENEFIT ASSOCIATION',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - PENNSYLVANIA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - DELAWARE',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - HOUSTON',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - SALT LAKE CITY',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - SAN FRANCISCO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - SOUTHERN CALIFORNIA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - SOUTHERN NEW JERSEY',
    cs_payerID: 62308,
  },
  {
    payer_name: 'EQUICOR - PPO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'ALBUQUERQUE JPPO - NEW MEXICO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - MED ATLANTIC',
    cs_payerID: 62308,
  },
  {
    payer_name: 'ARKANSAS BEST CORPORATION - CHOICE BENEFITS',
    cs_payerID: 62308,
    State: 'AR',
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - GEORGIA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - LOS ANGELES',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - RICHMOND',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE OF KENTUCKY',
    cs_payerID: 62308,
  },
  {
    payer_name: 'SACRAMENTO PPO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'EQUICOR',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - CALIFORNIA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - ORLANDO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'COLLECTIVE HEALTH',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - OSCAR',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLANS',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - NEW YORK',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - ST. LOUIS',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE OF NEW HAMPSHIRE',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE OF NORTH TEXAS',
    cs_payerID: 62308,
  },
  {
    payer_name: 'NALC/AFFORDABLE',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA - PPO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CGLIC, MILWAUKEE',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE OF ARKANSAS (MEDICARE)',
    cs_payerID: 62308,
  },
  {
    payer_name: 'SMARTHEALTH EMPLOYEE PLAN',
    cs_payerID: 62308,
  },
  {
    payer_name: 'SMARTHEALTH EMPLOYEE PLAN ONLY',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - CONNECTICUT',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - KANSAS CITY',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - OKLAHOMA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - TAMPA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - WICHITA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE OF TENNESSEE',
    cs_payerID: 62308,
  },
  {
    payer_name: 'JACKSON PPO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'JACKSONVILLE PPO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'PORTLAND PPO - OREGON',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - HMO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CONNECTICUT GENERAL (CIGNA)',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - LOUISIANA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - MEMPHIS',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - NASHVILLE',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA - DENTAL',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - PHOENIX',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - COMED',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - TULSA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE OF NEW YORK',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE OF OHIO',
    cs_payerID: 62308,
  },
  {
    payer_name: 'KERN PPO - CALIFORNIA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'EQUITABLE (CIGNA)',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - CHARLOTTE',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - CIGNA PREMIER PLUS',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - DAYTON',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CIGNA HEALTH PLAN - MASSACHUSETTS',
    cs_payerID: 62308,
  },
  {
    payer_name: 'HEALTHSOURCE PROVIDENT',
    cs_payerID: 62308,
  },
  {
    payer_name: 'SAMBA',
    cs_payerID: 62308,
  },
  {
    payer_name: 'SETON HEALTH PLAN ',
    cs_payerID: 62308,
  },
  {
    payer_name: 'UFCW LOCAL1529',
    cs_payerID: 62308,
  },
  {
    payer_name: 'CLEAR HEALTH ALLIANCE',
    cs_payerID: 'CLEAR',
  },
  {
    payer_name: 'WEST VIRGINIA MEDICARE',
    cs_payerID: 11003,
    State: 'WV',
  },
  {
    payer_name: 'MONTANA MEDICARE',
    cs_payerID: '03201',
    State: 'MT',
  },
  {
    payer_name: 'NEVADA MEDICARE',
    cs_payerID: '01311',
    State: 'NV',
  },
  {
    payer_name: 'DELAWARE MEDICARE',
    cs_payerID: 12101,
    State: 'DE',
  },
  {
    payer_name: 'VERMONT MEDICARE',
    cs_payerID: 14013,
    State: 'VT',
  },
  {
    payer_name: 'RURAL HEALTH MEDICARE',
    cs_payerID: 10311,
    State: 'TN',
  },
  {
    payer_name: 'NEBRASKA MEDICARE',
    cs_payerID: '05401',
    State: 'NE',
  },
  {
    payer_name: 'DISTRICT OF COLUMBIA MEDICARE',
    cs_payerID: 12201,
    State: 'DC',
  },
  {
    payer_name: 'NORTH DAKOTA MEDICARE',
    cs_payerID: '03301',
    State: 'ND',
  },
  {
    payer_name: 'ARKANSAS MEDICARE',
    cs_payerID: '07101',
    State: 'AR',
  },
  {
    payer_name: 'COLORADO MEDICARE',
    cs_payerID: '04411',
    State: 'CO',
  },
  {
    payer_name: 'OKLAHOMA MEDICARE',
    cs_payerID: '04311',
    State: 'OK',
  },
  {
    payer_name: 'SOUTH CAROLINA MEDICARE',
    cs_payerID: 11001,
    State: 'SC',
  },
  {
    payer_name: 'NEW HAMPSHIRE MEDICARE',
    cs_payerID: 14013,
    State: 'NH',
  },
  {
    payer_name: 'J5 NATIONAL PART A',
    cs_payerID: '05901',
  },
  {
    payer_name: 'IOWA MEDICARE',
    cs_payerID: '05101',
    State: 'IA',
  },
  {
    payer_name: 'INDIANA MEDICARE',
    cs_payerID: '08101',
    State: 'IN',
  },
  {
    payer_name: 'OHIO MEDICARE',
    cs_payerID: 15201,
    State: 'OH',
  },
  {
    payer_name: 'CALIFORNIA MEDICARE',
    cs_payerID: '01111',
    State: 'CA',
  },
  {
    payer_name: 'MICHIGAN MEDICARE',
    cs_payerID: '08201',
    State: 'MI',
  },
  {
    payer_name: 'FLORIDA MEDICARE',
    cs_payerID: '09101',
    State: 'FL',
  },
  {
    payer_name: 'NEW YORK EMPIRE MEDICARE',
    cs_payerID: 13201,
    State: 'NY',
  },
  {
    payer_name: 'MINNESOTA MEDICARE',
    cs_payerID: '06201',
    State: 'MN',
  },
  {
    payer_name: 'CONNECTICUT MEDICARE',
    cs_payerID: 13101,
    State: 'CT',
  },
  {
    payer_name: 'GEORGIA MEDICARE',
    cs_payerID: 10211,
    State: 'GA',
  },
  {
    payer_name: 'MAINE MEDICARE',
    cs_payerID: 14011,
    State: 'ME',
  },
  {
    payer_name: 'NORTH CAROLINA MEDICARE',
    cs_payerID: 11501,
    State: 'NC',
  },
  {
    payer_name: 'LOUISIANA MEDICARE',
    cs_payerID: '07201',
    State: 'LA',
  },
  {
    payer_name: 'TEXAS MEDICARE',
    cs_payerID: '04411',
    State: 'TX',
  },
  {
    payer_name: 'NEW JERSEY MEDICARE',
    cs_payerID: 12401,
    State: 'NJ',
  },
  {
    payer_name: 'ILLINOIS MEDICARE',
    cs_payerID: '06101',
    State: 'IL',
  },
  {
    payer_name: 'WISCONSIN MEDICARE',
    cs_payerID: '06001',
    State: 'WI',
  },
  {
    payer_name: 'OREGON MEDICARE',
    cs_payerID: '02001',
    State: 'OR',
  },
  {
    payer_name: 'KANSAS MEDICARE',
    cs_payerID: '05201',
    State: 'KS',
  },
  {
    payer_name: 'WASHINGTON AND ALASKA MEDICARE',
    cs_payerID: '02001',
    State: 'AK',
  },
  {
    payer_name: 'WASHINGTON AND ALASKA MEDICARE',
    cs_payerID: '02001',
    State: 'WA',
  },
  {
    payer_name: 'TENNESSEE MEDICARE',
    cs_payerID: 10311,
    State: 'TN',
  },
  {
    payer_name: 'MASSACHUSETTS MEDICARE',
    cs_payerID: 14211,
    State: 'MA',
  },
  {
    payer_name: 'KENTUCKY MEDICARE',
    cs_payerID: 15101,
    State: 'KY',
  },
  {
    payer_name: 'VIRGINIA MEDICARE',
    cs_payerID: 11003,
    State: 'VA',
  },
  {
    payer_name: 'ARIZONA MEDICARE',
    cs_payerID: '03101',
    State: 'AZ',
  },
  {
    payer_name: 'MARYLAND MEDICARE',
    cs_payerID: 12301,
    State: 'MD',
  },
  {
    payer_name: 'MISSISSIPPI MEDICARE',
    cs_payerID: '07301',
    State: 'MS',
  },
  {
    payer_name: 'ALABAMA MEDICARE',
    cs_payerID: 10111,
    State: 'AL',
  },
  {
    payer_name: 'NEW MEXICO MEDICARE',
    cs_payerID: '04211',
    State: 'NM',
  },
  {
    payer_name: 'MISSOURI MEDICARE EASTERN',
    cs_payerID: '05301',
    State: 'MO',
  },
  {
    payer_name: 'RHODE ISLAND MEDICARE',
    cs_payerID: 14411,
    State: 'RI',
  },
  {
    payer_name: 'IDAHO MEDICARE',
    cs_payerID: '02001',
    State: 'ID',
  },
  {
    payer_name: 'PENNSYLVANIA MEDICARE',
    cs_payerID: 12501,
    State: 'PA',
  },
  {
    payer_name: 'ARIZONA COMPLETE HEALTH',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM WESTRN SKY COMMUNITY CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM WESTERN SKY COMMUNITY CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WESTERN SKY COMMUNITY CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'AMBETTER FROM SUNFLOWER HEALTH PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'MANAGED HEALTH SERVICES - INDIANA',
    cs_payerID: 68069,
  },
  {
    payer_name: 'HOOSIER CARE CONNECT',
    cs_payerID: 68069,
  },
  {
    payer_name: 'MAGNOLIA HEALTH PLAN - MISSISSIPPI',
    cs_payerID: 68069,
  },
  {
    payer_name: 'PEACH STATE HEALTH PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'BUCKEYE COMMUNITY HEALTH - OHIO',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ARKANSAS TOTAL CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'IOWA TOTAL CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ASCENSION COMPLETE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'NEBRASKA TOTAL CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'MHS HEALTH WISCONSIN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'SUPERIOR MEDICARE ADVANTAGE PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'SUPERIOR HEALTH PLAN - TEXAS',
    cs_payerID: 68069,
  },
  {
    payer_name: 'AMBETTER FROM PENNSYLVANIA HEALTH AND WELLNESS',
    cs_payerID: 68069,
  },
  {
    payer_name: 'LOUISIANA HEALTH CONNECTIONS',
    cs_payerID: 68069,
  },
  {
    payer_name: 'HOMESTATE HEALTH PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'COORDINATED CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'SILVER SUMMIT HEALTH PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'SUNFLOWER HEALTH PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'GRANITE STATE HEALTH PLAN',
    cs_payerID: 68069,
    State: 'NH',
  },
  {
    payer_name: 'NEW HAMPSHIRE HEALTHY FAMILIES',
    cs_payerID: 68069,
    State: 'NH',
  },
  {
    payer_name: 'SUNSHINE HEALTH ',
    cs_payerID: 68069,
  },
  {
    payer_name: 'CAROLINA COMPLETE HEALTH CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'AMBETTER FROM MERIDIAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'HEALTH NET COMMUNITY SOLUTIONS/CALVIVA HEALTH',
    cs_payerID: 95567,
    State: 'CA',
  },
  {
    payer_name: 'HEALTH NET CALIFORNIA AND OREGON (CLAIMS)',
    cs_payerID: 95567,
    State: 'CA',
  },
  {
    payer_name: 'PA HEALTH AND WELLNESS',
    cs_payerID: 68069,
  },
  {
    payer_name: 'CALIFORNIA HEALTH AND WELLNESS',
    cs_payerID: 68069,
  },
  {
    payer_name: 'BUCKEYE OHIO MEDICAID',
    cs_payerID: '0004202',
  },
  {
    payer_name: 'BUCKEYE OHIO MEDICAID VISION',
    cs_payerID: 'V004202',
  },
  {
    payer_name: 'WELLCARE BY HEALTH NET',
    cs_payerID: 68069,
  },
  {
    payer_name: 'HEALTH NET INDIVIDUAL FAMILY PLAN - DOS &gt;12/31/17',
    cs_payerID: 68069,
  },
  {
    payer_name: 'HEALTH NET OF CA, OR - DOS &gt;12/31/17',
    cs_payerID: 68069,
  },
  {
    payer_name: 'HEALTH NET INDIVIDUAL MEDICARE ADVANTAGE PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'HEALTH NET OF CA, OR',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM HEALTH NET',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE DUAL LIBERTY (DSNP)',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE ASSIST (HMO)',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE NO PREMIUM ESSENTIALS (HMO)',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM ARIZONA COMPLETE CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE GIVEBACK (HMO)',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM ARIZONA COMPLETE CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM HEALTH NET',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE SPECIALTY NO PREMIUM (CSNP)',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE NO PREMIUM (HMO)',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL DSNP ',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM ARKANSAS HEALTH AND WELLNESS',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM ARKANSAS HEALTH &amp; WELLNES',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM SUNSHINE HEALTH',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM SUNSHINE HEALTH',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM PEACH STATE HEALTH PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM PEACH STATE HEALTH PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM MANAGED HEALTH SERVICES',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM MANAGED HEALTH SERVICES',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM SUNFLOWER HEALTH PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM SUNFLOWER HEALTH PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM LOUISIANA HEALTHCARE CONNECTIONS',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM LOUISIANA HEALTHCARE CONN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM MAGNOLIA HEALTH',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM MAGNOLIA HEALTH',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM HOME STATE HEALTH',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM HOME STATE HEALTH',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM BUCKEYE HEALTH PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM BUCKEYE HEALTH PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM PA HEALTH &amp; WELLNESS',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM PA HEALTH AND WELLNESS',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM ABSOLUTE TOTAL CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM ABSOLUTE TOTAL CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM SUPERIOR HEALTHPLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM SUPERIOR HEALTHPLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'WELLCARE BY ALLWELL FROM MANAGED HEALTH SEVICES WI',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ALLWELL FROM MANAGED HEALTH SERVICES HEALTH WI',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ABSOLUTE TOTAL CARE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'TOTAL CAROLINA CARE',
    cs_payerID: 68069,
    State: 'SC',
  },
  {
    payer_name: 'AMBETTER FROM HEALTH NET',
    cs_payerID: 68069,
  },
  {
    payer_name: 'AMBETTER FROM HOMESTATE HEALTH',
    cs_payerID: 68069,
  },
  {
    payer_name: 'ADVANTAGE BY BUCKEYE',
    cs_payerID: 68069,
  },
  {
    payer_name: 'AMBETTER ILLINICARE HEALTH',
    cs_payerID: 68069,
  },
  {
    payer_name: 'AMBETTER NEW HAMPSHIRE HEALTHY FAMILIES',
    cs_payerID: 68069,
  },
  {
    payer_name: 'AMBETTER FROM PEACH STATE HEALTH PLAN',
    cs_payerID: 68069,
  },
  {
    payer_name: 'COLORADO BLUE CROSS',
    cs_payerID: '00050',
    State: 'CO',
  },
  {
    payer_name: 'ANTHEM DUAL ADVANTAGE (HMO SNP',
    cs_payerID: '00050',
    State: 'CO',
  },
  {
    payer_name: 'ANTHEM MEDIBLUE PLUS (HMO)',
    cs_payerID: '00050',
    State: 'CO',
  },
  {
    payer_name: 'COLORADO ANTHEM BLUE CROS BLUE SHIELD HMO',
    cs_payerID: '00050',
    State: 'CO',
  },
  {
    payer_name: 'HEALTH FIRST COLORADO FKA COLORADO MEDICAID',
    cs_payerID: 77016,
    State: 'CO',
  },
  {
    payer_name: 'HEALTH FIRST COLORADO FKA COLORADO MEDICAID\\t',
    cs_payerID: 77016,
    State: 'CO',
  },
  {
    payer_name: 'KAISER PERMANENTE',
    cs_payerID: 'RH003',
    State: 'CO',
  },
  {
    payer_name: 'KAISER PERMANENTE OF COLORADO',
    cs_payerID: 'RH003',
    State: 'CO',
  },
  {
    payer_name: 'COLLECTIVE HEALTH',
    cs_payerID: 36479,
  },
  {
    payer_name: 'COMMUNITY HEALTH CHOICE',
    cs_payerID: 48145,
  },
  {
    payer_name: 'COMMUNITY HEALTH CHOICE TEXAS - HIM',
    cs_payerID: 60495,
  },
  {
    payer_name: 'CONNECTICARE VIP MEDICARE ADVANTAGE',
    cs_payerID: 78375,
  },
  {
    payer_name: 'CONNECTICARE, INC.',
    cs_payerID: '06105',
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF KENTUCKY',
    cs_payerID: '128KY',
  },
  {
    payer_name: 'CREATE',
    cs_payerID: 'CREA8',
  },
  {
    payer_name: 'CARESOURCE THE COMMUNITY TRANSITION PLAN',
    cs_payerID: 31114,
    State: 'OH',
  },
  {
    payer_name: 'CARESOURCE MYCARE OHIO',
    cs_payerID: 31114,
  },
  {
    payer_name: 'CARESOURCE OF OHIO',
    cs_payerID: 31114,
  },
  {
    payer_name: 'CARESOURCE ADVANTAGE',
    cs_payerID: 31114,
    State: 'OH',
  },
  {
    payer_name: 'CARESOURCE OHIO MEDICAID',
    cs_payerID: '0003150',
  },
  {
    payer_name: 'CARESOURCE OHIO MEDICAID VISION',
    cs_payerID: 'CSVIS001',
  },
  {
    payer_name: 'TRUSTMARK HEALTH BENEFITS (CORESOURCE LITTLE ROCK)',
    cs_payerID: 75136,
  },
  {
    payer_name: 'TRUSTMARK HEALTH (CORESOURCE AZ IL IN MD MN NC PA)',
    cs_payerID: 35182,
  },
  {
    payer_name: 'TRUSTMARK HEALTH BENEFITS (CORESOURCE INTERNAL)',
    cs_payerID: 35187,
  },
  {
    payer_name: 'TRUSTMARK HEALTH BENEFITS (CORESOURCE KC)',
    cs_payerID: 48117,
  },
  {
    payer_name: 'TRUSTMARK HEALTH BENEFITS (CORESOURCE OH)',
    cs_payerID: 35183,
  },
  {
    payer_name: 'TRUSTMARK HEALTH BENEFITS (CORESOURCE DETROIT)',
    cs_payerID: 38225,
  },
  {
    payer_name: 'CARESOURCE PASSE OF ARKANSAS',
    cs_payerID: 'ARCS1',
  },
  {
    payer_name: 'CARESOURCE HEALTHY INDIANA PLAN (HIP)',
    cs_payerID: 'INCS1',
    State: 'IN',
  },
  {
    payer_name: 'CARESOURCE HOOSIER HEALTHWISE (HHW)',
    cs_payerID: 'INCS1',
    State: 'IN',
  },
  {
    payer_name: 'CARESOURCE OF INDIANA',
    cs_payerID: 'INCS1',
    State: 'IN',
  },
  {
    payer_name: 'CARESOURCE OF KENTUCKY',
    cs_payerID: 'KYCS1',
  },
  {
    payer_name: 'HUMANA CARESOURCE OF KY',
    cs_payerID: 'KYCS1',
  },
  {
    payer_name: 'CARESOURCE NORTH CAROLINA',
    cs_payerID: 'NCCS1',
  },
  {
    payer_name: 'CARESOURCE OF WEST VIRGINIA',
    cs_payerID: 'WVCS1',
  },
  {
    payer_name: 'CONNECTICUT BLUE CROSS',
    cs_payerID: '00060',
    State: 'CT',
  },
  {
    payer_name: 'CONNECTICUT MEDICAID',
    cs_payerID: 61274678,
  },
  {
    payer_name: 'AETNA BETTER HEALTH PLAN',
    cs_payerID: 61274678,
  },
  {
    payer_name: 'MASS ADVANTAGE',
    cs_payerID: 86220,
  },
  {
    payer_name: 'COUNTYCARE HEALTH PLAN ',
    cs_payerID: '06541',
  },
  {
    payer_name: 'BLUE CROSS OF NATIONAL CAPITAL AREA - CAREFIRST',
    cs_payerID: '00080',
    State: 'DC',
  },
  {
    payer_name: 'DISTRICT OF COLUMBIA MEDICAID',
    cs_payerID: 77033,
    State: 'DC',
  },
  {
    payer_name: 'DEAN HEALTH PLAN',
    cs_payerID: 39113,
  },
  {
    payer_name: "CHILDREN'S COMMUNITY HEALTH PLAN",
    cs_payerID: 39113,
  },
  {
    payer_name: 'WELLFIRST HEALTH',
    cs_payerID: 39113,
  },
  {
    payer_name: 'DEANCAREHMO',
    cs_payerID: 39113,
  },
  {
    payer_name: 'DELAWARE BLUE CROSS - HIGHMARK',
    cs_payerID: '00070',
    State: 'DE',
  },
  {
    payer_name: 'DIAMOND PLAN',
    cs_payerID: '75-2548221',
  },
  {
    payer_name: 'DELAWARE MEDICAID',
    cs_payerID: '75-2548221',
  },
  {
    payer_name: 'EMPLOYEE BENEFIT MANAGEMENT SERV (EBMS)',
    cs_payerID: 81039,
  },
  {
    payer_name: 'CIGNA HEALTHSPRING MARYLAND/PENNSYLNAVIA',
    cs_payerID: 52192,
  },
  {
    payer_name: 'EMBLEMHEALTH PLAN INC HMO',
    cs_payerID: 'U5531',
  },
  {
    payer_name: 'EMBLEMHEALTH PLAN INC MCR',
    cs_payerID: 'A3551',
  },
  {
    payer_name: 'VYTRA HEALTHCARE',
    cs_payerID: 22264,
  },
  {
    payer_name: 'EMBLEM HEALTH/HEALTH INSURANCE PLAN OF GREATER NY',
    cs_payerID: 'E5247',
  },
  {
    payer_name: 'HIP-HEALTH INSURANCE PLAN OF GREATER NY',
    cs_payerID: 'E5247',
  },
  {
    payer_name: 'EMBLEM HEALTH MEDICARE CHOICE VALUE',
    cs_payerID: 'E5247',
  },
  {
    payer_name: 'EMBLEMHEALTH MANAGED LTC',
    cs_payerID: 'E5247',
  },
  {
    payer_name: 'EMPIRE HEALTHCHOICE HMO NY',
    cs_payerID: '00303',
    State: 'NY',
  },
  {
    payer_name: 'EMPIRE BCBS HEALTHPLUS FIDA ADVANTAGE PLAN',
    cs_payerID: '00303',
  },
  {
    payer_name: 'EMPIRE BCBS HEALTHPLUS',
    cs_payerID: '00303',
  },
  {
    payer_name: 'NEW YORK EMPIRE BLUE CROSS',
    cs_payerID: '00303',
    State: 'NY',
  },
  {
    payer_name: 'EMPOWER HEALTHCARE SOLUTIONS',
    cs_payerID: 12956,
  },
  {
    payer_name: 'SIGNIFICA BENEFIT SERVICES, INC.',
    cs_payerID: 23250,
  },
  {
    payer_name: 'FALLON TOTAL CARE',
    cs_payerID: 22254,
  },
  {
    payer_name: 'FALLON COMMUNITY HEALTH PLAN',
    cs_payerID: 22254,
  },
  {
    payer_name: 'FIRST CHOICE VIP CARE',
    cs_payerID: 32456,
  },
  {
    payer_name: 'FIRST CHOICE VIP CARE PLUS BY SELECT HEALTH OF SC',
    cs_payerID: 77009,
  },
  {
    payer_name: 'FIDELIS CARE',
    cs_payerID: 11315,
  },
  {
    payer_name: 'FIDELIS DUAL ADVANTAGE NYC',
    cs_payerID: 11315,
  },
  {
    payer_name: 'FIDELIS CARE OF NEW YORK',
    cs_payerID: 11315,
  },
  {
    payer_name: 'NEW YORK STATE CATHOLIC HEALTH PLAN',
    cs_payerID: 11315,
  },
  {
    payer_name: 'FIDELIS CARE AT HOME',
    cs_payerID: 11315,
  },
  {
    payer_name: 'WELLCARE BY FIDELIS CARE',
    cs_payerID: 11315,
  },
  {
    payer_name: 'FIDELIS MEDICAID ADVANTAGE PLUS',
    cs_payerID: 11315,
    State: 'NY',
  },
  {
    payer_name: 'CENTERCARE',
    cs_payerID: 11315,
  },
  {
    payer_name: 'FLORIDA BLUE CROSS',
    cs_payerID: '00590',
    State: 'FL',
  },
  {
    payer_name: 'FLORIDA MEDICAID',
    cs_payerID: 77027,
    State: 'FL',
  },
  {
    payer_name: 'FLORIDA HEALTH CARE PLAN',
    cs_payerID: 59322,
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF FLORIDA',
    cs_payerID: 51062,
  },
  {
    payer_name: 'FARM BUREAU HEALTH PLANS MAPD',
    cs_payerID: 'RP061',
  },
  {
    payer_name: 'PAYER FUSION',
    cs_payerID: 27048,
  },
  {
    payer_name: 'GEORGIA BLUE CROSS',
    cs_payerID: '00101',
    State: 'GA',
  },
  {
    payer_name: 'GEORGIA MEDICAID',
    cs_payerID: 77034,
    State: 'GA',
  },
  {
    payer_name: 'GEHA STANDARD OPTION',
    cs_payerID: 44054,
    State: 'TX',
  },
  {
    payer_name: 'STATE OF TX DENTAL',
    cs_payerID: 44054,
    State: 'TX',
  },
  {
    payer_name: 'GEHA CONNECTION DENTAL PLUS',
    cs_payerID: 44054,
    State: 'TX',
  },
  {
    payer_name: 'GEHA HIGH DEDUCTIBLE HEALTH PLAN (HDHP)',
    cs_payerID: 44054,
    State: 'TX',
  },
  {
    payer_name: 'PRE-EXISTING CONDITION INSURANCE PLAN (PCIP)',
    cs_payerID: 44054,
    State: 'TX',
  },
  {
    payer_name: 'GEHA HIGH OPTION',
    cs_payerID: 44054,
    State: 'TX',
  },
  {
    payer_name: 'GOVERNMENT EMPLOYEE HOSPITAL ASSOCIATION (GEHA)',
    cs_payerID: 44054,
  },
  {
    payer_name: 'FEDERAL EMPLOYEES DENTAL AND VISION (FEDVIP)',
    cs_payerID: 44054,
    State: 'TX',
  },
  {
    payer_name: 'GEHA CONNECTION DENTAL FEDERAL',
    cs_payerID: 44054,
    State: 'TX',
  },
  {
    payer_name: 'FEDERAL EMPLOYEES HEALTH BENEFIT PROGRAM (FEHB)',
    cs_payerID: 44054,
    State: 'TX',
  },
  {
    payer_name: 'GEISINGER HEALTH PLAN',
    cs_payerID: 75273,
  },
  {
    payer_name: 'HIGHMARK BCBS DELAWARE HEALTH OPTIONS',
    cs_payerID: 47181,
  },
  {
    payer_name: 'GATEWAY HEALTH PLAN - MEDICAID PENNSYLVANIA',
    cs_payerID: 25169,
  },
  {
    payer_name: 'GATEWAY HEALTH PLAN - MEDICARE ASSURED PENNSYLVANI',
    cs_payerID: 60550,
  },
  {
    payer_name: 'ROONEY LIFE INC.',
    cs_payerID: 37602,
  },
  {
    payer_name: 'GOLDEN RULE INSURANCE',
    cs_payerID: 37602,
  },
  {
    payer_name: 'GRAVIE INC',
    cs_payerID: 'GRV01',
  },
  {
    payer_name: 'HAP/AHL/CURANET',
    cs_payerID: 382242827,
  },
  {
    payer_name: 'MEDICAL VALUE PLAN - OHIO (MVP)',
    cs_payerID: 382242827,
  },
  {
    payer_name: 'HEALTHY BLUE DUAL ADVANTAGE LOUISIANA',
    cs_payerID: '00551',
  },
  {
    payer_name: 'HEALTHY BLUE MISSOURI',
    cs_payerID: '00541',
  },
  {
    payer_name: 'HEALTHY BLUE NORTH CAROLINA',
    cs_payerID: '00602',
  },
  {
    payer_name: 'HEALTHY BLUE NEBRASKA',
    cs_payerID: '00544',
  },
  {
    payer_name: 'HEALTH FIRST HEALTH PLANS - OSCAR',
    cs_payerID: 'RP039',
  },
  {
    payer_name: 'HEALTHPARTNERS UNITYPOINT HEALTH',
    cs_payerID: 94267,
  },
  {
    payer_name: 'HEALTHPARTNERS OF MINNESOTA',
    cs_payerID: 94267,
  },
  {
    payer_name: 'HEALTH PLAN (THE)',
    cs_payerID: 95677,
  },
  {
    payer_name: 'HEALTH PLAN OF THE UPPER OHIO VALLEY',
    cs_payerID: 95677,
  },
  {
    payer_name: 'THE HEALTH PLAN OF WEST VIRGINIA, INC',
    cs_payerID: 95677,
  },
  {
    payer_name: 'HEALTH PARTNERS, PA',
    cs_payerID: 80142,
  },
  {
    payer_name: 'HEALTH PARTNERS OF PHILADELPHIA INC',
    cs_payerID: 80142,
  },
  {
    payer_name: 'HARVARD PILGRIM HEALTH CARE',
    cs_payerID: 'HPHC0001',
  },
  {
    payer_name: 'HEALTH SERVICES FOR CHILDREN WITH SPECIAL NEEDS',
    cs_payerID: 37290,
  },
  {
    payer_name: 'PITTMAN &amp; ASSOCIATES',
    cs_payerID: 37283,
  },
  {
    payer_name: 'AAG GALLAGHER BENEFITS',
    cs_payerID: 37283,
  },
  {
    payer_name: 'JSL ADMINISTRATORS',
    cs_payerID: 37283,
  },
  {
    payer_name: 'GALLAGHER BENEFIT ADMINSTRATORS',
    cs_payerID: 37283,
  },
  {
    payer_name: 'CINCINNATI FINANCIAL CORPORTATION',
    cs_payerID: 37283,
  },
  {
    payer_name: 'HEALTHSMART BENEFIT SOLUTIONS',
    cs_payerID: 37283,
  },
  {
    payer_name: 'AAG AMERICAN ADMINISTRATIVE GROUP',
    cs_payerID: 37283,
  },
  {
    payer_name: 'HEALTHSPRING OF ALABAMA',
    cs_payerID: 'HSTN',
  },
  {
    payer_name: 'HEALTHSPRING TENNESSEE ',
    cs_payerID: 'HSTN',
  },
  {
    payer_name: 'CIGNA HEALTHSPRING TENNESSEE/ALABAMA',
    cs_payerID: 'HSTN',
  },
  {
    payer_name: 'CIGNA HEALTHSPRING TENNEESSE ALABAMA',
    cs_payerID: 'HSTN',
  },
  {
    payer_name: 'HEALTHSPRING INC.',
    cs_payerID: 'HSTN',
  },
  {
    payer_name: 'CIGNA MEDICARE',
    cs_payerID: 52192,
    State: 'TX',
  },
  {
    payer_name: 'CIGNA HEALTHSPRING STAR+PLUS',
    cs_payerID: 52192,
    State: 'TX',
  },
  {
    payer_name: 'CIGNA HEALTHSPRING BRAVO HEALTH TEXAS',
    cs_payerID: 52192,
    State: 'TX',
  },
  {
    payer_name: 'CIGNA HEALTHSPRING',
    cs_payerID: 52192,
    State: 'TX',
  },
  {
    payer_name: 'HUMANA',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA PUERTO RICO',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA INSURANCE AGENCY',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HMPK, INC.',
    cs_payerID: 61101,
  },
  {
    payer_name: 'PRIME HEALTH MANAGEMENT SERVICES - MISSOURI',
    cs_payerID: 61101,
  },
  {
    payer_name: 'PRIME HEALTH OF KANSAS, INC. - MISSOURI',
    cs_payerID: 61101,
  },
  {
    payer_name: 'OSF HEALTH PLANS',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA HEALTH CHICAGO',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA INSURANCE COMPANY',
    cs_payerID: 61101,
  },
  {
    payer_name: 'KENTUCKY KARE',
    cs_payerID: 61101,
  },
  {
    payer_name: 'EMPLOYERS HEALTH',
    cs_payerID: 61101,
  },
  {
    payer_name: 'GROUP HEALTH INSURANCE - DELAWARE',
    cs_payerID: 61101,
  },
  {
    payer_name: 'LINCOLN NATIONAL - PHOENIX, AZ',
    cs_payerID: 61101,
  },
  {
    payer_name: 'MICHAEL REESE HMO PLAN - ILLINOIS',
    cs_payerID: 61101,
  },
  {
    payer_name: 'EHI',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA GROUP HEALTH PLAN',
    cs_payerID: 61101,
  },
  {
    payer_name: 'EMPHESYS',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA MEDICAL PLAN - KENTUCKY',
    cs_payerID: 61101,
  },
  {
    payer_name: 'MEDICAL PLAN OF KANSAS CITY, MO',
    cs_payerID: 61101,
  },
  {
    payer_name: 'PRIME BENEFITS SYSTEMS, INC. - MISSOURI',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HEALTH VALUE MANAGEMENT - DELAWARE',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA CARE PLAN',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA MEDICAL PLAN - CALIFORNIA',
    cs_payerID: 61101,
  },
  {
    payer_name: 'MICHAEL REESE HMO PLAN - INDIANA',
    cs_payerID: 61101,
  },
  {
    payer_name: 'PRIME HEALTH KANSAS CITY, INC. - MISSOURI',
    cs_payerID: 61101,
  },
  {
    payer_name: 'OCHSNER HEALTH PLAN',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA HEALTH PLAN (HCDS)',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA WISCONSIN HEALTH ORGANIZATION',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HPLAN, INC.',
    cs_payerID: 61101,
  },
  {
    payer_name: 'MOTOROLA, INC.',
    cs_payerID: 61101,
  },
  {
    payer_name: 'ARCADIAN MANAGEMENT SERVICES',
    cs_payerID: 61101,
  },
  {
    payer_name: 'IBA SELF FUNDED GROUP',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA HEALTHY HORIZONS - LOUISIANA',
    cs_payerID: 61101,
    State: 'LA',
  },
  {
    payer_name: 'HUMANA GOLD PLAN',
    cs_payerID: 61101,
  },
  {
    payer_name: 'CARITEN SENIOR HEALTH\\t',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA HEALTH CHICAGO INSURANCE COMPANY',
    cs_payerID: 61101,
  },
  {
    payer_name: 'HUMANA OHIO MEDICAID VISION',
    cs_payerID: 'V021919',
  },
  {
    payer_name: 'HUMANA OHIO MEDICAID',
    cs_payerID: 61103,
  },
  {
    payer_name: 'HORIZON NJ HEALTH',
    cs_payerID: 22326,
  },
  {
    payer_name: 'SOUTH DAKOTA BLUE CROSS',
    cs_payerID: 88848,
    State: 'SD',
  },
  {
    payer_name: 'IOWA BLUE CROSS',
    cs_payerID: 88848,
    State: 'IA',
  },
  {
    payer_name: 'IOWA MEDICAID',
    cs_payerID: 18049,
    State: 'IA',
  },
  {
    payer_name: 'IDAHO BLUE SHIELD REGENCE',
    cs_payerID: '00611',
    State: 'ID',
  },
  {
    payer_name: 'HEALTH CARE SERVICE CORPORATION DBA BCBS OF IL',
    cs_payerID: '00621',
  },
  {
    payer_name: 'BLUE CROSS COMMUNITY FAMILY HEALTH PLAN',
    cs_payerID: '00621',
    State: 'IL',
  },
  {
    payer_name: 'ILLINOIS BLUE CROSS',
    cs_payerID: '00621',
  },
  {
    payer_name: 'ILLINOIS MEDICAID',
    cs_payerID: '37-1320188',
    State: 'IL',
  },
  {
    payer_name: 'IMCARE',
    cs_payerID: 41600,
  },
  {
    payer_name: 'ITASCA MEDICAL CARE',
    cs_payerID: 41600,
  },
  {
    payer_name: 'ANTHEM - CENTRAL, NORTHERN, SOUTHERN',
    cs_payerID: '00130',
  },
  {
    payer_name: 'INDIANA COMPREHENSIVE HEALTH',
    cs_payerID: '00130',
  },
  {
    payer_name: 'INDIANA BLUE CROSS',
    cs_payerID: '00130',
  },
  {
    payer_name: 'INDIANA MEDICAID',
    cs_payerID: 'IHCP',
    State: 'IN',
  },
  {
    payer_name: 'KAISER FOUNDATION HEALTH PLAN OF THE NORTHWEST',
    cs_payerID: 'RH002',
  },
  {
    payer_name: 'HEALTH SHARE OF OREGON CCO - KAISER PERMANENTE NW',
    cs_payerID: 'RH002',
  },
  {
    payer_name: 'KAISER PERMANENTE OF THE NORTHWEST',
    cs_payerID: 'RH002',
  },
  {
    payer_name: 'MISSOURI BLUE CROSS OF KANSAS CITY',
    cs_payerID: 47171,
    State: 'MO',
  },
  {
    payer_name: 'TRANSCHOICE KEY BENEFIT ADMINISTRATORS',
    cs_payerID: 37284,
  },
  {
    payer_name: 'KEY SELECT',
    cs_payerID: 37321,
  },
  {
    payer_name: 'KEY BENEFIT ADMINISTRATORS, INC.',
    cs_payerID: 37217,
  },
  {
    payer_name: 'KEY BENEFIT ADMINISTRATORS - FT MILL, SC',
    cs_payerID: 37216,
  },
  {
    payer_name: 'KEY SOLUTIONS',
    cs_payerID: 37323,
  },
  {
    payer_name: 'KEYSTONE FIRST',
    cs_payerID: 23284,
  },
  {
    payer_name: 'KANSAS BLUE CROSS - TOPEKA',
    cs_payerID: 47163,
    State: 'KS',
  },
  {
    payer_name: 'KEYSTONE FIRST COMMUNITY HEALTHCHOICES',
    cs_payerID: 42344,
  },
  {
    payer_name: 'KAISER FOUNDATION HEALTH PLAN MID-ATLANTIC STATES',
    cs_payerID: 'RH010',
  },
  {
    payer_name: 'KAISER PERMANENTE',
    cs_payerID: 94135,
    State: 'CA',
  },
  {
    payer_name: 'KAISER PERMANENTE OF N CA REGION',
    cs_payerID: 94135,
    State: 'CA',
  },
  {
    payer_name: 'KAISER PERMANENTE OF S CA REGION',
    cs_payerID: 94134,
    State: 'CA',
  },
  {
    payer_name: 'KAISER PERMANENTE',
    cs_payerID: 94134,
    State: 'CA',
  },
  {
    payer_name: 'KEYSTONE FIRST VIP CHOICE',
    cs_payerID: 77741,
  },
  {
    payer_name: 'KY BCBS MEDICAID MANAGED CARE',
    cs_payerID: '00160',
    State: 'KY',
  },
  {
    payer_name: 'KENTUCKY BLUE CROSS',
    cs_payerID: '00160',
    State: 'KY',
  },
  {
    payer_name: 'ANTHEM KY MEDICAID',
    cs_payerID: '00160',
    State: 'KY',
  },
  {
    payer_name: 'ANTHEM KENTUCKY BCBS',
    cs_payerID: '00160',
  },
  {
    payer_name: 'KENTUCKY MEDICAID',
    cs_payerID: 'KYMEDICAID',
    State: 'KY',
  },
  {
    payer_name: 'LA BLUE ADVANTAGE',
    cs_payerID: 72107,
  },
  {
    payer_name: 'STATE EMPLOYEES GROUP BENEFITS PROGRAM',
    cs_payerID: 53120,
  },
  {
    payer_name: 'LOUISIANA BLUE CROSS',
    cs_payerID: 53120,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS LOUISIANA',
    cs_payerID: 27357,
  },
  {
    payer_name: 'LA CARE HEALTH PLAN',
    cs_payerID: 'LACAR',
  },
  {
    payer_name: 'BLUE CROSS BLUE SHIELD OF MASSACHUSETTS',
    cs_payerID: '00200',
    State: 'MA',
  },
  {
    payer_name: 'MASSACHUSETTS MEDICAID',
    cs_payerID: 'DMA7384',
    State: 'MA',
  },
  {
    payer_name: 'OSCAR HEALTH PLAN OF NEW YORK - DOS &lt;1/1/17',
    cs_payerID: 11303,
    State: 'NY',
  },
  {
    payer_name: 'MAGNACARE',
    cs_payerID: 11303,
    State: 'NY',
  },
  {
    payer_name: 'LOCAL 486 PLUMBERS AND STEAMFITTERS',
    cs_payerID: '00190',
  },
  {
    payer_name: 'MARYLAND BLUE CROSS - CAREFIRST',
    cs_payerID: '00190',
  },
  {
    payer_name: 'MEDICO INSURANCE COMPANY',
    cs_payerID: 23160,
  },
  {
    payer_name: 'MARYLAND PHYSICIANS CARE',
    cs_payerID: 76498,
  },
  {
    payer_name: 'MAINE BLUE CROSS',
    cs_payerID: '00680',
    State: 'ME',
  },
  {
    payer_name: 'MAINE MEDICAID',
    cs_payerID: 'ME_MMIS_4_DXCMS',
    State: 'ME',
  },
  {
    payer_name: 'MEDICA GOVERNMENT PROGRAMS',
    cs_payerID: 'MEDM1',
  },
  {
    payer_name: 'MERITAIN HEALTH MINNEAPOLIS',
    cs_payerID: 41124,
  },
  {
    payer_name: 'EMPLOYEE BENEFIT SERVICES OF LOUISIANA, INC. (EBS)',
    cs_payerID: 41124,
  },
  {
    payer_name: 'METROPLUSHEALTH',
    cs_payerID: 13265,
  },
  {
    payer_name: 'MICHIGAN BLUE CROSS (FEP)',
    cs_payerID: '00210',
    State: 'MI',
  },
  {
    payer_name: 'MEDICARE PLUS BLUE - MEDICARE ADVANTAGE PLAN',
    cs_payerID: '00210',
    State: 'MI',
  },
  {
    payer_name: 'BLUE CROSS COMPLETE OF MI (MIBCN)',
    cs_payerID: '00210',
  },
  {
    payer_name: 'MICHIGAN BLUE CROSS',
    cs_payerID: '00210',
  },
  {
    payer_name: 'MCARE',
    cs_payerID: '00210',
  },
  {
    payer_name: 'BLUE CARE NETWORK HMO',
    cs_payerID: '00210',
  },
  {
    payer_name: 'BCBS COMPLETE',
    cs_payerID: '00210',
    State: 'MI',
  },
  {
    payer_name: 'MICHIGAN CHILD',
    cs_payerID: 'D00111',
    State: 'MI',
  },
  {
    payer_name: 'MICHIGAN MEDICAID',
    cs_payerID: 'D00111',
    State: 'MI',
  },
  {
    payer_name: 'CAPE HEALTH PLAN',
    cs_payerID: 38334,
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF MICHIGAN',
    cs_payerID: 38334,
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF WISCONSIN',
    cs_payerID: 'ABRI1',
    State: 'WI',
  },
  {
    payer_name: 'ABRI HEALTH PLAN',
    cs_payerID: 'ABRI1',
    State: 'WI',
  },
  {
    payer_name: 'MOLINA COMPLETE CARE OF ARIZONA',
    cs_payerID: 'MCC01',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF  IDAHO',
    cs_payerID: 61799,
  },
  {
    payer_name: 'PASSPORT HEALTH PLAN BY MOLINA HEALTHCARE',
    cs_payerID: 61325,
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF NEVADA',
    cs_payerID: 'MLNNV',
  },
  {
    payer_name: 'MOLINA COMPLETE CARE OF VIRGINIA',
    cs_payerID: 'MCC02',
  },
  {
    payer_name: 'MERCY CARE RBHA',
    cs_payerID: 33628,
  },
  {
    payer_name: 'MEDICAL MUTUAL OF OHIO - PROLINK',
    cs_payerID: 29076,
  },
  {
    payer_name: 'CAROLINA CARE PLAN INC.',
    cs_payerID: 29076,
  },
  {
    payer_name: 'UCARE MN HC PROGRAMS DOS ON OR AFTER 1-1-2022',
    cs_payerID: 55413,
  },
  {
    payer_name: 'UCARE IFP DOS ON OR AFTER 1-1-2019',
    cs_payerID: 55413,
  },
  {
    payer_name: 'UCARE MEDICARE PLANS DOS BEFORE 1-1-2020',
    cs_payerID: 52629,
  },
  {
    payer_name: 'UCARE MN HEALTH CARE PROGRAMS DOS BEFORE 1-1-2022',
    cs_payerID: 52629,
  },
  {
    payer_name: 'UCARE IFP DOS BEFORE 1-1-2019',
    cs_payerID: 52629,
  },
  {
    payer_name: 'MISSOURI BLUE CROSS - ST LOUIS MO',
    cs_payerID: '00241',
    State: 'MO',
  },
  {
    payer_name: 'MISSOURI MEDICAID',
    cs_payerID: 954897,
    State: 'MO',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF ILLINOIS',
    cs_payerID: 20934,
  },
  {
    payer_name: 'MORECARE',
    cs_payerID: 65465,
  },
  {
    payer_name: 'MISSISSIPPI BLUE CROSS',
    cs_payerID: '00230',
    State: 'MS',
  },
  {
    payer_name: 'MISSISSIPPI MEDICAID',
    cs_payerID: 77032,
    State: 'MS',
  },
  {
    payer_name: 'MONTANA BLUE CROSS',
    cs_payerID: 'BCBS',
    State: 'MT',
  },
  {
    payer_name: 'BLUE FOCUS POS',
    cs_payerID: 'BCBS',
    State: 'MT',
  },
  {
    payer_name: 'BLUE PREFERRED PPO',
    cs_payerID: 'BCBS',
    State: 'MT',
  },
  {
    payer_name: 'UNITED OF OMAHA',
    cs_payerID: 71412,
  },
  {
    payer_name: 'GPM LIFE',
    cs_payerID: 71412,
  },
  {
    payer_name: 'MUTUALLY PREFERRED',
    cs_payerID: 71412,
  },
  {
    payer_name: 'ASSURED LIFE ASSOCIATION',
    cs_payerID: 71412,
  },
  {
    payer_name: 'EXCLUSICARE',
    cs_payerID: 71412,
  },
  {
    payer_name: 'MUTUAL OF OMAHA',
    cs_payerID: 71412,
  },
  {
    payer_name: 'MUTUAL OF OMAHA INSURANCE COMPANY',
    cs_payerID: 71412,
  },
  {
    payer_name: 'NATIONAL RURAL LETTER CARRIER ASSOC',
    cs_payerID: 71412,
  },
  {
    payer_name: 'NORTH CAROLINA BLUE CROSS',
    cs_payerID: 560894904,
    State: 'NC',
  },
  {
    payer_name: 'NORTH CAROLINA MEDICAID',
    cs_payerID: 'DNC00',
    State: 'NC',
  },
  {
    payer_name: 'NORTH DAKOTA BLUE CROSS',
    cs_payerID: 55891,
    State: 'ND',
  },
  {
    payer_name: 'NEBRASKA BLUE CROSS',
    cs_payerID: '00260',
    State: 'NE',
  },
  {
    payer_name: 'NEW HAMPSHIRE BLUE CROSS',
    cs_payerID: '00270',
    State: 'NH',
  },
  {
    payer_name: 'NEW HAMPSHIRE MEDICAID',
    cs_payerID: 26000618,
    State: 'NH',
  },
  {
    payer_name: 'HORIZON BLUE CROSS OF NEW JERSEY',
    cs_payerID: 22099,
  },
  {
    payer_name: 'HORIZON BLUE CROSS OF NEW JERSEY ',
    cs_payerID: 22099,
    State: 'NJ',
  },
  {
    payer_name: 'OMNIA HEALTH PLANS',
    cs_payerID: 22099,
    State: 'NJ',
  },
  {
    payer_name: 'HORIZON HEALTHCARE OF NEW YORK',
    cs_payerID: 22099,
    State: 'NY',
  },
  {
    payer_name: 'NIPPON LIFE INSURANCE COMPANY OF AMERICA',
    cs_payerID: 81264,
  },
  {
    payer_name: 'LOVELACE MEDICARE ADVANTAGE',
    cs_payerID: '00790',
    State: 'NM',
  },
  {
    payer_name: 'BLUE SALUD',
    cs_payerID: '00790',
    State: 'NM',
  },
  {
    payer_name: 'BLUE CROSS MEDICARE ADVANTAGE',
    cs_payerID: '00790',
    State: 'NM',
  },
  {
    payer_name: 'NEW MEXICO BLUE CROSS',
    cs_payerID: '00790',
    State: 'NM',
  },
  {
    payer_name: 'LOVELACE SANDIA HEALTH PLAN DOS &gt;5/31/2014',
    cs_payerID: '00790',
  },
  {
    payer_name: 'NEVADA BLUE CROSS',
    cs_payerID: '00265',
    State: 'NV',
  },
  {
    payer_name: 'NEW YORK MEDICAID TITLE XIX - PHASE II',
    cs_payerID: 141797357,
    State: 'NY',
  },
  {
    payer_name: 'NEW YORK BLUE CROSS OF  ROCHESTER',
    cs_payerID: '00304',
    State: 'NY',
  },
  {
    payer_name: 'NEW YORK BLUE CROSS CENTRAL REGION',
    cs_payerID: '00305',
    State: 'NY',
  },
  {
    payer_name: 'HEALTHFIRST PHSP',
    cs_payerID: 80141,
  },
  {
    payer_name: 'HEALTHFIRST HEALTH PLAN OF NEW JJERSEY',
    cs_payerID: 80141,
  },
  {
    payer_name: 'HEALTHFIRST, INC. (NEW YORK)',
    cs_payerID: 80141,
  },
  {
    payer_name: 'HEALTHFIRST FAMILY HEALTH PLUS (FHP)',
    cs_payerID: 80141,
  },
  {
    payer_name: 'HEALTHFIRST COMPLETE CARE',
    cs_payerID: 80141,
  },
  {
    payer_name: 'HEALTHFIRST 65 PLUS',
    cs_payerID: 80141,
  },
  {
    payer_name: 'SENIOR HEALTH PARTNERS A HEALTHFIRST COMPANY',
    cs_payerID: 80141,
  },
  {
    payer_name: 'HEALTHFIRST MAXIMUM',
    cs_payerID: 80141,
  },
  {
    payer_name: 'HEALTHFIRST OF NEW YORK',
    cs_payerID: 80141,
  },
  {
    payer_name: 'CHILDHEALTH PLUS BY HEALTHFIRST (CHP)',
    cs_payerID: 80141,
  },
  {
    payer_name: 'HEALTHFIRST NEW YORK (COMMERCIAL)',
    cs_payerID: 80141,
  },
  {
    payer_name: 'OHIO BLUE CROSS',
    cs_payerID: '00332',
    State: 'OH',
  },
  {
    payer_name: 'ANTHEM OHIO MEDICAID',
    cs_payerID: '0002937',
  },
  {
    payer_name: 'OHIO MEDICAID',
    cs_payerID: 'MMISODJFS',
    State: 'OH',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF OHIO',
    cs_payerID: 20149,
  },
  {
    payer_name: 'MOLINA OHIO MEDICAID',
    cs_payerID: 73160,
  },
  {
    payer_name: 'OHIORISE - AETNA BETTER HEALTH OF OHIO',
    cs_payerID: 45221,
  },
  {
    payer_name: 'AETNA BETTER HEALTH OF OHIORISE',
    cs_payerID: 45221,
  },
  {
    payer_name: 'LOVELACE MEDICARE ADVANTAGE OK',
    cs_payerID: '00840',
    State: 'OK',
  },
  {
    payer_name: 'OKLAHOMA BLUE CROSS',
    cs_payerID: '00840',
    State: 'OK',
  },
  {
    payer_name: 'OKLAHOMA MEDICAID',
    cs_payerID: 731476619,
    State: 'OK',
  },
  {
    payer_name: 'OREGON BLUE CROSS REGENCE',
    cs_payerID: '00851',
    State: 'OR',
  },
  {
    payer_name: 'OSCAR HEALTH',
    cs_payerID: 'OSCAR',
  },
  {
    payer_name: 'OSCAR HEALTH PLAN OF NEW YORK - DOS &gt;12/31/16',
    cs_payerID: 'OSCAR',
  },
  {
    payer_name: 'OXFORD HEALTH PLANS',
    cs_payerID: '06111',
  },
  {
    payer_name: 'CONNECT BLUE EPO',
    cs_payerID: '54771W',
    State: 'PA',
  },
  {
    payer_name: 'PENNSYLVANIA BLUE CROSS WESTERN',
    cs_payerID: '54771W',
    State: 'PA',
  },
  {
    payer_name: 'PENNSYLVANIA BLUE CROSS CENTRAL',
    cs_payerID: '54771C',
    State: 'PA',
  },
  {
    payer_name: 'CONNECT BLUE EPO',
    cs_payerID: '54771C',
    State: 'PA',
  },
  {
    payer_name: 'PENNSYLVANIA MEDICAID',
    cs_payerID: 236003113,
    State: 'PA',
  },
  {
    payer_name: 'CAPITAL BLUE CROSS',
    cs_payerID: '00361',
  },
  {
    payer_name: 'SENIOR BLUE OF PENNSYLVANIA (MEDICARE HMO)',
    cs_payerID: '00361',
  },
  {
    payer_name: 'PENNSYLVANIA INDEPENDENCE BLUE CROSS',
    cs_payerID: 54704,
    State: 'PA',
  },
  {
    payer_name: 'PIEDMONT COMMUNITY HEALTH PLAN',
    cs_payerID: 55768,
  },
  {
    payer_name: 'PERFORMCARE',
    cs_payerID: 65391,
  },
  {
    payer_name: 'AMERIHEALTH CARITAS FLORIDA',
    cs_payerID: 77003,
  },
  {
    payer_name: 'PHYSICIANS HEALTH PLAN MID-MICHIGAN / PHP',
    cs_payerID: 37330,
  },
  {
    payer_name: 'PHP-FAMILY CARE OF MI',
    cs_payerID: 37330,
  },
  {
    payer_name: 'PHYSICIAN HEALTH PLAN OF NORTHERN INDIANA - PHP',
    cs_payerID: 12399,
  },
  {
    payer_name: 'PROMINENCE HEALTH PLAN OF NEVADA',
    cs_payerID: 93082,
  },
  {
    payer_name: 'PREFERRED ONE COMMUNITY HEALTH PLAN',
    cs_payerID: 411479744,
  },
  {
    payer_name: 'PREFERRRED ONE',
    cs_payerID: 411479744,
  },
  {
    payer_name: 'PROMINENCE HEALTHFIRST OF FLORIDA',
    cs_payerID: 83352,
  },
  {
    payer_name: 'CARE CHOICES HMO/PREFERRED CHOICES OF MICHIGAN PPO',
    cs_payerID: 'PRIORITY HEALTH',
  },
  {
    payer_name: 'PRIORITY HEALTH OF MICHIGAN',
    cs_payerID: 'PRIORITY HEALTH',
  },
  {
    payer_name: 'PARAMOUNT',
    cs_payerID: 4198872500,
    State: 'NY',
  },
  {
    payer_name: 'PARAMOUNT ADVANTAGE',
    cs_payerID: 4198872500,
    State: 'NY',
  },
  {
    payer_name: 'PRIME WEST',
    cs_payerID: 61604,
  },
  {
    payer_name: 'PRIME HEALTH COMPLETE',
    cs_payerID: 61604,
  },
  {
    payer_name: 'SELECT BENEFIT ADMINISTRATORS',
    cs_payerID: 93031,
  },
  {
    payer_name: 'PACIFICSOURCE ADMINISTRATORS',
    cs_payerID: 93031,
  },
  {
    payer_name: 'PACIFICSOURCE HEALTH PLANS',
    cs_payerID: 93029,
  },
  {
    payer_name: 'PACIFICSOURCE MEDICARE',
    cs_payerID: 20377,
  },
  {
    payer_name: 'PACIFICSOURCE COMMUNITY HEALTH PLAN INC.',
    cs_payerID: 20377,
  },
  {
    payer_name: 'QUARTZ ASO',
    cs_payerID: 39180,
  },
  {
    payer_name: 'SOUTH CAROLINA BLUE CROSS',
    cs_payerID: '00401',
  },
  {
    payer_name: 'EMPLOYEE BENEFIT SERVICES DBA KEY BENEFIT ADMIN',
    cs_payerID: '00401',
  },
  {
    payer_name: '\\tFEDERAL EMPLOYEE HEALTH BENEFITS PROGRAM (FEP)',
    cs_payerID: '00401',
  },
  {
    payer_name: 'PREFERRED BLUE',
    cs_payerID: '00401',
  },
  {
    payer_name: 'CAROLINA BENEFIT ADMINISTRATORS',
    cs_payerID: '00401',
  },
  {
    payer_name: 'PLANNED ADMINISTRATORS',
    cs_payerID: '00401',
  },
  {
    payer_name: 'THOMAS COOPER AGENCY',
    cs_payerID: '00401',
  },
  {
    payer_name: 'BLUECHOICE HEALTHPLAN',
    cs_payerID: '00401',
  },
  {
    payer_name: 'EMPLOYERS LIFE INSURANCE',
    cs_payerID: '00401',
  },
  {
    payer_name: 'SC BCBS STATE HEALTH PLAN',
    cs_payerID: '00401',
  },
  {
    payer_name: 'MEDICARE BLUE',
    cs_payerID: '00401',
  },
  {
    payer_name: 'MEDICAL CLAIMS MANAGEMENT CORPORATION',
    cs_payerID: '00401',
  },
  {
    payer_name: 'CONSOLIDATED BENEFITS INC.',
    cs_payerID: '00401',
  },
  {
    payer_name: 'FEDERAL EMPLOYEE HEALTH BENEFITS PROGRAM (FEP)',
    cs_payerID: '00401',
  },
  {
    payer_name: 'SC BCBS PREFERRED HEALTH SYSTEMS HMO BLUE',
    cs_payerID: '00401',
  },
  {
    payer_name: 'SOUTH CAROLINA MEDICAID',
    cs_payerID: 'SCXIX',
    State: 'SC',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF SOUTH CAROLINA',
    cs_payerID: 46299,
  },
  {
    payer_name: 'SELECT HEALTH OF SOUTH CAROLINA',
    cs_payerID: 23285,
    State: 'SC',
  },
  {
    payer_name: 'SELMAN AND COMPANY',
    cs_payerID: 52214,
  },
  {
    payer_name: 'SIMPLY HEALTHCARE PLANS, INC.',
    cs_payerID: 'SMPLY',
  },
  {
    payer_name: 'STUDENT INS.-MEGA LIFE &amp; HEALTH INSURANCE CO',
    cs_payerID: 74227,
  },
  {
    payer_name: 'STUDENT INSURANCE-MIDWEST NATIONAL LIFE INS OF  TN',
    cs_payerID: 74227,
  },
  {
    payer_name: 'CHESAPEAKE LIFE INSURANCE CO-STUDENT INSURANCE',
    cs_payerID: 74227,
  },
  {
    payer_name: 'MEGA LIFE &amp; HEALTH INSURANCE CO-STUDENT INSURANCE',
    cs_payerID: 74227,
  },
  {
    payer_name: 'MIDWEST NATIONAL LIFE INS OF  TN-STUDENT INSURANCE',
    cs_payerID: 74227,
  },
  {
    payer_name: 'PROMINENCE HEALTH PLAN OF TEXAS',
    cs_payerID: 80095,
  },
  {
    payer_name: 'SENIOR WHOLE HEALTH OF MASSACHUSETTS',
    cs_payerID: 'SWHMA',
  },
  {
    payer_name: 'VOLUNTEER STATE HELATH PLAN',
    cs_payerID: '00390',
    State: 'TN',
  },
  {
    payer_name: 'TENNESSEE BLUE CROSS',
    cs_payerID: '00390',
    State: 'TN',
  },
  {
    payer_name: 'BLUECARE - BCBSTN',
    cs_payerID: '00390',
  },
  {
    payer_name: 'TENNCARE SELECT',
    cs_payerID: '00390',
  },
  {
    payer_name: 'TENNESSEE BLUECARE',
    cs_payerID: '00390',
  },
  {
    payer_name: 'TRICARE - WEST REGION',
    cs_payerID: '12C01',
  },
  {
    payer_name: 'TEST MED',
    cs_payerID: 29076,
  },
  {
    payer_name: 'TEST MHS ',
    cs_payerID: 34192,
  },
  {
    payer_name: 'TEXAS BLUE CROSS',
    cs_payerID: 84980,
    State: 'TX',
  },
  {
    payer_name: 'TEXAS MEDICAID',
    cs_payerID: '617591011C21P',
  },
  {
    payer_name: 'RIGHT CARE FROM SCOTT &amp; WHITE HEALTH PLAN',
    cs_payerID: '617591011C21P',
  },
  {
    payer_name: 'CSHCN (CHILDREN WITH SPECIAL HEALTH CARE NEEDS))',
    cs_payerID: '617591011C21P',
    State: 'TX',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF TEXAS',
    cs_payerID: 20554,
  },
  {
    payer_name: 'ARIZONA PHYSICIANS IPA',
    cs_payerID: '03432',
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN FKA APIPA',
    cs_payerID: '03432',
  },
  {
    payer_name: 'UNITEDHEALTHCARE ARIZONA PHYSICIANS IPA',
    cs_payerID: '03432',
  },
  {
    payer_name: 'UNITEDHEALTHCARE LONG TERM CARE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN',
    cs_payerID: 87726,
  },
  {
    payer_name: 'PHYSICIAN HEALTH PARTNERS MEDICARE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN OF HAWAII QUEST IN',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARECOMPLETE OPEN PREMIER',
    cs_payerID: 87726,
    State: 'WI',
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE CHOICE',
    cs_payerID: 87726,
    State: 'GA',
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARE GOLD',
    cs_payerID: 87726,
    State: 'GA',
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARE SILVER',
    cs_payerID: 87726,
    State: 'GA',
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN - MS CHIP',
    cs_payerID: 87726,
  },
  {
    payer_name: 'HARVARD PILGRIM PASSPORT CONNECT',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN PENNSYLVANIA',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARE COMPLETE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE PLAN OF HAWAII',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARECOMPLETE OPEN',
    cs_payerID: 87726,
    State: 'WI',
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARE GOLD',
    cs_payerID: 87726,
    State: 'SC',
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARE SILVER',
    cs_payerID: 87726,
    State: 'TX',
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN RIVER VALLEY',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN IOWA',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN DELAWARE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'OPTUMHEALTH BEHAVIORAL SOLUTIONS',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN MARYLAND',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN WASHINGTON',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE NURSING HOME PLAN',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN MA SENIOR CARE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITED HEALTHCARE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN NEW JERSEY',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN OF MASSACHUSETTS',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN INDIANA',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARE GOLD',
    cs_payerID: 87726,
    State: 'MO',
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARE GOLD',
    cs_payerID: 87726,
    State: 'TX',
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARE SILVER',
    cs_payerID: 87726,
    State: 'MO',
  },
  {
    payer_name: 'UNITED HEALTHCARE COMMUNITY PLAN OF KENTUCKY',
    cs_payerID: 87726,
    State: 'KY',
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE PLAN OF OHIO',
    cs_payerID: 87726,
    State: 'OH',
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN NEW MEXICO',
    cs_payerID: 87726,
  },
  {
    payer_name: 'AARP MEDICARE COMPLETE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN TEXAS',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN OF NEW MEXICO CENT',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE DEFINITY HEALTH PLAN',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN OF TENNESSEE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARECOMPLETE CHOICE',
    cs_payerID: 87726,
    State: 'GA',
  },
  {
    payer_name: 'CARE IMPROVEMENT PLUS SOUTH CENTRAL INS. CO.',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE LEVEL FUNDED PLAN',
    cs_payerID: 87726,
  },
  {
    payer_name: 'CARE IMPROVEMENT PLUS',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE PLAN OF FLORIDA',
    cs_payerID: 87726,
    State: 'FL',
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE PLAN OF TEXAS',
    cs_payerID: 87726,
    State: 'TX',
  },
  {
    payer_name: 'OPTUMHEALTH BEHAVIORAL SOLUTIONS NEW MEXICO',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN WISCONSIN',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN NEW YORK',
    cs_payerID: 87726,
  },
  {
    payer_name: 'DEFINITY HEALTH',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE PLAN OF NEW MEXICO',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITED HEALTHCARE OF THE MID-ATLANTIC',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARECOMPLETE CHOICE',
    cs_payerID: 87726,
    State: 'AR',
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARECOMPLETE CHOICE',
    cs_payerID: 87726,
    State: 'SC',
  },
  {
    payer_name: 'UNITEDHEALTHCARE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE MAHP-MD IPA, OPTIMUM CHOICE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE GROUP MEDICARE ADVANTAGE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE PLAN OF WASHINGTON',
    cs_payerID: 87726,
    State: 'WA',
  },
  {
    payer_name: 'ARNETT HEALTH PLAN',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE WEST (AZ,CA,OK,OR,TX,WA,CO,NV)',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE CHRONIC COMPLETE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN NEBRASKA',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN MISSISSIPPI',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARE GOLD',
    cs_payerID: 87726,
    State: 'AR',
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARE SILVER',
    cs_payerID: 87726,
    State: 'SC',
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARECOMPLETE CHOICE',
    cs_payerID: 87726,
    State: 'TX',
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN TENNESSEE',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE PLAN OF MISSOURI',
    cs_payerID: 87726,
    State: 'MO',
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN RHODE ISLAND',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARE SILVER',
    cs_payerID: 87726,
    State: 'AR',
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE CHOICE',
    cs_payerID: 87726,
    State: 'MO',
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE CHOICE',
    cs_payerID: 87726,
    State: 'TX',
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARECOMPLETE CHOICE',
    cs_payerID: 87726,
    State: 'MO',
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE PLAN OF WISCONSIN',
    cs_payerID: 87726,
    State: 'WI',
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN FLORIDA',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN HAWAII',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN LOUISIANA',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN OHIO',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE EMPIRE PLAN',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARE SOLUTIONS FKA SECUREHORI',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN MS CAN',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN MASSACHUSETTS SCO',
    cs_payerID: 87726,
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE CHOICE',
    cs_payerID: 87726,
    State: 'AR',
  },
  {
    payer_name: 'UNITEDHEALTHCARE MEDICARECOMPLETE ASSIST',
    cs_payerID: 87726,
    State: 'WI',
  },
  {
    payer_name: 'UNITEDHEALTHCARE DUAL COMPLETE CHOICE',
    cs_payerID: 87726,
    State: 'SC',
  },
  {
    payer_name: 'UNITEDHEALTHCARE OHIO MEDICAID',
    cs_payerID: 88337,
  },
  {
    payer_name: 'UNITEDHEALTHCARE OHIO MEDICAID VISION',
    cs_payerID: '8357V',
  },
  {
    payer_name: 'RIDGEVIEW COMMUNITY NETWORK',
    cs_payerID: 94265,
    State: 'MN',
  },
  {
    payer_name: 'ALTRU &amp; YOU',
    cs_payerID: 94265,
  },
  {
    payer_name: 'MEDICA HEALTH PLANS (ACCESSABILITY SOLUTION)',
    cs_payerID: 94265,
  },
  {
    payer_name: 'MEDICA HEALTH PLAN',
    cs_payerID: 94265,
  },
  {
    payer_name: 'UNITEDHEALTHCARE COMMUNITY PLAN OF MISSOURI',
    cs_payerID: 86050,
  },
  {
    payer_name: 'ULTIMATE HEALTH PLANS',
    cs_payerID: 77022,
  },
  {
    payer_name: 'WAUSAU PREFERRED HEALTH PLANS',
    cs_payerID: 39026,
  },
  {
    payer_name: 'MIDWEST PREFERRED',
    cs_payerID: 39026,
  },
  {
    payer_name: 'UMR FKA UMR ONALASKA',
    cs_payerID: 39026,
  },
  {
    payer_name: 'UNITED MEDICAL RESOURCES ONALASKA',
    cs_payerID: 39026,
  },
  {
    payer_name: 'EAU CLAIRE PROVIDERS CHOICE',
    cs_payerID: 39026,
  },
  {
    payer_name: 'EAU CLAIRE HEALTH PROTECTION PLAN',
    cs_payerID: 39026,
  },
  {
    payer_name: 'ECOH',
    cs_payerID: 39026,
  },
  {
    payer_name: 'EHC',
    cs_payerID: 39026,
  },
  {
    payer_name: 'UMR CINCINNATI REPRICING VIA HEALTHSPAN',
    cs_payerID: 39026,
  },
  {
    payer_name: 'TEACHERS HEALTH TRUST',
    cs_payerID: 39026,
  },
  {
    payer_name: 'GREATER LA CROSSE CARE 65+',
    cs_payerID: 39026,
  },
  {
    payer_name: 'UMR FKA UMR WAUSAU',
    cs_payerID: 39026,
  },
  {
    payer_name: 'UMP - MIDWEST SECURITIES',
    cs_payerID: 39026,
  },
  {
    payer_name: 'KEY HEALTH PLAN',
    cs_payerID: 39026,
  },
  {
    payer_name: 'LA CROSSE CARE PLUS',
    cs_payerID: 39026,
  },
  {
    payer_name: 'EMPLOYERS INSURANCE OF WAUSAU',
    cs_payerID: 39026,
  },
  {
    payer_name: 'BENEFIT PLANNERS, INC.',
    cs_payerID: 39026,
  },
  {
    payer_name: 'UMR-HARRINGTON HEALTH',
    cs_payerID: 39026,
  },
  {
    payer_name: 'UNITED MEDICAL RESOURCES',
    cs_payerID: 39026,
  },
  {
    payer_name: 'GREATER WISCONSIN RAPIDS PROVIDER CHOICE',
    cs_payerID: 39026,
  },
  {
    payer_name: 'GREEN BAY HEALTH PROTECTION PLAN',
    cs_payerID: 39026,
  },
  {
    payer_name: 'OSHKOSH AREA HEALTH PROTECTION PLAN',
    cs_payerID: 39026,
  },
  {
    payer_name: 'COMMUNITY PREFERRED HEALTH PLAN',
    cs_payerID: 39026,
  },
  {
    payer_name: 'UMR ORLANDO HEALTH NETWORK',
    cs_payerID: 39026,
  },
  {
    payer_name: 'TRANS HEALTH PROTECTION PLAN (THE)',
    cs_payerID: 39026,
  },
  {
    payer_name: 'WAUSAU INSURANCE COMPANIES',
    cs_payerID: 39026,
  },
  {
    payer_name: 'HARRINGTON BENEFIT SERVICES, INC.',
    cs_payerID: 39026,
  },
  {
    payer_name: 'GIC INDEMNITY PLAN',
    cs_payerID: 80314,
  },
  {
    payer_name: 'UNICARE',
    cs_payerID: 80314,
  },
  {
    payer_name: 'UPMC FOR LIFE',
    cs_payerID: 95216,
    State: 'PA',
  },
  {
    payer_name: 'UPMC HEALTH PLAN',
    cs_payerID: 95216,
    State: 'PA',
  },
  {
    payer_name: 'UPMC FOR BEST HEALTH',
    cs_payerID: 95216,
    State: 'PA',
  },
  {
    payer_name: 'UTAH MEDICAID',
    cs_payerID: 'HT000004-001',
    State: 'UT',
  },
  {
    payer_name: 'HEALTHY ADVANTAGE',
    cs_payerID: '12X09',
    State: 'UT',
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF UTAH',
    cs_payerID: '12X09',
    State: 'UT',
  },
  {
    payer_name: 'HEALTHY ADVANTAGE PLUS',
    cs_payerID: '12X09',
    State: 'UT',
  },
  {
    payer_name: 'UTAH REGENCE BLUE CROSS BLUE SHIELD',
    cs_payerID: '00910',
    State: 'UT',
  },
  {
    payer_name: 'HEALTHKEEPERS INC.',
    cs_payerID: '00423',
    State: 'VA',
  },
  {
    payer_name: 'VIRGINIA BLUE CROSS',
    cs_payerID: '00423',
    State: 'VA',
  },
  {
    payer_name: 'ANTHEM HEALTHKEEPERS PLUS',
    cs_payerID: '00423',
    State: 'VA',
  },
  {
    payer_name: 'VIRGINIA MEDICAID',
    cs_payerID: 'VMAP FHSC FA',
    State: 'VA',
  },
  {
    payer_name: 'VETERANS ADMINISTRATION FEE BASIS PROGRAMS',
    cs_payerID: 12115,
  },
  {
    payer_name: 'CHILDREN OF WOMEN VIETNAM VETERANS - VA HAC',
    cs_payerID: 84146,
  },
  {
    payer_name: 'SPINA BIFIDA - VA HAC',
    cs_payerID: 84146,
  },
  {
    payer_name: 'CHAMPVA - HAC',
    cs_payerID: 84146,
  },
  {
    payer_name: 'VIVA HEALTH CARE AND VIVA MEDICARE',
    cs_payerID: 63114,
  },
  {
    payer_name: 'VISITING NURSE SERVICE OF NEW YORK',
    cs_payerID: 77073,
  },
  {
    payer_name: 'VNSNY CHOICE TOTAL',
    cs_payerID: 77073,
  },
  {
    payer_name: 'NEW YORK PRESBYTERIAN SYSTEM SELECT',
    cs_payerID: 77073,
  },
  {
    payer_name: 'VNSNY CHOICE',
    cs_payerID: 77073,
  },
  {
    payer_name: 'NY PRESBYTERIAN SELECT HEALTH',
    cs_payerID: 77073,
  },
  {
    payer_name: 'VISITING NURSE SERVICE OF NEW YORK/CHOICE SNP',
    cs_payerID: 77073,
  },
  {
    payer_name: 'VERMONT BLUE CROSS',
    cs_payerID: 'BCBSVT',
    State: 'VT',
  },
  {
    payer_name: 'VERMONT MEDICAID INPATIENT',
    cs_payerID: 'VERMONTGMC',
    State: 'VT',
  },
  {
    payer_name: 'VERMONT MEDICAID OUTPATIENT',
    cs_payerID: 'VERMONTGMC',
    State: 'VT',
  },
  {
    payer_name: 'WASHINGTON STATE DEPARTMENT OF CORRECTIONS',
    cs_payerID: 77045,
  },
  {
    payer_name: 'APPLE HEALTH AKA WASHINGTON MEDICAID',
    cs_payerID: 77045,
    State: 'WA',
  },
  {
    payer_name: 'WASHINGTON MEDICAID',
    cs_payerID: 77045,
  },
  {
    payer_name: 'MOLINA HEALTHCARE OF WASHINGTON',
    cs_payerID: 38336,
  },
  {
    payer_name: 'LIFEWISE OF WASHINGTON',
    cs_payerID: '00430',
  },
  {
    payer_name: 'WASHINGTON AND ALASKA BLUE CROSS',
    cs_payerID: '00430',
    State: 'AK',
  },
  {
    payer_name: 'WASHINGTON AND ALASKA BLUE CROSS',
    cs_payerID: '00430',
    State: 'WA',
  },
  {
    payer_name: 'UMP PLUS',
    cs_payerID: '00932',
    State: 'WA',
  },
  {
    payer_name: 'WASHINGTON BLUE CROSS REGENCE',
    cs_payerID: '00932',
    State: 'WA',
  },
  {
    payer_name: 'KATY MEDICAL GROUP',
    cs_payerID: 14163,
  },
  {
    payer_name: 'WELLCARE NORTH CAROLINA, INC',
    cs_payerID: 14163,
  },
  {
    payer_name: 'ADVICARE',
    cs_payerID: 14163,
  },
  {
    payer_name: 'OHANA HEALTH PLAN HAWAII',
    cs_payerID: 14163,
  },
  {
    payer_name: 'WELLCARE PFFS',
    cs_payerID: 14163,
  },
  {
    payer_name: 'SELECTCARE OF TEXAS (MEMORIAL CLINICAL ASSOCIATES)',
    cs_payerID: 14163,
  },
  {
    payer_name: 'WELLCARE ADVOCATE',
    cs_payerID: 14163,
  },
  {
    payer_name: 'HARMONY HEALTH PLAN LTSS ',
    cs_payerID: 14163,
  },
  {
    payer_name: 'CMS TITLE 21',
    cs_payerID: 14163,
  },
  {
    payer_name: 'WELLCARE HEALTH PLANS',
    cs_payerID: 14163,
  },
  {
    payer_name: 'STAYWELL FLORIDA',
    cs_payerID: 14163,
  },
  {
    payer_name: 'SELECTCARE OF TX (HPN) HERITAGE PHYSICIAN NETWORK',
    cs_payerID: 14163,
  },
  {
    payer_name: 'WELLCARE OF CT, FL, GA, LA, NJ, NY, OH, TX , SC',
    cs_payerID: 14163,
  },
  {
    payer_name: 'HEALTHEASE FLORIDA',
    cs_payerID: 14163,
  },
  {
    payer_name: 'WELLCARE HEALTH PLAN',
    cs_payerID: 14163,
  },
  {
    payer_name: 'CMS TITLE 19 REFORM',
    cs_payerID: 14163,
  },
  {
    payer_name: 'SELECTCARE OF TEXAS (BEAUMONT)',
    cs_payerID: 14163,
  },
  {
    payer_name: 'STAYWELL KIDS FLORIDA',
    cs_payerID: 14163,
  },
  {
    payer_name: 'HEALTHEASE KIDS FLORIDA',
    cs_payerID: 14163,
  },
  {
    payer_name: 'CENTRAL SENIOR CARE',
    cs_payerID: 14163,
  },
  {
    payer_name: 'EASY CHOICE HEALTH PLAN OF CALIFORNIA',
    cs_payerID: 14163,
  },
  {
    payer_name: 'HARMONY HEALTH PLAN OF ILLINOIS, INDIANA, MISSOURI',
    cs_payerID: 14163,
  },
  {
    payer_name: 'WELLCARE OF KENTUCKY',
    cs_payerID: 14163,
  },
  {
    payer_name: 'FIRST CHOICE',
    cs_payerID: 14163,
  },
  {
    payer_name: 'WINDSOR HEALTH PLAN',
    cs_payerID: 14163,
  },
  {
    payer_name: 'STERLING MEDICARE ADVANTAGE - DOS &gt;04-30-14',
    cs_payerID: 14163,
  },
  {
    payer_name: 'NORTHWEST DIAGNOSTIC',
    cs_payerID: 14163,
  },
  {
    payer_name: 'GOLDEN TRIANGLE / GTPA ',
    cs_payerID: 14163,
  },
  {
    payer_name: "WELLCARE BY 'OHANA",
    cs_payerID: 14163,
  },
  {
    payer_name: 'SELECTCARE OF TEXAS (KELSEY-SEYBOLD)',
    cs_payerID: 14163,
  },
  {
    payer_name: 'SELECTCARE OF TX (HOUSTON)',
    cs_payerID: 14163,
  },
  {
    payer_name: 'TODAYS OPTIONS',
    cs_payerID: 14163,
  },
  {
    payer_name: 'WELLCARE LIBERTY (HMO SNP)',
    cs_payerID: 14163,
  },
  {
    payer_name: 'WELLCARE OF SC',
    cs_payerID: 14163,
  },
  {
    payer_name: 'TEXAS FIRST HEALTH PLAN',
    cs_payerID: 14163,
  },
  {
    payer_name: 'CLAIMS MANAGEMENT SERVICES, INC.',
    cs_payerID: '00450',
    State: 'WI',
  },
  {
    payer_name: 'COMMUNITYCONNECT HEALTH PLAN',
    cs_payerID: '00450',
  },
  {
    payer_name: 'WISCONSIN BLUE CROSS',
    cs_payerID: '00450',
    State: 'WI',
  },
  {
    payer_name: 'WISCONSIN MEDICAID',
    cs_payerID: 'WISC_TXIX',
    State: 'WI',
  },
  {
    payer_name: 'WEST VIRGINIA HIGHMARK BLUE CROSS BLUE SHIELD',
    cs_payerID: 54828,
    State: 'WV',
  },
  {
    payer_name: 'WEST VIRGINIA MEDICAID',
    cs_payerID: 'WV_MMIS_4MOLINA',
    State: 'WV',
  },
  {
    payer_name: 'WYOMING BLUE CROSS',
    cs_payerID: '00460',
    State: 'WY',
  },
  {
    payer_name: 'ZING HEALTH',
    cs_payerID: 83248,
  },
];
let acsBaseArray = [
  {
    payer_id: 'MCDIL',
    payer_name: 'BC COMMUNITY OPTIONS',
  },
  {
    payer_id: 'HMAPD',
    payer_name: 'BC ILLINOIS MEDICARE ADVANTAGE',
  },
  {
    payer_id: 'HMAPD',
    payer_name: 'BC MONTANA MEDICARE ADVANTAGE',
  },
  {
    payer_id: 'HMAPD',
    payer_name: 'BC NEW MEXICO MEDICARE ADVANTAGE',
  },
  {
    payer_id: 'HMAPD',
    payer_name: 'BC OKLAHOMA MEDICARE ADVANTAGE',
  },
  {
    payer_id: 'HMAPD',
    payer_name: 'BC TEXAS MEDICARE ADVANTAGE',
  },
  {
    payer_id: 'BCBSIL',
    payer_name: 'BCBS ILLINOIS',
  },
  {
    payer_id: 'G00751',
    payer_name: 'BCBS MONTANA',
  },
  {
    payer_id: 'BCBSNM',
    payer_name: 'BCBS NEW MEXICO',
  },
  {
    payer_id: 'BCBSOK',
    payer_name: 'BCBS OKLAHOMA',
  },
  {
    payer_id: '00390',
    payer_name: 'BCBS TENNESSEE',
  },
  {
    payer_id: 'BCBSTX',
    payer_name: 'BCBS TEXAS',
  },
  {
    payer_id: 'HCSVC',
    payer_name: 'BCBS TEXAS MEDICAID STAR CHIP',
  },
  {
    payer_id: 'HCSVC',
    payer_name: 'BCBS TEXAS MEDICAID STAR Kids',
  },
  {
    payer_id: 'BCBSTXMEDICAIDSTARKIDS',
    payer_name: 'BCBSTX MEDICAID STAR KIDS',
  },
  {
    payer_id: 'GNMMD1',
    payer_name: 'BLUE CROSS COMMUNITY CENTENNIAL',
  },
  {
    payer_id: 'MCDIL',
    payer_name: 'BLUE CROSS COMMUNITY HEALTH PLANS',
  },
  {
    payer_id: 'HMAPD',
    payer_name: 'BLUE CROSS MEDICARE ADVANTAGE',
  },
  {
    payer_id: 'BCBSF',
    payer_name: 'FLORIDA BLUE (BCBS FLORIDA)',
  },
  {
    payer_id: 'HUMANA',
    payer_name: 'HUMANA',
  },
  {
    payer_id: '93095',
    payer_name: 'LIFEWISE ASSURANCE COMPANY',
  },
  {
    payer_id: '93093',
    payer_name: 'LIFEWISE HEALTH PLAN OF OREGON',
  },
  {
    payer_id: 'FBM01',
    payer_name: 'MEDICARE FLORIDA BLUE',
  },
  {
    payer_id: 'MCCVA',
    payer_name: 'MOLINA COMPLETE CARE - MEDICAID',
  },
  {
    payer_id: '00430',
    payer_name: 'PREMERA BLUE CROSS (WA)',
  },
  {
    payer_id: '00934',
    payer_name: 'PREMERA BLUE CROSS BLUE SHIELD OF ALASKA',
  },
  {
    payer_id: '00430D',
    payer_name: 'PREMERA DENTAL',
  },
  {
    payer_id: 'SHMS1',
    payer_name: 'SHARED HEALTH MISSISSIPPI',
  },
  {
    payer_id: 'VAPCCC3',
    payer_name: 'TRIWEST HEALTHCARE ALLIANCE',
  },
  {
    payer_id: 'TRULI',
    payer_name: 'TRULI FOR HEALTH',
  },
];
//  Adding coverages Payers array into final Payers array in below loop

coveragesBaseArray.forEach((x) => {
  let duplicateIdPayer = finalArray.find((y) => y.payer_id.trim() === x.payer_id.toString().trim());
  if (duplicateIdPayer) {
    let filteredArray = finalArray.filter((y) => y.payer_id !== duplicateIdPayer.payer_id.toString().trim());
    let related_payer_namesArray = duplicateIdPayer.related_payer_names ? duplicateIdPayer.related_payer_names : [];
    if (x.payer_name !== duplicateIdPayer.payer_name) {
      related_payer_namesArray.push(duplicateIdPayer.payer_name);
    }

    let modifiedDuplicatePayer = {
      payer_id: x.payer_id.trim(),
      payer_name: x.payer_name,
      all_states: true,
      author: 'raviteja.nandyala@waterlabs.ai',
      channels: { 1: [2], 2: [] },
      extra_notes: '',
      search_patterns: x.search_patterns ? x.search_patterns:["1-2-3-4"],
      similar_payers: [],
      states: [],
      related_payer_names: related_payer_namesArray,
    };

    finalArray = filteredArray;
    finalArray.push(modifiedDuplicatePayer);
  } else if (!duplicateIdPayer) {
    let payerObj = {
      payer_id: x.payer_id.toString().trim(),
      payer_name: x.payer_name,
      all_states: true,
      author: 'raviteja.nandyala@waterlabs.ai',
      channels: { 1: [2], 2: [] },
      extra_notes: '',
      search_patterns: ['1-2-3-4'],
      similar_payers: [],
      related_payer_names: [],
      states: [],
    };
    finalArray.push(payerObj);
  }
});

//  for combining all states search-patterns into an array

let seperatedIntoKeyValuesObj = [];
stateWiseCombinations.forEach((x) => {
  let nameAndSearchCombObj = Object.entries(x).map(([k, v]) => ({
    name: k,
    combination: v.includes('\n') ? v.split('\n') : [v],
  }));
  if (nameAndSearchCombObj) {
    seperatedIntoKeyValuesObj.push(nameAndSearchCombObj);
  }
});

let sanitizedSearchCombinationsArray = [];
seperatedIntoKeyValuesObj.forEach((x) => {
  sanitizedSearchCombinationsArray = [...sanitizedSearchCombinationsArray, ...x];
});

//  comparing payer names and assigning extracted search pattern in below loop

let searchPatternsPayerArray = [];
const differentFields = [
  { label: 'Patient ID', fieldName: 'memberId', value: '1' },
  { label: 'Patient First Name', fieldName: 'patientFirstName', value: '2' },
  { label: 'Patient Last Name', fieldName: 'patientLastName', value: '3' },
  { label: 'Date of Birth', fieldName: 'patientBirthDate', value: '4' },
  { label: 'Patient State', fieldName: 'patientState', value: '5' },
  { label: 'Patient Gender', fieldName: 'patientGender', value: '6' },
  { label: 'Medicaid ID', fieldName: 'medicaidId', value: '7' },
  { label: 'Group Number', fieldName: 'groupNumber', value: '8' },
];
payerNames.forEach((name) => {
  let kk = sanitizedSearchCombinationsArray.find(
    (x) => x.name.toLowerCase().indexOf(name.Payer_Name.toLowerCase()) >= 0
  );

  let uniquie = searchPatternsPayerArray.find((y) => y.name == name.Payer_Name);
  let stringFullArray = [];
  if (kk && !uniquie) {
    kk.combination.forEach((x) => {
      let stringArray = x.split(',');

      let string = '';
      if (stringArray.length > 1) {
        stringArray.forEach((fieldName) => {
          let stringValueAssigned = differentFields.find((x) => x.label.trim() === fieldName.trim());
          if (stringValueAssigned) {
            string = string.concat(`-${stringValueAssigned.value}`);
          }
        });
        if (string.startsWith('-')) {
          string = string.slice(1);
        }
        let finalString = string.split('-');
        finalString.sort();
        let testttt = finalString.join('-');
        stringFullArray.push(testttt);
      }
    });

    searchPatternsPayerArray.push({
      comb: stringFullArray.length ? stringFullArray : ['1-2-3-4'],
      combOriginal: kk.combination,
      name: kk.name,
      excellName: name.Payer_Name,
    });
  }
});
console.log('with combinations', searchPatternsPayerArray);

// assigning search patterns into final payers array in below loop

searchPatternsPayerArray.forEach((obj) => {
  let originalRecord = finalArray.find((x) => x.payer_name === obj.excellName.trim() && x.channels[1].includes(2) ); 
  if(!originalRecord){
    originalRecord = finalArray.find((x) => x.related_payer_names.includes(obj.excellName.trim() && x.channels[1].includes(2)))
  }
  if (originalRecord) {
    finalArray = finalArray.filter((x) => x.payer_name !== obj.excellName);
    // console.log('object....', obj, originalRecord);
    finalArray = [...finalArray, { ...originalRecord, search_patterns: obj.comb }];
  }
});

console.log('payer to be created array', finalArray);
let claimAndCoverage = [];
let onlyClaim = [];
let uniqueClaimsArray = [];

// adding claims payers into final array in below array

claimStatusBaseArray.forEach((single) => {
  let kk = uniqueClaimsArray.find(
    (x) => x.payer_id.trim() == single.payer_id.trim() && x.payer_name.trim() == single.payer_name.trim()
  );
  if (!kk) {
    uniqueClaimsArray.push(single);
  }
});
console.log('unique claims', uniqueClaimsArray);

//  removing if any duplicates are there in final Array

uniqueClaimsArray.forEach((claimObj) => {
  let found = finalArray.find((x) => x.payer_id.trim() === claimObj.payer_id.trim());
  let nameIncludes =
    found &&
    (found.Payer_Name === claimObj.Payer_Name || found.related_payer_names.includes(claimObj.payer_name.trim()))
      ? true
      : false;
  if (found && nameIncludes) {
    let removeDup = finalArray.filter((x) => x.payer_id !== claimObj.payer_id.toString().trim());
    claimAndCoverage.push(claimObj);
    let modifiedDuplicatePayer = {
      ...found,
      channels: { 1: [1, 2], 2: [] },
    };
    finalArray = removeDup;
    finalArray.push(modifiedDuplicatePayer);
  } else if (found && !nameIncludes) {
    let removeDup = finalArray.filter((x) => x.payer_id !== claimObj.payer_id.toString().trim());
    claimAndCoverage.push(claimObj);
    let modifiedDuplicatePayer = {
      ...found,
      channels: { 1: [1, 2], 2: [] },
      related_payer_names: [...found.related_payer_names, claimObj.payer_name],
    };
    finalArray = removeDup;
    finalArray.push(modifiedDuplicatePayer);
  } else {
    let modifiedDuplicatePayer = {
      payer_id: claimObj.payer_id.trim(),
      payer_name: claimObj.payer_name,
      all_states: true,
      author: 'raviteja.nandyala@waterlabs.ai',
      channels: { 1: [1], 2: [] },
      extra_notes: '',
      search_patterns: [],
      similar_payers: [],
      states: [],
      related_payer_names: [],
    };
    onlyClaim.push(modifiedDuplicatePayer);
    finalArray.push(modifiedDuplicatePayer);
  }
});

console.log('cv and cs', claimAndCoverage.length, claimAndCoverage);
console.log('only claim', onlyClaim.length, onlyClaim);
console.log('finalArray with cs', finalArray);
// let bothCVandCS = [];
cvOnlyProfessionalRawArray.forEach((x) => {
  let isAvailableInChannel1 = finalArray.find((y) => y.payer_id === x.cv_payerID.toString().trim());

  if (isAvailableInChannel1) {
    let nameIncludes =
      isAvailableInChannel1 &&
      (isAvailableInChannel1.payer_name === x.payer_name ||
        isAvailableInChannel1.related_payer_names.includes(x.payer_name.trim()))
        ? true
        : false;
    const removedDuplicatePayerArray = finalArray.filter((y) => y.payer_id !== x.cv_payerID.toString().trim());
    let obj = {};
    let isSameName = false;

    if (
      isAvailableInChannel1.payer_name === x.cv_payerID ||
      (isAvailableInChannel1 &&
        isAvailableInChannel1.related_payer_names.length &&
        isAvailableInChannel1.related_payer_names.includes(x.cv_payerID))
    ) {
      isSameName = true;
    }

    if (isSameName) {
      if (x.state) {
        obj = {
          ...isAvailableInChannel1,
          states: [x.state],
          channels: { 1: [...isAvailableInChannel1.channels[1]], 2: [2] },
          related_payer_names: nameIncludes
            ? isAvailableInChannel1.related_payer_names
            : [...isAvailableInChannel1.related_payer_names, x.payer_name],
        };
      } else {
        obj = {
          ...isAvailableInChannel1,
          channels: { 1: [...isAvailableInChannel1.channels[1]], 2: [2] },
          related_payer_names: nameIncludes
            ? isAvailableInChannel1.related_payer_names
            : [...isAvailableInChannel1.related_payer_names, x.payer_name],
        };
      }
    } else {
      if (x.state) {
        obj = {
          ...isAvailableInChannel1,
          states: [x.state],
          channels: { 1: [...isAvailableInChannel1.channels[1]], 2: [2] },
          related_payer_names: nameIncludes
            ? isAvailableInChannel1.related_payer_names
            : [...isAvailableInChannel1.related_payer_names, x.payer_name],
        };
      } else {
        obj = {
          ...isAvailableInChannel1,
          channels: { 1: [...isAvailableInChannel1.channels[1]], 2: [2] },
          related_payer_names: nameIncludes
            ? isAvailableInChannel1.related_payer_names
            : [...isAvailableInChannel1.related_payer_names, x.payer_name],
        };
      }
    }
    // bothCVandCS.push(obj);
    finalArray = removedDuplicatePayerArray;
    finalArray.push(obj);
  } else {
    let obj = {};
    if (x.state) {
      obj = {
        payer_id: x.cv_payerID.toString().trim(),
        payer_name: x.payer_name,
        all_states: false,
        author: 'raviteja.nandyala@waterlabs.ai',
        extra_notes: '',
        search_patterns: ['1-2-3-4'],
        similar_payers: [],
        related_payer_names: [],

        states: [x.state],
        channels: { 1: [], 2: [2] },
      };
    } else {
      obj = {
        payer_id: x.cv_payerID.toString().trim(),
        payer_name: x.payer_name,
        all_states: true,
        author: 'raviteja.nandyala@waterlabs.ai',
        extra_notes: '',
        search_patterns: ['1-2-3-4'],
        similar_payers: [],
        related_payer_names: [],
        states: [],
        channels: { 1: [], 2: [2] },
      };
    }
    finalArray.push(obj);
  }
});
// console.log('available in both', bothCVandCS.length, bothCVandCS);
console.log('finalArray with cv channel-2', finalArray);

let onlyCVinstitutional = [];
onlyCVInstitutionalRawArray.forEach((x) => {
  let isAvailableInChannel1 = finalArray.find((y) => y.payer_id === x.cv_payerID.toString().trim());

  if (isAvailableInChannel1) {
    let nameIncludes =
      isAvailableInChannel1 && (isAvailableInChannel1.related_payer_names.includes(x.payer_name.trim()) || isAvailableInChannel1.payer_name === x.payer_name)? true : false;
    const removedDuplicatePayerArray = finalArray.filter((y) => y.payer_id !== x.cv_payerID.toString().trim());
    let obj = {};
    let isSameName = false;

    if (
      isAvailableInChannel1.payer_name === x.cv_payerID ||
      (isAvailableInChannel1 &&
        isAvailableInChannel1.related_payer_names.length &&
        isAvailableInChannel1.related_payer_names.includes(x.cv_payerID))
    ) {
      isSameName = true;
    }

    if (isSameName) {
      if (x.state) {
        obj = {
          ...isAvailableInChannel1,
          states: [x.state],
          channels: { 1: [...isAvailableInChannel1.channels[1]], 2: [2] },
          related_payer_names: nameIncludes
            ? isAvailableInChannel1.related_payer_names
            : [...isAvailableInChannel1.related_payer_names, x.payer_name],
        };
      } else {
        obj = {
          ...isAvailableInChannel1,
          channels: { 1: [...isAvailableInChannel1.channels[1]], 2: [2] },
          related_payer_names: nameIncludes
            ? isAvailableInChannel1.related_payer_names
            : [...isAvailableInChannel1.related_payer_names, x.payer_name],
        };
      }
    } else {
      if (x.state) {
        obj = {
          ...isAvailableInChannel1,
          states: [x.state],
          channels: { 1: [...isAvailableInChannel1.channels[1]], 2: [2] },
          related_payer_names: nameIncludes
            ? isAvailableInChannel1.related_payer_names
            : [...isAvailableInChannel1.related_payer_names, x.payer_name],
        };
      } else {
        obj = {
          ...isAvailableInChannel1,
          channels: { 1: [...isAvailableInChannel1.channels[1]], 2: [2] },
          related_payer_names: nameIncludes
            ? isAvailableInChannel1.related_payer_names
            : [...isAvailableInChannel1.related_payer_names, x.payer_name],
        };
      }
    }
    // bothCVandCS.push(obj);
    finalArray = removedDuplicatePayerArray;
    finalArray.push(obj);
  } else {
    let obj = {};
    if (x.state) {
      obj = {
        payer_id: x.cv_payerID.toString().trim(),
        payer_name: x.payer_name,
        all_states: false,
        author: 'raviteja.nandyala@waterlabs.ai',
        extra_notes: '',
        search_patterns: ['1-2-3-4'],
        similar_payers: [],
        related_payer_names: [],

        states: [x.state],
        channels: { 1: [], 2: [2] },
      };
    } else {
      obj = {
        payer_id: x.cv_payerID.toString().trim(),
        payer_name: x.payer_name,
        all_states: true,
        author: 'raviteja.nandyala@waterlabs.ai',
        extra_notes: '',
        search_patterns: ['1-2-3-4'],
        similar_payers: [],
        related_payer_names: [],
        states: [],
        channels: { 1: [], 2: [2] },
      };
    }
    finalArray.push(obj);
  }
});
console.log('only cv institutional', onlyCVinstitutional);
console.log('after cv institutional', finalArray);
let onlycsArray = [];

onlyCSProfessionalRawArray.forEach((x) => {
  let csPayerID = x.cs_payerID ? x.cs_payerID : '';
  let isAvailableInChannel1 = finalArray.find((y) => y.payer_id === csPayerID.toString().trim());
  if (isAvailableInChannel1) {
    let nameIncludes =
      isAvailableInChannel1 && (isAvailableInChannel1.related_payer_names.includes(x.payer_name.trim())|| isAvailableInChannel1.payer_name === x.payer_name) ? true : false;
    const removedDuplicatePayerArray = finalArray.filter((y) => y.payer_id !== csPayerID.toString().trim());
    let obj = {};
    let isSameName = false;

    if (
      isAvailableInChannel1.payer_name === x.cs_payerID ||
      (isAvailableInChannel1 &&
        isAvailableInChannel1.related_payer_names.length &&
        isAvailableInChannel1.related_payer_names.includes(x.cs_payerID))
    ) {
      isSameName = true;
    }
    let channel2Services = isAvailableInChannel1.channels[2].includes(2) ? true : false;
    if (isSameName) {
      if (x.State) {
        obj = {
          ...isAvailableInChannel1,
          states: [x.State],
          channels: {
            1: [...isAvailableInChannel1.channels[1]],
            2: channel2Services ? [1, 2] : [1],
            related_payer_names: nameIncludes
              ? isAvailableInChannel1.related_payer_names
              : [...isAvailableInChannel1.related_payer_names, x.payer_name],
          },
        };
      } else {
        obj = {
          ...isAvailableInChannel1,
          channels: {
            1: [...isAvailableInChannel1.channels[1]],
            2: channel2Services ? [1, 2] : [1],
            related_payer_names: nameIncludes
              ? isAvailableInChannel1.related_payer_names
              : [...isAvailableInChannel1.related_payer_names, x.payer_name],
          },
        };
      }
    } else {
      if (x.State) {
        obj = {
          ...isAvailableInChannel1,
          states: [x.State],
          channels: { 1: [...isAvailableInChannel1.channels[1]], 2: channel2Services ? [1, 2] : [1] },
          related_payer_names: nameIncludes
            ? isAvailableInChannel1.related_payer_names
            : [...isAvailableInChannel1.related_payer_names, x.payer_name],
        };
      } else {
        obj = {
          ...isAvailableInChannel1,
          channels: { 1: [...isAvailableInChannel1.channels[1]], 2: channel2Services ? [1, 2] : [1] },
          related_payer_names: nameIncludes
            ? isAvailableInChannel1.related_payer_names
            : [...isAvailableInChannel1.related_payer_names, x.payer_name],
        };
      }
    }
    // onlycsArray.push(obj);
    finalArray = removedDuplicatePayerArray;
    finalArray.push(obj);
  } else {
    let obj = {};
    if (x.State) {
      obj = {
        payer_id: csPayerID.toString().trim(),
        payer_name: x.payer_name,
        all_states: false,
        author: 'raviteja.nandyala@waterlabs.ai',
        extra_notes: '',
        search_patterns: [],
        similar_payers: [],
        related_payer_names: [],

        states: [x.State],
        channels: { 1: [], 2: [1] },
      };
    } else {
      obj = {
        payer_id: csPayerID.toString().trim(),
        payer_name: x.payer_name,
        all_states: true,
        author: 'raviteja.nandyala@waterlabs.ai',
        extra_notes: '',
        search_patterns: [],
        similar_payers: [],
        related_payer_names: [],
        states: [],
        channels: { 1: [], 2: [1] },
      };
    }
    // onlycsArray.push(obj);
    finalArray.push(obj);
  }
});

console.log('after cs in channel-2', finalArray);
onlycsInstitutionsRawArray.forEach((x) => {
  let csPayerID = x.cs_payerID ? x.cs_payerID : '';
  let isAvailableInChannel1 = finalArray.find((y) => y.payer_id === csPayerID.toString().trim());
  if (isAvailableInChannel1) {
    let nameIncludes =
      isAvailableInChannel1 && (isAvailableInChannel1.related_payer_names.includes(x.payer_name.trim())||isAvailableInChannel1.payer_name === x.payer_name) ? true : false;
    const removedDuplicatePayerArray = finalArray.filter((y) => y.payer_id !== csPayerID.toString().trim());
    let obj = {};
    let isSameName = false;

    if (
      isAvailableInChannel1.payer_name === x.cs_payerID ||
      (isAvailableInChannel1 &&
        isAvailableInChannel1.related_payer_names.length &&
        isAvailableInChannel1.related_payer_names.includes(x.cs_payerID))
    ) {
      isSameName = true;
    }
    let channel2Services = isAvailableInChannel1.channels[2].includes(2) ? true : false;
    if (isSameName) {
      if (x.State) {
        obj = {
          ...isAvailableInChannel1,
          states: [x.State],
          channels: {
            1: [...isAvailableInChannel1.channels[1]],
            2: channel2Services ? [1, 2] : [1],
            related_payer_names: nameIncludes
              ? isAvailableInChannel1.related_payer_names
              : [...isAvailableInChannel1.related_payer_names, x.payer_name],
          },
        };
      } else {
        obj = {
          ...isAvailableInChannel1,
          channels: {
            1: [...isAvailableInChannel1.channels[1]],
            2: channel2Services ? [1, 2] : [1],
            related_payer_names: nameIncludes
              ? isAvailableInChannel1.related_payer_names
              : [...isAvailableInChannel1.related_payer_names, x.payer_name],
          },
        };
      }
    } else {
      if (x.State) {
        obj = {
          ...isAvailableInChannel1,
          states: [x.State],
          channels: { 1: [...isAvailableInChannel1.channels[1]], 2: channel2Services ? [1, 2] : [1] },
          related_payer_names: nameIncludes
            ? isAvailableInChannel1.related_payer_names
            : [...isAvailableInChannel1.related_payer_names, x.payer_name],
        };
      } else {
        obj = {
          ...isAvailableInChannel1,
          channels: { 1: [...isAvailableInChannel1.channels[1]], 2: channel2Services ? [1, 2] : [1] },
          related_payer_names: nameIncludes
            ? isAvailableInChannel1.related_payer_names
            : [...isAvailableInChannel1.related_payer_names, x.payer_name],
        };
      }
    }
    onlycsArray.push(obj);
    finalArray = removedDuplicatePayerArray;
    finalArray.push(obj);
  } else {
    let obj = {};
    if (x.State) {
      obj = {
        payer_id: csPayerID.toString().trim(),
        payer_name: x.payer_name,
        all_states: false,
        author: 'raviteja.nandyala@waterlabs.ai',
        extra_notes: '',
        search_patterns: [],
        similar_payers: [],
        related_payer_names: [],

        states: [x.State],
        channels: { 1: [], 2: [1] },
      };
    } else {
      obj = {
        payer_id: csPayerID.toString().trim(),
        payer_name: x.payer_name,
        all_states: true,
        author: 'raviteja.nandyala@waterlabs.ai',
        extra_notes: '',
        search_patterns: [],
        similar_payers: [],
        related_payer_names: [],
        states: [],
        channels: { 1: [], 2: [1] },
      };
    }
    onlycsArray.push(obj);
    finalArray.push(obj);
  }
});
console.log('cs array', onlycsArray);
console.log('after adding final cs institutional', finalArray);

// adding acs into final array

acsBaseArray.forEach((x) => {
  let found = finalArray.find((y) => y.payer_id === x.payer_id.trim());
  if (found) {
    let removedDuplicateArray = finalArray.filter((y) => y.payer_id !== x.payer_id);
    let havingSimilarName = false;
    if (!found.payer_name === x.payer_name && !found.related_payer_names.includes(x.payer_name.trim())) {
      havingSimilarName = true;
    } else {
      havingSimilarName = false;
    }
    let channel1Services = found.channels[1];
    if (!channel1Services.includes(3)) {
      channel1Services.push(3);
    }
    let obj = {
      ...found,
      channels: { 1: channel1Services, 2: found.channels[2] },
      related_payer_names: havingSimilarName ? [...found.related_payer_names, x.payer_name] : found.related_payer_names,
    };
    finalArray = removedDuplicateArray;
    finalArray.push(obj);
  } else {
    let newObj = {
      payer_id: x.payer_id.trim(),
      payer_name: x.payer_name,
      all_states: true,
      author: 'raviteja.nandyala@waterlabs.ai',
      extra_notes: '',
      search_patterns: [],
      similar_payers: [],
      related_payer_names: [],
      states: [],
      channels: { 1: [1], 2: [] },
    };
    finalArray.push(newObj);
  }
});
console.log('added ACS into final array', finalArray);
let noSearchPatterns = finalArray.filter(x => !x.search_patterns.length)
noSearchPatterns.forEach(x=>{
  let filterOutNoPattern = finalArray.filter(y => y.payer_id !== x.payer_id)
  let obj = finalArray.find(k => k.payer_id === x.payer_id)
  if(obj && obj.channels[1].includes(2)){
    let objtoBePushed = {...obj,search_patterns:["1-2-3-4"]}
    finalArray = filterOutNoPattern
    finalArray.push(objtoBePushed)
  }
 
})
console.log("no petterns",noSearchPatterns.length,noSearchPatterns)
console.log("total final",finalArray)
let noSearchPatterns2 = finalArray.filter(x => !x.search_patterns.length && x.channels[1].includes(3))
console.log("no patterns",noSearchPatterns2.length)
