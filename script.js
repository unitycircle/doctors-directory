function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}


     const profiles = {
        'Anwar Khan': {
            name: 'Dr. Anwar Khan',
            specialization: 'General Physician',
            qualification: 'BUMS from A & U Tibbia College, Delhi University',
            location: 'Khyber Hospital, Khanyar',
            phone: '9906621130',
            fee: '₹250',
            availability: '11:00 am to 2:00 pm',
            locationLink: 'https://maps.app.goo.gl/pg1eyfgZ4afszzeY8'
        },
        'Danish Amin Khan': {
            name: 'Dr. Danish Amin Khan',
            specialization: 'General Physician',
            qualification: 'MBBS Bachelor of Medicine and Bachelor of Surgery Banglore',
            location: 'Jawahar Nagar, Srinagar',
            phone: '8050158206',
            fee: '₹500',
            availability: 'Open 24 hours',
            locationLink: 'https://maps.app.goo.gl/fVoeRnfm7KtAY8Vs5'
        },
        'Umer Sheikh': {
            name: 'Dr. Umer Sheikh',
            specialization: 'General physician',
            qualification: 'MBBS from Al Ameen Medical College, Bijapur, Karnataka in 2019',
            location: 'A to Z Medicate, Nehru Park, Srinagar',
            phone: '4238900939',
            fee: '₹300',
            availability: '9:00 am to 12:00 pm Except Sunday',
            locationLink: 'https://maps.app.goo.gl/9ziex8eYL3CQYgP26'
        },

        'Mudasir Shafi': {
            name: 'Dr. Mudasir Shafi',
            specialization: 'General Physician',
            qualification: 'M. D, Fellowship in Pulmonology, Allergy and Asthma Specialist, Tuberculosis specialist.',
            location: 'Healthy You Clinic, Lal Bazar, Srinagar',
            phone: '9858714786',
            fee: '₹300',
            availability: '6:00 pm Everyday',
            locationLink: 'https://maps.app.goo.gl/ZQEazLnCnMxUFHvV7'
        },
        'Ayesha Aijaz': {
            name: 'Dr. Ayesha Aijaz',
            specialization: 'General Physician',
            qualification: 'MBBS, ICMR researcher',
            location: 'Dr. Ayesha Aijaz Clinic, Rambagh, Srinagar',
            phone: '0397171367',
            fee: '₹300',
            availability: '11:00 am to 9:00 pm Except Sunday',
            locationLink: 'https://maps.app.goo.gl/TCnaPGvQ55fKpH5FA'
        },

        'Mohd Areeb': {
            name: 'Dr. Mohd Areeb',
            specialization: 'General Physician',
            qualification: 'MBBS',
            location: 'Sheikh and Sons Pharmacy, Anchar, Srinagar',
            phone: '1141193981',
            fee: '₹200',
            availability: '9:00 am to 11:00 am Except Sunday',
            locationLink: 'https://maps.app.goo.gl/K6633w8WQjSng5JA8'
        },

        'Faizan Shakeel': {
            name: 'Dr. Faizan Shakeel ',
            specialization: 'General Physician',
            qualification: 'MBBS from Rajiv Gandhi University of Health Sciences, ',
            location: 'A to Z Medicate, Nehru Park, Srinagar',
            phone: '1142213879',
            fee: '₹300',
            availability: 'Available Until 9:00 am',
            locationLink: 'https://maps.app.goo.gl/9ziex8eYL3CQYgP26'
        },
        'Ghulam Hassan': {
            name: 'Dr. Ghulam Hassan ',
            specialization: 'General Physician',
            qualification: 'MBBS, MD - General Medicine',
            location: 'KIASS, Karan Nagar, Srinagar ',
            phone: '8045686671',
            fee: 'Free',
            availability: '10:00 am to 6:00 pm Except Tuesday and Thursday',
            locationLink: 'https://maps.app.goo.gl/AkQzx3jebmnxQEsd9'
        },
        'Shahnawaz Ah': {
            name: 'Dr. Shahnawaz Ah',
            specialization: 'General Physician',
            qualification: 'MD - General Medicine from Sher-I-Kashmir Instituteof Mediacal Sciences and MBBS from Banglore University in 1994',
            location: 'A M Pharmacy, Near Govt, Girls School, Khanyar',
            phone: '7039970399',
            fee: '₹400',
            availability: '4:00 pm to 8:00 pm (Mon)',
            locationLink: 'https://maps.app.goo.gl/q9SKvCHRAcEDeAs7A'
        },
        'Lateef Charoo': {
            name: 'Dr. Lateef Charoo',
            specialization: 'General Physician',
            qualification: 'MBBS, MD, MRCP from institutions of international repute',
            location: 'Modern Nursing Home, Rajbagh',
            phone: '7039970399',
            fee: '₹300',
            availability: '4:30 pm to 7:00 pm (Mon)',
            locationLink: 'https://maps.app.goo.gl/q5WNy7jgbAgqkRqLA'
        },

        'Abdul Rashid Itoo': {
            name: 'Dr. Abdul Rashid Itoo',
            specialization: 'General Physician',
            qualification: 'MBBS,MD',
            location: 'Noorani Medical Centre',
            phone: '1140845976',
            fee: '₹300',
            availability: 'Mon-sat (07:00Am - 09:00Am & 07:00pm -09:00pm ) Sun ( 07:00Am -09:00Am & 04:00pm -07:00pm',
            locationLink: 'https://maps.app.goo.gl/KAzv598bkeVYFVQBA'
        },

        'Rizwan Aslam': {
            name: 'Dr. Rizwan Aslam',
            specialization: 'General Physician',
            qualification: 'MBBS',
            location: 'A to Z Medicate, Nehru Park, Srinagar',
            phone: '1141168518',
            fee: '₹300',
            availability: 'Mon-sun 9:00 am to 11:45pm',
            locationLink: 'https://maps.app.goo.gl/9ziex8eYL3CQYgP26'
        },


        'Aijaz Ahmad Mir ': {
            name: 'Dr. Aijaz Ahmad Mir ',
            specialization: 'General Physician',
            qualification: 'MBBS, MD',
            location: 'Alchemist Panthachowk Srinagar ',
            phone: '1724500000',
            fee: '₹500',
            availability: '7:00am to 02:00pm (Mon-sat)',
            locationLink: 'https://maps.app.goo.gl/KnMJjofy3kTnQAiu8'
        },

        'Riyaz Ah Bhat ': {
            name: 'Dr. Riyaz Ah Bhat ',
            specialization: 'General Physician',
            qualification: 'MBBS, MD(Medicine)',
            location: ' Raina Medicare, Jawahar Nagar',
            phone: '7039970399',
            fee: '₹300',
            availability: '4:30 pm to 8:00 pm (Mon)',
            locationLink: 'https://maps.app.goo.gl/JHQ22xjnS6fE1Rj27'
        },
        'Mohd Ismail ': {
            name: 'Dr. Mohd Ismail ',
            specialization: 'General Physician',
            qualification: 'MBBS, MD',
            location: ' Ramzana Hospital',
            phone: '7039970399',
            fee: '₹300',
            availability: 'Mon-Sat 08:00am -09:45am',
            locationLink: 'https://maps.app.goo.gl/LfNvYFYD6mYKwhTg9'
        },

        'Haseeb Mahajan': {
            name: 'Dr. Haseeb Mahajan',
            specialization: 'General Physician',
            qualification: 'MBBS',
            location: ' Bachpora, Srinagar',
            phone: '1141193981',
            fee: '₹300',
            availability: '12:00 am - 02:00 AM',
            locationLink: 'https://maps.app.goo.gl/w1gZyLtcXaeYTfi69'
        },
        'Gulnar': {
            name: 'Dr. Gulnar',
            specialization: 'General Physician',
            qualification: 'MBBS',
            location: ' Safa Marwah Hospital, 90 Feet Road, Upper Soura',
            phone: '1140036737',
            fee: '₹150',
            availability: 'Mon -sat 11:00 am to 4:00 pm Sun (9:00am to 05:00pm)',
            locationLink: 'https://maps.app.goo.gl/4gRoteYEymCdEh429'
        },

        'Yasfir Bashir': {
            name: 'Dr. Yasfir Bashir',
            specialization: 'General Physician',
            qualification: 'MBBS',
            location: ' GT Road,Gole Market, Srinagar',
            phone: '1141168282',
            fee: '₹400',
            availability: '08:00 AM - 05:00 PM',
            locationLink: 'https://maps.app.goo.gl/byVpubu1oug7Tqx78'
        },

        'Saleem Yousuf': {
            name: 'Dr. Saleem Yousuf',
            specialization: 'Psychiatrist',
            qualification: 'MBBS',
            location: ' Near, Alamdar road, chadoora ',
            phone: '1141193906',
            fee: '₹300',
            availability: '09:00 AM - 11:00 PM',
            locationLink: 'https://maps.app.goo.gl/3HqxDD9M7KYzKJPd8'
        },


        'Shabir Ahmad Dar': {
            name: 'Dr.  Shabir Ahmad Dar',
            specialization: 'Psychiatrist',
            qualification: 'MBBS, M.D. (Psychiatry)',
            location: 'Sharif Medical Hall Alamgari Bazar ',
            phone: '1140844823',
            fee: '₹600',
            availability: 'Opens at 5:00pm (wed)',
            locationLink: 'https://maps.app.goo.gl/souYCh5ZdrRu1jyj9'
        },

        'Muhammad Amin Pampori': {
            name: 'Dr.  Muhammad Amin Pampori',
            specialization: 'ENT Specialist',
            qualification: 'MBBS, MS, FNB (MINIMAL ACCESS SURGERY)',
            location: 'Habba Kadal, Srinagar ',
            phone: '194245553',
            fee: '₹300',
            availability: 'Open 24 Hours',
            locationLink: 'https://maps.app.goo.gl/pDzJhobVx6S8TrTDA'
        },

        'Sheikh Hilal Ahmad': {
            name: 'Dr.  Sheikh Hilal Ahmad',
            specialization: 'Neurologist',
            qualification: 'MBBS ( GMC , Srinagar) 2002. MD Medicine ( SKIMS) 2007. DNB Neurology ( Sir Ganga Ram Hospital) 2014',
            location: 'Khayam Chowk Nowpora, Srinagar',
            phone: '1942455130',
            fee: '₹700',
            availability: '4:30 pm Onwards',
            locationLink: 'https://maps.app.goo.gl/6sJZkXdyhss1zx9a8'
        },


        'Irfan Yousuf Wani': {
            name: 'Dr.  Irfan Yousuf Wani',
            specialization: 'Neurologist',
            qualification: 'MBBS, MS, FNB, FMAS, FIAGES',
            location: 'Karan Nagar, Srinagar Shifa Medical Center ',
            phone: '1140036732',
            fee: '₹300',
            availability: '10:00 am to 5:00 pm (mon to Thur)',
            locationLink: 'https://maps.app.goo.gl/tc6X6HmZJd55LuUf7'
        },

        'Imran Abdullah Khan': {
            name: 'Dr.  Imran Abdullah Khan',
            specialization: 'Surgeon',
            qualification: 'DNB Medical Gastroenterology (BLK MAX, Karol Bagh, New Delhi)-2022',
            location: 'Paras Hospital Dalgate, Srinagar ',
            phone: '9650319811',
            fee: '₹300',
            availability: 'Opens 24 Hours',
            locationLink: 'https://maps.app.goo.gl/8ZGtEmZacwzC4UUr7'
        },


        'Wajeed Yousuf': {
            name: 'Dr.  Wajeed Yousuf',
            specialization: 'Gastroenterologist',
            qualification: 'MBBS, DM - Neurology, MD - General Medicine',
            location: 'Paras hospital, Srinagar ',
            phone: '8803284541',
            fee: '₹600',
            availability: 'Mon -sat 10:00am to 05:00pm',
            locationLink: 'https://maps.app.goo.gl/8ZGtEmZacwzC4UUr7'
        },


        'Aijaz Ah Malik ': {
            name: 'Dr.  Aijaz Ah Malik ',
            specialization: 'General Surgeon',
            qualification: 'MS - General Surgery, FNB - Minimal Access Surgery',
            location: ' Shifa Medical centre & Modern hospital Magarmal Bagh road, Srinagar ',
            phone: '9906144949',
            fee: '₹400',
            availability: 'Mon-Thu, sat 11:00am -03:00pm',
            locationLink: 'https://maps.app.goo.gl/5ycfdody8GqcuBHP9'
        },


        'Arshid Rashid ': {
            name: 'Dr. Arshid Rashid ',
            specialization: 'General Practitioner',
            qualification: 'MS - ENT, MBBS',
            location: ' New City Hospital, Tengpora, Srinagar',
            phone: '7838194782',
            fee: '₹300',
            availability: 'Mon -Sat 04:30 pm -09:00pm',
            locationLink: 'https://maps.app.goo.gl/XQNGDr3BsBUhKP2S7'
        },



        'Aijaz Majeed Wani': {
            name: 'Dr. Aijaz Majeed Wani ',
            specialization: 'Orthopedic',
            qualification: 'MBBS MD - Endocrinology, DM - Endocrinology, FACE, FRCPE',
            location: ' Orthopedic speciality clinic Karan Nagar, Srinagar',
            phone: '1142213848289',
            fee: '₹250',
            availability: 'Mon -sat 07:00am to 09:00am',
            locationLink: 'https://maps.app.goo.gl/SUZrwxdQgPcZ3EUw5'
        },



        'Muhammad Hayat': {
            name: 'Dr. Muhammad Hayat ',
            specialization: 'Diabetologist & Endocrinologist',
            qualification: 'MD - Endocrinology , - , 2006 and DM - Endocrinology ',
            location: ' Diabetes care clinic Karan Nagar, Srinagar',
            phone: '9419009166',
            fee: '₹500',
            availability: 'Mon -sat 07:00am to 09:00am',
            locationLink: 'https://maps.app.goo.gl/vtPziDRyEAcMhdYY9'
        },


        'Tariq Mir': {
            name: 'Dr.Tariq Mir',
            specialization: 'Urologist',
            qualification: 'MS - General Surgery from Sikkim University in 2017 and MBBS from U.Kashmir in 2013',
            location: ' Tahira Khanam, Srinagar',
            phone: '9906804797',
            fee: '₹300',
            availability: '8:00 am to 9:30 am (Mon to Fri)',
            locationLink: 'https://maps.app.goo.gl/CzxUsusiZ2BnoraS7'
        },


        'Mohiddin': {
            name: 'Dr. Mohiddin ',
            specialization: 'Dermatologist',
            qualification: ' MBBS, MS Orthopaedics, Fellow Arthroscopy & Joint',
            location: ' Rainawari Chowk, Srinagar',
            phone: '7889407093',
            fee: 'Free',
            availability: '7:00 am to 9:30 am (Mon to Fri)',
            locationLink: 'https://maps.app.goo.gl/HwHMZvXmHZuDFx178'
        },




        'Sana Mushtaq': {
            name: 'Dr. Sana Mushtaq ',
            specialization: 'Pediatrician',
            qualification: ' PhD, MS in Pharmacy',
            location: ' G.B Pant Hospital, Barzulla',
            phone: '9906621131',
            fee: '₹300',
            availability: '9:00 am to 1:00 pm',
            locationLink: 'https://maps.app.goo.gl/MvKE9mX5DvcMRtu4A'
        },


        'Sulaiman Sath shawal': {
            name: 'Dr. Sulaiman Sath shawal',
            specialization: 'Orthopedic',
            qualification: ' MBBS MS (GMC, Srinagar ) DNB Orthopaedics, FNB Spine ',
            location: 'Medicare kaksari-Doog Ganga Road Maidanpora Karan Nagar Srinagar',
            phone: '6006612083',
            fee: '₹400',
            availability: 'Mon-Sun 04:00pm -08:00pm ',
            locationLink: 'https://maps.app.goo.gl/jKmGNeXvSxXiusUJA'
        },


        'Adil Majeed Mir': {
            name: 'Dr. Adil Majeed Mir',
            specialization: 'Opthalmologist',
            qualification: ' MD Ophthalmology ',
            location: ' kashmir Eye Hospital,Pohroo chowk , Nowgam Bypass ',
            phone: '1161264691',
            fee: '₹300',
            availability: '09 :00am to 04:00pm',
            locationLink: 'https://maps.app.goo.gl/6FwKUrx2VtLeeAGC7'
        },




        'Aijaz Hamid Wani': {
            name: 'Dr. Aijaz Hamid Wani',
            specialization: 'Orthopedic',
            qualification: ' MBBS, FCPS',
            location: ' Cosmos bone and joint healthcare Rajbagh, Srinagar',
            phone: '8082224123',
            fee: '₹300',
            availability: 'Mon-sat 11:00 am - 01:00pm ',
            locationLink: 'https://maps.app.goo.gl/kk279qwKWdULPcWo6'
        },



        'Haris Manzoor Qadri': {
            name: 'Dr. Haris Manzoor Qadri',
            specialization: 'Throat infections, sleep disorders, voice disorders, dizziness',
            qualification: ' MBBS, MS (ENT)',
            location: ' Karan Nagar, Gole Market Road, Srinagar',
            phone: '7350678111',
            fee: '₹300',
            availability: '06:00 PM - 08:30 PM ',
            locationLink: 'https://maps.app.goo.gl/tbTLdY16LHdWh6yCA'
        },


        'Ashaq Hussain Parrey': {
            name: 'Dr.  Ashaq Hussain Parrey',
            specialization: 'Rheumatologist',
            qualification: ' MBBS ,MD- General Medicine Internal medicine ',
            location: ' Angel pharmacy Iqbal Park, Srinagar',
            phone: '1141168498051',
            fee: '₹300',
            availability: ' Mon-sat 08:30 am to 10:00am  ',
            locationLink: 'https://maps.app.goo.gl/oe1kuV7aJNeozCEM8'
        },



        'Sheikh Shoib': {
            name: 'Dr.   Sheikh Shoib',
            specialization: 'Psychiatrist',
            qualification: ' MBBS from kashmir in 2017 ',
            location: 'Karan Nagar Second floor, Shaheen Plaza, Shaheed Gunj, Srinagar ',
            phone: '9055144837',
            fee: '₹400',
            availability: ' 4:00 pm to 8:00 pm (Mon to Thur)  ',
            locationLink: 'https://maps.app.goo.gl/6Uw5PJfD9riG8exz5'
        },


        'Mir Shahnawaz': {
            name: 'Dr.   Mir Shahnawaz',
            specialization: 'Dermatologist',
            qualification: ' FRCS - Plastic Surgery, MCh Plastic Surgery, MS, D.L.O, MBBS',
            location: 'Sanat Nagar,Srinagar ',
            phone: '8082228888',
            fee: '₹250',
            availability: ' 9:00 am to 5:00 pm (Mon to Sun)  ',
            locationLink: 'https://maps.app.goo.gl/4RKpK3dNug8kjVak9'
        },



        'Farooq Bhat': {
            name: 'Dr. Farooq Bhat',
            specialization: 'Plastic Surgeon',
            qualification: ' MBBS, MS ( Plastic surgery)',
            location: 'Safa Marwah Hospital, 90 Feet Road, Soura, Srinagar ',
            phone: '7006589825',
            fee: '₹300',
            availability: ' 9:30 am to 5:00 pm (Mon to Sun)  ',
            locationLink: 'https://maps.app.goo.gl/qe9C1Kx62Cy4jk9x9'
        },



        'Suhail Khan': {
            name: 'Dr. Suhail Khan',
            specialization: 'Urologist',
            qualification: ' MS, MBBS (urologist)',
            location: 'cure All super speciality clinics Dalgate Bridge, Durgjan,  ',
            phone: '9419441407',
            fee: '₹400',
            availability: ' 4:00 pm to 7:00 pm (Mon to Fri)  ',
            locationLink: 'https://maps.app.goo.gl/2cvs5JUTGc12y5tZ9'
        },




        'Muhammad Haseeb Gani': {
            name: 'Dr. Muhammad Haseeb Gani',
            specialization: 'Orthipedic',
            qualification: ' MRCS (The Royal College of Surgeons of Edinburg)-2018',
            location: 'Paras Hospital, Sgr  ',
            phone: '6006684736',
            fee: '₹500',
            availability: ' 9:00 am to 5:30 pm (Mon to Fri)  ',
            locationLink: 'https://maps.app.goo.gl/nHFPXcoCjT6NwG8VA'
        },



        'SM Farooq': {
            name: 'Dr. SM Farooq',
            specialization: 'Advanced Vision Care',
            qualification: ' MS from GMC Srinagar and MBBS from JVC Medical College in 1998',
            location: 'Opposite Ramzan Memorial School, Anchar, Soura, Sgr  ',
            phone: '9858404664',
            fee: '₹300',
            availability: ' Available until 8:00pm  ',
            locationLink: 'https://maps.app.goo.gl/gNop491mW89QD6tR8'
        },



        'Junaid Nabi': {
            name: 'Dr. Junaid Nabi',
            specialization: 'Psychiatrist',
            qualification: 'MD, MBBS (Psychiarist)',
            location: 'Shifa Medical Centre, karan nagar Srinagar  ',
            phone: '1142213998',
            fee: '₹400',
            availability: ' 4:30 pm to 7:30 pm (Mon to Fri) ',
            locationLink: 'https://maps.app.goo.gl/FhWbV1HfsdVv1CSXA'
        },


        'Peerzada Owais  ': {
            name: 'Dr. Peerzada Owais ',
            specialization: 'Diabetologist',
            qualification: 'MBBS, Phd - Endocrinology and Biomedical Science',
            location: 'Shifa Medicare Lal Bazar, Srinagar ',
            phone: '6005776600',
            fee: '₹650',
            availability: ' 9:00 am to 1:00 pm Except Sunday ',
            locationLink: 'https://maps.app.goo.gl/wLPy95VPtfMyyeQ37'
        },



        'Yasir Rather ': {

            name: 'Dr. Yasir Rather ',
            specialization: 'Psychiatrist',
            qualification: 'MBBS Medical degree with an MD in Mental Health',
            location: 'Khyber Medical Institute, Sgr',
            phone: '7006690548',
            fee: '₹1000',
            availability: ' 4:30 pm to 7:30 pm (Sat to Thur)',
            locationLink: 'https://maps.app.goo.gl/CKUY8gDroZaof1YC7'
        },



        'Asif Khan': {

            name: 'Dr. Asif Khan ',
            specialization: 'Pediatrician',
            qualification: 'MD - Paediatrics , Sher-I-Kashmir Instt. Of Medical Sciences, Srinagar , 2017',
            location: 'G.B Pant Hospital, Barzulla',
            phone: '9906621125',
            fee: '₹350',
            availability: ' 11:00 am to 3:00 pm',
            locationLink: 'https://maps.app.goo.gl/MvKE9mX5DvcMRtu4A'
        },

        'Imran Majid': {

            name: 'Dr. Imran Majid',
            specialization: 'Dermatologist',
            qualification: 'MBBS (Dermatology)',
            location: 'Cutis Institute of Dermatology, Hyderpora Bypass Srinagar ',
            phone: '9622594238',
            fee: '₹400',
            availability: '09:00 am to 04:00 pm',
            locationLink: 'https://maps.app.goo.gl/mNeQ6MUELVYr1ajH7'
        },

        'Imtiyaz Mir': {

            name: 'Dr. Imtiyaz Mir',
            specialization: 'Dermatologist',
            qualification: 'MBBS, BSC, FRCP',
            location: 'Skin Institute, Bemina',
            phone: '9906621127',
            fee: '₹350',
            availability: '1:00 pm to 4:00 pm',
            locationLink: 'https://maps.app.goo.gl/t419Enz2xanfc9k57'
        },

        'Zainab Qureshi': {

            name: 'Dr. Zainab Qureshi',
            specialization: 'Gynecologist',
            qualification: 'MD, MBBS (Gynecologist)',
            location: 'Lal Ded Hospital, Karan Nagar',
            phone: '9906621128',
            fee: '₹400',
            availability: '10:00 am to 1:00 pm',
            locationLink: 'https://maps.app.goo.gl/2wEnTFfPRHck9xN66'
        },




        'Shah Naveed ': {

            name: 'Dr. Shah Naveed',
            specialization: 'Cancer Specialist',
            qualification: 'MBBS, MD, FCCP',
            location: 'Paras Hospital Dalgate Srinagar',
            phone: '9103944295',
            fee: '₹705',
            availability: '10:00 am to 5:00 pm Except Sunday',
            locationLink: 'https://maps.app.goo.gl/8ZGtEmZacwzC4UUr7'
        },




        'Masroor Shah ': {

            name: 'Dr. Masroor Shah',
            specialization: 'Dentist',
            qualification: 'BDS',
            location: 'Khyber Medical Institute Srinagar',
            phone: '1140845776',
            fee: '₹200',
            availability: 'Mon - Sat 04:00 PM - 08:00 PM',
            locationLink: 'https://maps.app.goo.gl/uZb6dcgQYf36jGW6A'
        },


        'Mohd Yasin Mujoo': {

            name: 'Dr. Mohd Yasin Mujoo',
            specialization: 'Gastroenterologist',
            qualification: 'MBBS',
            location: 'Florence Hospital',
            phone: '1161263110',
            fee: '₹300',
            availability: 'Mon - Sat 04:30 PM - 07:30 PM Sun  09:00 AM - 01:00 PM',
            locationLink: 'https://maps.app.goo.gl/dMFzedbrNpWwgFQS8'
        },


        'Altaf wani': {

            name: 'Dr. Altaf wani',
            specialization: 'Orthopedic',
            qualification: 'MBBS, GMC Srinagar 1985, MS GMC Srinagar',
            location: 'Gut Care Clinic, Khanyar',
            phone: '9086000024',
            fee: '₹300',
            availability: '10:00 am to 1:00 pm',
            locationLink: 'https://maps.app.goo.gl/ARBYZ5yye8Z6wqhq7'
        },




        'Nusrat Jahan': {

            name: 'Dr.Nusrat Jahan',
            specialization: 'Pediatrician',
            qualification: 'MBBS: BSC (Health) MD (Pediatrics)',
            location: 'Bone and joint hospital, Barzulla ',
            phone: '9086000025',
            fee: '₹400',
            availability: '10:00 am to 1:00 pm',
            locationLink: 'https://maps.app.goo.gl/oPTWui8Ys7EHwdoA9'
        },


        'Tabassum Shah': {

            name: 'Dr. Tabassum Shah',
            specialization: 'Dermatologist',
            qualification: 'BSc-MSc. Zoology from Central University of Kashmir Qualified GATE 2024',
            location: 'Children Hospital, Sonwar',
            phone: '9086000026',
            fee: '₹350',
            availability: '3:00 pm to 6:00 pm',
            locationLink: 'https://maps.app.goo.gl/MvKE9mX5DvcMRtu4A'
        },

        'Syed Arif Kashani': {

            name: 'Dr. Syed Arif Kashani',
            specialization: 'Cardiologist',
            qualification: 'MBBS, PG Dip Medicine, Dip Cardiology',
            location: 'Safa Marwah Hospital, Soura',
            phone: '7039970399',
            fee: '₹200',
            availability: 'Mon-sat 10:00am -04:00pm',
            locationLink: 'https://maps.app.goo.gl/qe9C1Kx62Cy4jk9x9'
        },



        'Tariq Rashid': {

            name: 'Dr. Tariq Rashid',
            specialization: 'Cardiologist',
            qualification: 'MD DM(SKIMS) GOLD MEDALIST',
            location: 'Shifa Medical Center, Magarmal Bagh Rd, Shergarhi, Srinagar',
            phone: '7051022389',
            fee: '₹300',
            availability: 'Sun (10:00 am to 3:00 pm)',
            locationLink: 'https://maps.app.goo.gl/tc6X6HmZJd55LuUf7'
        },



        'Manzoor Ah Halwai': {

            name: 'Dr. Manzoor Ah Halwai',
            specialization: 'Orthopedic',
            qualification: 'MBBS Govt. Medical College, University of kashmir 1981',
            location: 'Manzoor Halwai Bone care clinic Iqbal park Srinagar ',
            phone: '7039970399',
            fee: '₹400',
            availability: 'Mon-sun 8:30am to 12:30 pm',
            locationLink: 'https://maps.app.goo.gl/ctagGSj19xBWGWyE6'
        },



        'Furkan': {

            name: 'Dr. Furkan',
            specialization: 'Obstetrician',
            qualification: 'MBBS , DGO',
            location: 'Bagh Mehtab, Apex BK Pora Srinagar',
            phone: '1143078632',
            fee: '₹500',
            availability: 'Mon -sun 07:00am to 09:00am ',
            locationLink: 'https://maps.app.goo.gl/pg1eyfgZ4afszzeY9'
        },




        'Tariq Quresh': {

            name: 'Dr.Tariq Quresh',
            specialization: 'Cardiologist',
            qualification: 'MBBS, GMC Srinagar, MS Ophthalmology',
            location: 'A M Pharmacy, Near Govt, Girls School, Khanyar',
            phone: '9419007122',
            fee: '₹450',
            availability: '10:00 am to 4:00 pm  ',
            locationLink: 'https://maps.app.goo.gl/q9SKvCHRAcEDeAs7A'
        },


        'Khalid Masood': {

            name: 'Dr.Khalid Masood',
            specialization: 'Pulmonalogist',
            qualification: 'DNB in Nephrology',
            location: 'Safa Marwah Hospital, Soura',
            phone: '9086000001',
            fee: '₹450',
            availability: '10:00 am to 1:00 pm ',
            locationLink: 'https://maps.app.goo.gl/qe9C1Kx62Cy4jk9x9'
        },



        'Rashid Ah': {

            name: 'Dr.Rashid Ah',
            specialization: 'Nephrologist',
            qualification: 'MD - Internal Medicine , SKIMS , 2010   DM Nephrology , Apollo hospital new delhi , 2014',
            location: 'Chest Disease Hospital, Dalgate',
            phone: '9086000021',
            fee: '₹450',
            availability: '11:00 am to 2:00 pm',
            locationLink: 'https://maps.app.goo.gl/MG5iWPDY6ijeLoSj6'
        },


        'Khurshid Ahmad Banday': {

            name: 'Dr.Khurshid Ahmad Banday',
            specialization: 'Kidney transplantation, kidney failure, dialysis, nephrotic ',
            qualification: 'MBBS, MD, DM (Nephrology)',
            location: 'Opposite Amar Singh Club, Banumsar, Sonwar Bagh, Srinagar',
            phone: '1942501708',
            fee: '₹500',
            availability: '10:00 AM - 05:00 PM',
            locationLink: 'https://maps.app.goo.gl/zUsMEksPWgrzUyKT7'
        },

        'Maria Farooq': {

            name: 'Dr.Maria Farooq',
            specialization: 'Gynecologist',
            qualification: 'MBBS, MD - Obstetrics & Gynaecology',
            location: 'Bachpora, Srinagar',
            phone: '1141168499',
            fee: '₹300',
            availability: '04:00 PM- 08:00 PM ',
            locationLink: 'https://maps.app.goo.gl/w1gZyLtcXaeYTfi69'
        },


        'Raashid Maqbool Wani': {

            name: 'Dr.Raashid Maqbool Wani',
            specialization: 'ophthalmologist',
            qualification: 'Ophthalmology, MBBS',
            location: 'Kashmir1 Eye Hospitals, Pohroo Chowk, Nowgam Bypass, Behind Petrol Pump',
            phone: '9541911153',
            fee: '₹300',
            availability: '09:00 AM-06:00 PM',
            locationLink: 'https://maps.app.goo.gl/6FwKUrx2VtLeeAGC7'
        },


        'MS Khuroo': {

            name: 'Dr.MS Khuroo',
            specialization: 'Gastroenterologist',
            qualification: 'MBBS, MD, DM, FRCP, FACP, MACP Gastro Surgeon',
            location: 'Medical Clinic, Srinagar',
            phone: '1942492398',
            fee: 'Free',
            availability: '8:30 am(Monday)',
            locationLink: 'https://maps.app.goo.gl/sjqmb9BqZwPGrd7K6'
        },


        'Sheikh Irfan Bashir': {

            name: 'Dr.Sheikh Irfan Bashir',
            specialization: 'Orthopaedician',
            qualification: 'DNB - Orthopedic Surgery from Jammu University in 2012 and Diplomate from Apollo Hospitals, New Delhi in 2013',
            location: 'Shafat Medicate Umer Abad, Srinagar',
            phone: '6005713052',
            fee: '₹400',
            availability: 'Mon Thu Sat Sun 05:30 pm to 07:00pm',
            locationLink: 'https://maps.app.goo.gl/7dQc6fXuRaX7M9jL9'
        },



        'Haris Bashir': {

            name: 'Dr.Haris Bashir',
            specialization: 'ENT Specialist',
            qualification: 'MBBS MS ENT',
            location: 'Chadoora,Srinagar',
            phone: '4048215522',
            fee: '₹200',
            availability: '2:00 pm to 4:30 pm',
            locationLink: 'https://maps.app.goo.gl/A27twZQXck2rhZdt6'
        },



        'Samoon Jeelani': {

            name: 'Dr.Samoon Jeelani',
            specialization: 'Haematologist',
            qualification: 'MBBS/MD',
            location: 'Chanapora, florence hospital, Srinagar',
            phone: '8715042734',
            fee: '₹400',
            availability: 'Monday-Wednesday',
            locationLink: 'https://maps.app.goo.gl/dMFzedbrNpWwgFQS8'
        },


        'Nisar Hamdani': {

            name: 'Dr.Nisar Hamdani',
            specialization: 'Surgical Oncologist',
            qualification: 'MBBS MS , DNB (MCH) GI Surgery ',
            location: 'Medicare Hospital',
            phone: '9086888945',
            fee: '₹450',
            availability: '4:30 pm to 6:30 pm (Mon to Thur)',
            locationLink: 'https://maps.app.goo.gl/MoVG4AnqkCvjm4J56'
        },


        'Azhar Jan Battoo': {

            name: 'Dr. Azhar Jan Battoo',
            specialization: 'Director,Surgical-Head and Neck Oncology',
            qualification: 'MCH Head&Neck Surgical Oncology ',
            location: 'Paras hospital srinagar',
            phone: '8035358717',
            fee: '₹900',
            availability: 'Mon-sat 09:00 am -05:50pm)',
            locationLink: 'https://maps.app.goo.gl/uZb6dcgQYf36jGW6A'
        },

        'Lubna Khurshid': {

            name: 'Dr. Lubna Khurshid',
            specialization: 'Rheumatologist and clinical Immunology',
            qualification: 'DNB Internal Medicine (Dellhi) Fellowship Rheumatology(Delhi) ',
            location: 'Paras hospital srinagar',
            phone: '8035358717',
            fee: '₹700',
            availability: 'Mon-sat 09:00 am -05:50pm)',
            locationLink: 'https://maps.app.goo.gl/uZb6dcgQYf36jGW6A'
        },



        'Danish Andrabi ': {

            name: 'Dr. Danish Andrabi',
            specialization: 'Consultant ENT',
            qualification: 'MBBS Govt. Grant Medical College Mumbai MS(ENT)  ',
            location: 'Paras hospital srinagar',
            phone: '8035358717',
            fee: '₹504',
            availability: 'Mon-sat 09:00 am -05:50pm)',
            locationLink: 'https://maps.app.goo.gl/uZb6dcgQYf36jGW6A'
        },


        'Mir Basharat Ahmad Kanth': {

            name: 'Dr. Mir Basharat Ahmad Kanth',
            specialization: 'Neurologist',
            qualification: 'MBBS (GMC , Srinagar)-2003, MS General Surgery (SKIMS, Srinagar)-2008,Mch , Neurosurgery(SKIMS,Srinagar)-2023 ',
            location: 'Paras hospital srinagar',
            phone: '8035358717',
            fee: '₹900',
            availability: 'Mon-sat 09:00 am -05:50pm)',
            locationLink: 'https://maps.app.goo.gl/uZb6dcgQYf36jGW6A'
        },


        'Altaf Ramzan': {

            name: 'Dr. Altaf Ramzan',
            specialization: 'Neurologist',
            qualification: 'MBBS , MS ,MCH. ',
            location: 'Paras hospital srinagar',
            phone: '8035358717',
            fee: '₹1000',
            availability: 'Mon-sat 09:00 am -05:50pm)',
            locationLink: 'https://maps.app.goo.gl/uZb6dcgQYf36jGW6A'
        },

        'Irfan Ah Shah': {

            name: 'Dr.Irfan Ah Shah',
            specialization: 'Neurologist',
            qualification: 'MBBS,MD,DM (Neurology) ',
            location: 'Medicare Super speciality Hospital karan Nagar Srinagar',
            phone: '6006612081',
            fee: '₹400',
            availability: 'Tue,Thu-Fri 04:30 pm -06:30pm',
            locationLink: 'https://maps.app.goo.gl/6ENzm576xvGHjy3S6'
        },



        'Yawar Nissar': {

            name: 'Dr.Yawar Nissar',
            specialization: 'Plastic Surgeon',
            qualification: 'MBBS, MCh-Plastic Surgery ',
            location: ' Noora Hospital Zainakote Srinagar, Jammu and Kashmir',
            phone: '7006887611',
            fee: '₹400',
            availability: 'Mon-sun 10:00am -09:00pm',
            locationLink: 'https://maps.app.goo.gl/j9wgtKCTdKvdkBo67'
        },


        'Ishaq Malik': {

            name: 'Dr.Ishaq Malik',
            specialization: 'Pediatrician',
            qualification: 'MD - Pediatrics, MBBS',
            location: ' Karan Nagar, Shifa hospital, Srinagar',
            phone: '8037296908',
            fee: '₹400',
            availability: 'Mon-fri 04:30-08:00pm',
            locationLink: 'https://maps.app.goo.gl/ss9AXqhzSsEvw9Z8A'
        },


        'Syed Nawaz': {

            name: 'Dr.Syed Nawaz',
            specialization: 'Obstetrics & Gynecology Obstetrician',
            qualification: 'MBBS, DNB',
            location: ' Karan Nagar, Shifa hospital, Srinagar',
            phone: '1161262759',
            fee: '₹400',
            availability: 'Tue, Fri, Sun 04:45 PM - 08:00 PM',
            locationLink: 'https://maps.app.goo.gl/ss9AXqhzSsEvw9Z8A'
        },


        'Sheikh Shahid': {

            name: 'Dr.Sheikh Shahid',
            specialization: 'Dental Surgeon,Implantologist',
            qualification: 'BDS',
            location: ' Karan Nagar, Shifa hospital, Srinagar',
            phone: '8047111096',
            fee: '₹200',
            availability: 'Mon-sat (11:00Am -06:30pm & 09:00pm -10:30) Sun (11:00am -05:00pm )',
            locationLink: 'https://maps.app.goo.gl/ss9AXqhzSsEvw9Z8A'
        },


        'Haris Nazir khan': {

            name: 'Dr.Haris Nazir khan',
            specialization: 'Therapist/Dietition/Nutritionist',
            qualification: 'MBBS, Post Graduate Diploma in Pediatric Nutrition (PGDPDN)',
            location: ' AF Kids clinic Koker Masjid Nawa kadal ',
            phone: '9906624464',
            fee: '₹350',
            availability: 'Mon-sun 04:30pm - 05:30pm',
            locationLink: 'https://maps.app.goo.gl/3ks8SJKQYXifvEco7'
        },




        'Adnan matto': {

            name: 'Dr.Adnan matto',
            specialization: 'General Surgeon',
            qualification: 'MBBS, MS',
            location: ' National Drug store,Noushara Srinagar ',
            phone: '1161264859',
            fee: '₹200',
            availability: 'Mon-Thu 05:30pm -07:00pm',
            locationLink: 'https://maps.app.goo.gl/2vriGbvarXJVC5aa7'
        },

        'Saleem Jahangir': {

            name: 'Dr.Saleem Jahangir',
            specialization: 'General Surgeon',
            qualification: 'MBBS, DNB',
            location: ' Noora hospital Zainakote Srinagar',
            phone: '1141193997',
            fee: '₹500',
            availability: 'Mon,Thu 08:00am -09:00am &  05:00pm to 06:00pm Sat (09:00am to 10:00am  & 5:00pm -06:00pm',
            locationLink: 'https://maps.app.goo.gl/j9wgtKCTdKvdkBo67'
        },

        'Sabreena Qadri': {

            name: 'Dr.Sabreena Qadri',
            specialization: 'Psychiatrist',
            qualification: 'MBBS , MD ( Psychiatry)',
            location: ' Qadris Medical clinic safakadal',
            phone: '1141193906',
            fee: '₹200',
            availability: 'Mon - Sat 11:00Am -02:00pm',
            locationLink: 'https://maps.app.goo.gl/xVVhP9i43j7eGvKF7'
        },

        'Shahwar': {

            name: 'Dr.Shahwar',
            specialization: 'Dentist',
            qualification: 'BDS',
            location: 'Apollo clinic karan nagar',
            phone: '1140844811',
            fee: '₹300',
            availability: 'Mon-Tue(4:30 pm -7:00pm ) & Sun( 05:30am -12:00pm )',
            locationLink: 'https://maps.app.goo.gl/riBo4myLK9NWsj4C8'
        },

        'Ashim': {

            name: 'Dr.Ashim',
            specialization: 'Dentist',
            qualification: 'BDS',
            location: 'Asa Dental Jawahar  Nagar ',
            phone: '1142213882',
            fee: '₹300',
            availability: 'Mon-sat  (10:00am -07:00pm ) Sun ( 10:00am -08:00pm )',
            locationLink: 'https://maps.app.goo.gl/8GHPWBFn4ZAm7BRG9'
        },

        'Mudassir Hassan Pandith': {

            name: 'Dr. Mudassir Hassan Pandith',
            specialization: 'Psychologist',
            qualification: 'M phil Clinical Psychology ',
            location: 'Prevalent pharmacy Dargah Srinagar  ',
            phone: '1140848838',
            fee: '₹500',
            availability: 'Sat ( 10:00 Am - 01:00pm & 04:30pm -06:00pm )',
            locationLink: 'https://maps.app.goo.gl/HyUdQBgD3ZxSotBc8'
        },

        'Tanveer Iqbal': {

            name: 'Dr.Tanveer Iqbal',
            specialization: 'Urologist',
            qualification: 'DNB-Urology/Genito- urinary Surgery , MBBS, MS- General surgery ',
            location: 'Mehboob Medicate S bala Srinagar ',
            phone: '1161262033',
            fee: '₹300',
            availability: 'Mon-Thu 08:45 Am -09:45Am Sun ( 03:00pm-07:00Pm )',
            locationLink: 'https://maps.app.goo.gl/sEXq8muFFwEGhsh37'
        },

        'Masroor Shah': {

            name: 'Dr. Masroor Shah',
            specialization: 'Dentist',
            qualification: 'BDS ',
            location: 'Khyber Medical Institute Khayam Chowk, Nowpora  ',
            phone: '1140845776',
            fee: '₹200',
            availability: 'Mon - Sat 04:00 PM - 08:00 PM',
            locationLink: 'https://maps.app.goo.gl/9oe3SufCPpLfi7CQ7'
        },

        'Jibran Bashir': {

            name: 'Dr. Jibran Bashir',
            specialization: 'Orthopedic',
            qualification: 'MBBS, Diploma in Orthopaedics, DNB - Orthopedics ',
            location: 'Dr Zargars Multispeciality Clinic Parimpora, Srinagar ',
            phone: '8491049816',
            fee: '₹300',
            availability: 'Mon - Fri 09:00 AM - 10:00 AM & 06:00 PM - 09:00 PM. Sat 05:00 PM - 07:00 PM',
            locationLink: 'https://maps.app.goo.gl/qAxQ7vjijxz3Mu6NA'
        },


        'Zameer Ali': {

            name: 'Dr. Zameer Ali',
            specialization: 'Orthopedic',
            qualification: 'DNB - Orthopedics ',
            location: 'RMC Clinic Bemina, Srinagar  ',
            phone: '1161264859',
            fee: '₹250',
            availability: 'Mon, Fri (08:00 PM - 10:00 PM) Wed (07:00 PM - 10:00 PM)  Sat (07:00 PM - 09:00 PM)',
            locationLink: 'https://maps.app.goo.gl/aJE1Cc2E8h6dHmRB7'
        },


        'Muzafar Zargar': {

            name: 'Dr. Muzafar Zargar',
            specialization: 'Diabetes, thyroid disorders, and obesity management',
            qualification: 'MBBS, MD ',
            location: 'Safa Marwah Hospital, 90 Feet Road, Upper Soura  ',
            phone: '9419447382',
            fee: '₹300',
            availability: '05:30 PM - 06:30 PM',
            locationLink: 'https://maps.app.goo.gl/4gRoteYEymCdEh429'
        },


        'Junaid Banday': {

            name: 'Dr. Junaid Banday',
            specialization: 'Dentist',
            qualification: 'BDS ',
            location: 'Smile kashmir Dental care near Habak Naseem Bagh ',
            phone: '1161262036',
            fee: '₹100',
            availability: 'Mon - Sat ( 09:00 AM - 12:00 PM & 03:00 PM - 09:00 PM ) Sun ( 09:00 AM - 12:00 PM )',
            locationLink: 'https://maps.app.goo.gl/4kU8SuvZUsL6gsKi6'
        },

        'Arbina Jeelani': {

            name: 'Dr. Arbina Jeelani',
            specialization: 'Dentist',
            qualification: 'BDS ',
            location: 'ASA Dental Jawahar Nagar, Srinagar ',
            phone: '1143078632',
            fee: '₹300',
            availability: 'Mon - Sat (10:00 AM - 07:00 PM) Sun ( 10:00 AM - 08:00 PM )',
            locationLink: 'https://maps.app.goo.gl/8GHPWBFn4ZAm7BRG9'
        },

        'Bashir Ahmed Lone': {

            name: 'Dr. Bashir Ahmed Lone',
            specialization: 'Urologist',
            qualification: 'MS - General Surgery, DNB - Urology/Genito - Urinary Surgery, MBBS ',
            location: 'Friends Hospital Bemina, Srinagar Tangpora Bypass Srinagar',
            phone: '9980748578',
            fee: '₹500',
            availability: 'Mon - Tue, Thu - Sat 10:30 AM - 04:00 PM',
            locationLink: 'https://maps.app.goo.gl/3wFw4no2iqfWSgnz9'
        },

        'S. Aamir': {

            name: 'Dr. S. Aamir',
            specialization: 'Ophthalmologist',
            qualification: 'MBBS, DNB - Ophthalmology ',
            location: 'Imam Hussain Hospital Bemina, Hamdania Colony., Srinagar',
            phone: '1161264859',
            fee: '₹150',
            availability: 'Wed 11:00 AM - 02:00 PM',
            locationLink: 'https://maps.app.goo.gl/hzAaW3BP1a4bdf8S8'
        },

        'Araslan Tazeem': {

            name: 'Dr. Araslan Tazeem',
            specialization: 'General Practitioner',
            qualification: 'MBBS ',
            location: 'classic hospital hyderpora Hyderpora Nh Bypass Near Gulberg Colony, Srinagar',
            phone: '1161260791',
            fee: '₹150',
            availability: 'Sat 04:00 PM - 06:00 PM Sun 04:00 AM - 06:00 PM',
            locationLink: 'https://maps.app.goo.gl/VAJnMMLrzERTkvD19'
        },

        'Abdul Reshi': {

            name: 'Dr. Abdul Reshi',
            specialization: 'Comprehensive kidney care',
            qualification: 'MBBS, MD, DM (Nephrology)',
            location: 'Dr Reshis Kidney Care & Diagnostic Centre',
            phone: '1942401013',
            fee: '₹300',
            availability: 'Every day from 9:00 AM to 1:00 PM',
            locationLink: 'https://maps.app.goo.gl/HwYgLXVfAzhfhgbc9'
        },

        'Shazia Jeelani': {

            name: 'Dr. Shazia Jeelani',
            specialization: 'Dermatologist',
            qualification: 'MD DERMATOLOGY, FACSI DERMATOSIS, AESTHETICS AND',
            location: 'Mediworld Clinics Wazir Bagh, LD Hospital Road, Srinagar',
            phone: '6005160601',
            fee: '₹300',
            availability: '04:30 PM - 06:00 PM',
            locationLink: 'https://maps.app.goo.gl/WAuguz6ABYeuQ2yV8'
        },
        
        
            "Hashim Yaqoob Bazaz": {
                name: "Dr. Hashim Yaqoob Bazaz ",
                specialization: "Chiropractor",
                qualification: "BSc in Nutritional Sciences (University of Kashmir)Chiropractic Doctorate (New York)",
                location: "Imperial polyclinic, Radio colony, Rajbagh , Srinagar",
                phone: "6005155413",
                fee: "550",
                availibility: "9 AM to 5PM Except Sunday",
                locationLink: "https://maps.app.goo.gl/a7o4Lma4y2dBEo9F8"
            },
            "Ahmad Khalid Andrabi": {
                name: "Dr. Ahmad Khalid Andrabi",
                specialization: "General Physician",
                qualification: "MBBS, MD - General Medicine",
                location: "Jeelanaabad, Srinagar",
                phone: "9469833976",
                fee: "450",
                availibility: "Mon-Sat 07:00 AM-1:00 PM 02:00 PM-08:00PM",
                locationLink: "https://maps.app.goo.gl/GjQuV58jJaBvyWzs5"
            },
            "M Y Khan": {
                name: "Dr. M Y Khan",
                specialization: "Cardiologist",
                qualification: "MBBS, MS - General Surgery",
                location: "Chanapora Main Road, Landmark: Near J&K Bank, Srinagar",
                phone: "1143078257",
                fee: "350",
                availibility: "Everyday Except Sunday",
                locationLink: "https://maps.app.goo.gl/5EPsJaNViQtNzqUn8"
            },
            "Bashir Ahmad": {
                name: "Dr. Bashir Ahmad",
                specialization: "opthalmologist",
                qualification: "MBBS DNB in Opthalmology",
                location: "Eye Care Research Centre Karan Nagar, Srinagar ",
                phone: "9596045255",
                fee: "500",
                availibility: "Mon - Sat 09:00 AM - 05:00 PM",
                locationLink: "https://maps.app.goo.gl/ErNGy495jsDufPzh8"
            },
            "Najeeb Ullah Sofi": {
                name: "Dr. Najeeb Ullah Sofi",
                specialization: "Cardiologist",
                qualification: "MD - Cardiology, MD - General Medicine, MBBS",
                location: "Kak Sarai, Shreen Bagh Road, Landmark: Opposite SMHS Emergency Gate, Srinagar",
                phone: "8037296910",
                fee: "500",
                availibility: "Mon-Fri 10:00 AM- 06:00 PM",
                locationLink: "https://maps.app.goo.gl/A8hedjSLG7Nbc6d79"
            },
            "Bilal Ahmad Rather": {
                name: "Dr. Bilal Ahmad Rather",
                specialization: "Rheumatologist",
                qualification: "MBBS",
                location: "Florence Hospital, Chanpora, Srinagar",
                phone: "9622748807",
                fee: "300",
                availibility: "MON-SAT 10:00 AM - 05:00 PM",
                locationLink: "https://maps.app.goo.gl/JNkVYqhUXsthCjQbA"
            },
            "Sameer Ahmad Malik": {
                name: "Dr. Sameer Ahmad Malik",
                specialization: "Dentist",
                qualification: "BDS, MDS - Conservative Dentistry & Endodontics",
                location: "Kathidarwaza, Anzimar, Srinagar(Access Dental Care)",
                phone: "1140849699",
                fee: "200",
                availibility: "Mon - Sat  02:00 PM - 06:30 PM",
                locationLink: "https://maps.app.goo.gl/zQW6JicvoK6SxF1S6"
            },
            "Basit Hussain": {
                name: "Dr. Basit Hussain",
                specialization: "General Surgeon",
                qualification: "MS - General Surgery, MBBS",
                location: "Chinar Chowk, Landmark: Opposite To Shalimar Garden, Srinagar(Lifeline Healthcare)",
                phone: "1141168288",
                fee: "300",
                availibility: "Mon-Thu,Sat-Sun 10:00 AM - 08:00 PM",
                locationLink: "https://maps.app.goo.gl/hi1qs3Uq4zPCztJEA"
            },
            "Aisha Mehraj": {
                name: "Dr. Aisha Mehraj",
                specialization: "Dentist",
                qualification: "BDS",
                location: "Al Huda Medical, Landmark: Opposite New Buss Adda, Srinagar (Dr Aisha'S Dental Clinic)",
                phone: "1161264691",
                fee: "100",
                availibility: "Mon-Sat 11:00 PM - 06:00 PM",
                locationLink: "https://maps.app.goo.gl/gZ9MKe4b2XnXS11h7"
            },
            "Ajaz Ahmad Suhaff": {
                name: "Dr. Ajaz Ahmad Suhaff",
                specialization: "Neurologist",
                qualification: "MD - Physician, DNB - Psychiatry",
                location: "M. K. Chowk, Hawal, Srinagar, Jammu and Kashmir, Srinagar (Souleh Medicate)",
                phone: "01143-78817",
                fee: "250",
                availibility: "Mon-Sat 05:15 PM - 11:00 PM",
                locationLink: "https://maps.app.goo.gl/PYoPQxFXmCbQSeaf8"
            },
            "Sadia Lanker": {
                name: "Dr. Sadia Lanker",
                specialization: "Gynecologist",
                qualification: "MBBS, DNS, DGO",
                location: "Ujala Cygnus, Kashmir Super Speciality Hospital, Pohru Chowk, Nowgam, Srinagar",
                phone: "18008898984",
                fee: "300",
                availibility: "MON-SAT  09:00 AM - 05:00 PM",
                locationLink: "https://maps.app.goo.gl/wotefwZRBcKJ4WAA7"
            },
            "Omar Bachh": {
                name: "Dr. Omar Bachh",
                specialization: "Neurologist",
                qualification: "DrNB neurosurgery - direct 6 years course, MBBS Bachelor of Medicine and Bachelor of Surgery Srinagar",
                location: "Ujala Cygnus Kashmir Super Speciality Hospital Pohru Chowk, Nowgam",
                phone: "18008898984",
                fee: "400",
                availibility: "MON-SAT 10:00 AM - 05:00 PM",
                locationLink: "https://maps.app.goo.gl/wotefwZRBcKJ4WAA7"
            },
            "Wajid Ali": {
                name: "Dr. Wajid Ali",
                specialization: "Pediatrician",
                qualification: "MBBS",
                location: "Dr Wajidali Clinic Sheribhat Road, Alamgari Bazar, Srinagar",
                phone: "7889988123",
                fee: "1000",
                availibility: "MON-THU 10:00 AM - 01:00 PM",
                locationLink: "https://maps.app.goo.gl/awDVUPVTT6hEMKpu6"
            },
            "Hasina Qari": {
                name: "Dr. Hasina Qari",
                specialization: "General Physician",
                qualification: "MBBS",
                location: "Alamdar Colony, Bemina, Srinagar - 190018 (Opposite Dream Land Public School)",
                phone: "7006702586",
                fee: "300",
                availibility: "MON & THU 04:00 PM -06:00 PM",
                locationLink: "https://maps.app.goo.gl/L4ErJwDhBy2TrvzN6"
            },
            "Dr.Nazeefa": {
                name: "Dr.Nazeefa",
                specialization: "Gynecologist",
                qualification: "MBBS, MD",
                location: "Paras Hospital, Munshi Bagh Srinagar",
                phone: "8080808069",
                fee: "500",
                availibility: "Mon - Fri10:00 AM - 09:00 PM",
                locationLink: "https://maps.app.goo.gl/PdaaYXf2FNnWgNyB6"
            },
            "Insha Kak": {
                name: "Dr. Insha Kak",
                specialization: "Psychiatrist",
                qualification: "M.D. (Psychiatry)",
                location: "Wanbal Rawalpora, Srinagar (Prime Medicate)",
                phone: "1142213811",
                fee: "1500",
                availibility: "Mon-Fri 11:00 AM - 08:00 PM Sat - Sun 12:00 PM - 04:00 PM",
                locationLink: "https://maps.app.goo.gl/xez1pfEW9yq8nbv49"
            },
            "Iqra Shah": {
                name: "Dr. Iqra Shah",
                specialization: "Psychiatrist",
                qualification: "MBBS, M.D. (Psychiatry)",
                location: "First Floor, Bul Bul Bagh, Barzulla Bridge , Zone 5, Srinagar (Friends Pharmacy)",
                phone: "1140036303",
                fee: "600",
                availibility: "Everyday Except Sunday",
                locationLink: "https://maps.app.goo.gl/CAwsZTu6cSm865W1A"
            },
            "Athiya Fahiem Khan": {
                name: "Dr. Athiya Fahiem Khan",
                specialization: "Neurologist",
                qualification: "Amandeep BR Medicity, Hospital Rahmat Nagar Tengpora, Byepass, Srinagar",
                location: "60 Feet Road, Gousia Colony, Srinagar (Rx Pharmacy)",
                phone: "1142213894",
                fee: "600",
                availibility: "Everyday Except Sunday",
                locationLink: "https://maps.app.goo.gl/1TMkGC6KjGPkMbgFA"
            },
            "Syed Bushra Imtiyaz": {
                name: "Dr. Syed Bushra Imtiyaz",
                specialization: "Neuropsychiatrist,Geriatric Psychiatrist",
                qualification: "M.D. (Psychiatry), MBBS",
                location: "60 Feet Road, Gousia Colony, Srinagar (Rx Pharmacy)",
                phone: "1141193967",
                fee: "750",
                availibility: "Everyday (05:00 PM-10:00 PM)",
                locationLink: "https://maps.app.goo.gl/1TMkGC6KjGPkMbgFA"
            },
            "Ms. Mehnawaz Mehraj": {
                name: "Dr. Ms. Mehnawaz Mehraj",
                specialization: "Physiotherepist",
                qualification: "BPTh/BPT",
                location: "Ground Floor Shop No. 33, Bota Shah Complex ,Bota Shah Mohalla,Landmrk: Near Hong Kong Market Srinagar(Ummah Physio)",
                phone: "1141169534",
                fee: "250",
                availibility: "Mon-Sat 10:30 AM-12:00 PM -01:00PM-07:00 PM",
                locationLink: "https://maps.app.goo.gl/i1fjKyZqvQL7mJwC6"
            },
            "Ms. G. Singh Reen": {
                name: "Dr. Ms. G. Singh Reen",
                specialization: "Physiotherepist",
                qualification: "BPTh/BPT",
                location: "Bemina, SrinagarLajpat Nagar 4, Bemina, Srinagar - 190018",
                phone: "1161264691",
                fee: "650",
                availibility: "Mon-Sat 09:00 AM - 01:00 PM  03:00 PM - 09:00 PM",
                locationLink: "https://maps.app.goo.gl/4NCxWpjBPRer8Wwf7"
            },
            "Khan Yawar Manzoor": {
                name: "Dr. Khan Yawar Manzoor",
                specialization: "Physiotherapist ",
                qualification: "MPT - Sports Medicine, BPTh/BPT, fifa diploma in football medicine",
                location: "Comfort Care Athletics Rajbagh Srinagar",
                phone: "9797814255",
                fee: "250",
                availibility: "Mon - Sat: 09:00 AM - 01:00 PM & 03:00 PM - 09:00 PM",
                locationLink: "https://maps.app.goo.gl/XFcYnvZEqFwJ48MEA"
            },
            "Binish Yusuf Khan": {
                name: "Dr. Binish Yusuf Khan",
                specialization: "Physiotherapist ",
                qualification: "BPT (Bachelor of Physiotherapy) & MPT (Master of Physiotherapy) in Orthopedics",
                location: "Ace OrthoPT Cure in Pantha Chowk, Srinagar",
                phone: "9797043123",
                fee: "300",
                availibility: "Mon to Sat: 10:00 AM - 01:00 PM & 03:15 PM - 06:30 PM",
                locationLink: "https://maps.app.goo.gl/46mGESucg4vccYK5A"
            },
            "Ummer Manzoor": {
                name: "Dr. Ummer Manzoor",
                specialization: "Physiotherapist ",
                qualification: "B.P.T, M.I.A.P",
                location: "Amandeep BR Medicity, Hospital Rahmat Nagar Tengpora, Byepass, Srinagar",
                phone: "9878646778",
                fee: "300",
                availibility: "Monday to Saturday: 09:00 AM to 02:00 PM",
                locationLink: "https://maps.app.goo.gl/5rRi1C2J82iRh64y8"
            },
            "Tahir Bashir": {
                name: "Dr. Tahir Bashir ",
                specialization: "Physiotherapist",
                qualification: "BPT (Bachelor In Physiotherapy) MPth (Master Of Physiotherapy)- DR. MVST COLLEGE MANGLORE",
                location: "Max Physiotherapy Centre, Braripora Chowk Nawakadal Srinagar",
                phone: "7942676215",
                fee: "300",
                availibility: "Mon-Sat: 09:00 AM - 05:00 PM",
                locationLink: "https://maps.app.goo.gl/XodkYCVUn4iPQcQY6"
            },
            "Aiman Nazir Banday": {
                name: "Dr. Aiman Nazir Banday",
                specialization: "Physiotherapist",
                qualification: "BPT (Bachelor of Physiotherapy) MPT (Master of Physiotherapy)",
                location: "H.E.A.L Physio | Wellness | Rehab Hazratbal, Banday Lane, Srinagar",
                phone: "9797154378",
                fee: "200",
                availibility: "Monday to Saturday: 03:00 PM - 08:00 PM",
                locationLink: "https://maps.app.goo.gl/drzS1DNYqCZ6PD6d8"
            },
            "Shahid Wali": {
                name: "Dr. Shahid Wali",
                specialization: "Physiotherapist",
                qualification: "BPT (Bachelor of Physiotherapy) MPT (Master of Physiotherapy)",
                location: "Mother Care Clinic Bhagat Barzullah, Srinagar",
                phone: "7947131529",
                fee: "200",
                availibility: "Monday to Saturday, 09:00 AM - 05:00 PM",
                locationLink: "https://maps.app.goo.gl/bm1WYK1iUFX1o38n8"
            },
            "Shadman Pandit": {
                name: "Dr. Shadman Pandit",
                specialization: "Physiotherapist",
                qualification: "MPT (Master of Physiotherapy) MPT in Cardiopulmonary Conditions JMMT (Junior Management and Medical Training)",
                location: "Physio Solutions Bemina Bypass, Opposite Arise Hyundai, Srinagar",
                phone: "9149965711",
                fee: "250",
                availibility: "Monday to Saturday: 09:00 AM - 05:00 PM",
                locationLink: "https://maps.app.goo.gl/coPdpqWbnqKmRc9f7"
            },
            "Shah Aadil Rashid": {
                name: "Dr. Shah Aadil Rashid ",
                specialization: "Physiotherappist",
                qualification: "MPT in Orthopedic Physiotherapy   &  Ph.D. in Physiotherapy",
                location: "Integral Therapeutic Clinic near Primary Health Centre, Lal Chowk, Srinagar.",
                phone: "6006512981",
                fee: "300",
                availibility: "Monday to Saturday, 5:30 PM - 8:00 PM.",
                locationLink: "https://maps.app.goo.gl/RA8odivvGsyRPAtAA"
            },
            "Aijaz Mansoor": {
                name: "Dr. Aijaz Mansoor",
                specialization: "Cardiologist",
                qualification: "MBBS, MD, DNB - Cardiology, FESC",
                location: "Khyber medical institute, Nowpora, Khyam Chowk, Srinagar",
                phone: "9622401406",
                fee: "400",
                availibility: "Mon - Sat 10: 00 am to 04:00pm",
                locationLink: "https://maps.app.goo.gl/xNJAu7jr11XKhRxW8"
            },
            "Tariq Rashid": {
                name: "Dr. Tariq Rashid",
                specialization: "Cardiologist",
                qualification: "MD and DM",
                location: "Shifa Medical Center, Magarmal Bagh Rd, Shergarhi, Srinagar",
                phone: "7051022389",
                fee: "350",
                availibility: "Mon - Sat 04:00 pm to 07: 00pm",
                locationLink: "https://maps.app.goo.gl/SfvKxthermH4sSHG9"
            },
            "Hakim Irfan Showkat": {
                name: "Dr. Hakim Irfan Showkat",
                specialization: "Cardiologist",
                qualification: "MBBS, AFESC MD, DNB, FACC, FAPSIC",
                location: "SRINAGAR MEDCITY HEART INSTITUTE  Nowgam Bye-Pass Chowk,",
                phone: "7006975105",
                fee: "350",
                availibility: "Mon-Sun: 9am - 7pm",
                locationLink: "https://maps.app.goo.gl/V6i5zH8HzDUvmDBM7"
            },
            "Javaid Ahmed Bhat": {
                name: "Dr. Javaid Ahmed Bhat",
                specialization: "Endocrinologist",
                qualification: "MD - Physician, PG Diploma In Clinical Dermatology (PGDCD), IIAM, PGDT, FAM - Fellowship In Aesthetic Medicine",
                location: "Dr Bhats Skin Laser Centre",
                phone: "7298141616",
                fee: "300",
                availibility: "Monday to Saturday: 9:00 AM  6:00 PM",
                locationLink: "https://maps.app.goo.gl/V14zx6Wo5CW3Qej89"
            },
            "Showket Bhat": {
                name: "Dr. Showket Bhat",
                specialization: "Dermatologist",
                qualification: "MBBS & MD in Dermatology",
                location: "Medvalley skin laser and hair transplant centre barzulla baghat, Sanat Nagar",
                phone: "9906600000",
                fee: "450",
                availibility: "Monday to Saturday: 9:30 AM  5:00 PM",
                locationLink: "https://maps.app.goo.gl/q3uWUST1evhQfYiS7"
            },
            "Shah Aaqib Aslam": {
                name: "Dr. Shah Aaqib Aslam",
                specialization: "Dematologist",
                qualification: "MBBS: University of Kashmir, 2017 & MD: Dermatology",
                location: "Q'Derma The Skin Clinic Jawahar Nagar, Srinagar.",
                phone: "6005348879",
                fee: "500",
                availibility: "Monday to Saturday: 11:30 AM  5:00 PM & Sun 10:30am1:30pm",
                locationLink: "https://maps.app.goo.gl/kuBcF2LuFW2FWXk28"
            },
            "Hilal Ahmad Ganaie": {
                name: "Dr. Hilal Ahmad Ganaie ",
                specialization: "Neurologist",
                qualification: "MBBS , MD in Medicine , DM in Neurology & Fellowship in Stroke & Neuro Intervention",
                location: "Paras Hospital Nowgam Bypass, Srinagar.",
                phone: "8035358717",
                fee: "500",
                availibility: "Monday to Saturday: 10:00 AM  4:00 PM",
                locationLink: "https://maps.app.goo.gl/C4osfSQNA31EfdpS8"
            },
            "Altaf Shah": {
                name: "Dr. Altaf Shah",
                specialization: "Cardiologist",
                qualification: "MD, DM (Cardiology)",
                location: "Shifa Medical Centre, Srinagar",
                phone: "9858473383",
                fee: "600",
                availibility: "Monday to Saturday, 11:00 AM - 3:00 PM",
                locationLink: "https://maps.app.goo.gl/8B46gz4zC8rU74vD8"
            },
            "Imtiyaz Lone": {
                name: "Dr. Imtiyaz Lone",
                specialization: "Ophthalmologist",
                qualification: "MBBS & MD in Ophthalmology",
                location: "Dr. Imtiyaz Eye Clinic Lal Bazar Main Road, Lal Bazar, Srinagar",
                phone: "9797599785",
                fee: "300",
                availibility: "Mon to Sat: 5:30-9pm",
                locationLink: "https://maps.app.goo.gl/uXmXGPXExqNGhTsB8"
            },
            "Falak Hassan": {
                name: "Dr. Falak Hassan",
                specialization: "Gynaecologist",
                qualification: "MBBS degree from Kashmir University",
                location: "Medicare Hospital Karan Nagar, Srinagar",
                phone: "7947429855",
                fee: "400",
                availibility: "Monday to Saturday, 12:30 PM - 1:45 PM",
                locationLink: "https://maps.app.goo.gl/d5eYUVNKB4LVjAjE7"
            },
            "Shayesta Rahi": {
                name: "Dr. Shayesta Rahi",
                specialization: "Gynaecologist & Obstetrician",
                qualification: "MBBS, MD",
                location: "BINDROO HEALTH ZONE OPPOSITE IQBAL PARK",
                phone: "7889823021",
                fee: "320",
                availibility: "MON-FRI 08:45 AM - 10:00 AM",
                locationLink: "https://maps.app.goo.gl/Sk7AUrr44Wx6tbVC9"
            },
            "Dr Tahir Malik": {
                name: "Dr Tahir Malik",
                specialization: "Gynaecologist",
                qualification: "MBBS, MD, DGO, MRCOG, FRCOG",
                location: "Dr Tahir Malik Clinic Baghat, Srinagar.",
                phone: "1942430414",
                fee: "300",
                availibility: "MON-SAT 12: 00 PM - 02: 00 PM",
                locationLink: "https://maps.app.goo.gl/Kg8R6Yc22h5iuF3A9"
            },
            "Ishtiyaq Ahmad": {
                name: "Dr. Ishtiyaq Ahmad",
                specialization: "Dentist & Implantologist",
                qualification: "BDS, AFAAID (Chicago USA) , MAAID",
                location: "Aesthetic&  Implant Dentistry clinic Kaka Sarai Karan Nagar",
                phone: "1942503030",
                fee: "300",
                availibility: "Mon-Sat 10:00 AM - 01:00PM & Sun 10: 00AM -02:00PM",
                locationLink: "https://maps.app.goo.gl/DpZWpquxmANd9aBL6"
            },
            "Muzaffer Hussain Parray": {
                name: "Dr. Muzaffer Hussain Parray",
                specialization: "Dentist",
                qualification: "BDS Dentist,Cosmetic/Aesthetic Dentist,Dental Surgeon",
                location: "Dr Parray's Modern Dental Clinic Aribagh Nowgam srinagar",
                phone: "9469912890",
                fee: "200",
                availibility: "Mon - Sun 09:00 AM - 11:00 PM",
                locationLink: "https://maps.app.goo.gl/vSYQWJZebqg8uEWj7"
            },
            "Heena Altaf": {
                name: "Dr. Heena Altaf",
                specialization: "Dermatologist",
                qualification: "MBBS, MD",
                location: "Apex Dermatology located at Karan Nagar, Gole Market, Srinagar.",
                phone: "9596143019",
                fee: "400",
                availibility: "MON-SAT 10: 00 PM - 02: 00 PM",
                locationLink: "https://maps.app.goo.gl/FgVqBiKvyHZyc8HU7"
            },
            "Kamran": {
                name: "Dr. Kamran",
                specialization: "Dentist",
                qualification: "BDS ( RUHS ) FICCD",
                location: "Dr. Kamran Mir'S Tooth Care & Implant Center Batmaloo Srinagar",
                phone: "7006406797",
                fee: "300",
                availibility: "Mon - Sun 09:00 AM - 09:00 PM",
                locationLink: "https://maps.app.goo.gl/fxAPbZdZpQziVuNy7"
            },
            "Khalid Mohiudin Mir": {
                name: "Dr. Khalid Mohiudin Mir",
                specialization: "Cardiologist",
                qualification: "DM (Cardiology)- PGI, Chandigarh",
                location: "Khyber Medical Institute, Khyam Building, Link Road, Munawarabad, Srinagar",
                phone: "1942485119",
                fee: "300",
                availibility: "Mon - Sat 09: 00 AM -08: 30 PM  &  Sun  12:00 PM to 10:00 PM",
                locationLink: "https://maps.app.goo.gl/xNJAu7jr11XKhRxW8"
            },
            "Shazia Shafi": {
                name: "Dr. Shazia Shafi",
                specialization: "Ophthalmologist",
                qualification: "MBBS, DNB, MNAMS (Gold Medalist)",
                location: "ASG Eye Hospital  Main Road, Qamarwari, srinagar",
                phone: "9070699706",
                fee: "300",
                availibility: "MON-SUN 09:00 AM - 08:00 PM",
                locationLink: "https://maps.app.goo.gl/rMG6HQeWh1ZsQ5oK8"
            },
            "Manzoor Ul Mehdi": {
                name: "Dr. Manzoor Ul Mehdi",
                specialization: "Opthalmologist",
                qualification: "MBBS, MD (AIIMS, NEW DELHI)",
                location: "ASG Eye Hospital  Main Road, Qamarwari, srinagar",
                phone: "9797065326",
                fee: "300",
                availibility: "Mon-fri and Sunday 9:00 AM - 5:00 PM",
                locationLink: "https://maps.app.goo.gl/rMG6HQeWh1ZsQ5oK8"
            },
            "Atif Ali Mir": {
                name: "Dr. Atif Ali Mir",
                specialization: "Opthalmologist",
                qualification: "MS, FVRS (Gold Medalist)",
                location: "ASG Eye Hospital  Main Road, Qamarwari, srinagar",
                phone: "1942490212",
                fee: "300",
                availibility: "Mon - Sat09:00 AM - 06:00 PM",
                locationLink: "https://maps.app.goo.gl/rMG6HQeWh1ZsQ5oK8"
            },
            "Gulbadin Mufti": {
                name: "Dr. Gulbadin Mufti",
                specialization: "General Surgeon",
                qualification: "MBBS, MD - Internal Medicine, DM - Cardiology",
                location: " Mufti's clinic Umer Colony B Srinagar",
                phone: "7097434567",
                fee: "400",
                availibility: "SAT-SUN 04:00 PM - 07:00 PM",
                locationLink: "https://maps.app.goo.gl/kumq8E9JvA2UHgq36"
            },
            "Akhter Ahmad Ganai": {
                name: "Dr. Akhter Ahmad Ganai",
                specialization: "General Surgeon",
                qualification: "MS, Fellowship in Minimal Access Surgery, Fellowship of Indian Association of Gastrointestinal Endo Surgeons",
                location: "Khyber Medical Institute Khayam Chowk Nowpora",
                phone: "9419010274",
                fee: "300",
                availibility: "Mon - Sat 04:30 PM - 08:30 PM",
                locationLink: "https://maps.app.goo.gl/xNJAu7jr11XKhRxW8"
            },
            "Adnan Raina": {
                name: "Dr. Adnan Raina",
                specialization: "Neurologist",
                qualification: "MBBS, MD(Internal Medicine), DM(Neurlogy)",
                location: "Paras Health Srinagar",
                phone: "8376094576",
                fee: "705",
                availibility: "Mon - Sat 09:00 AM - 05:00 PM",
                locationLink: "https://maps.app.goo.gl/C4osfSQNA31EfdpS8"
            },
            "Tasir Beigh": {
                name: "Dr. Tasir Beigh",
                specialization: "Dermatologist",
                qualification: "BUMS , PG Medical Cosmetology, PG Clinical Cosmetoloy, PG DISASTER MANAGEMENT",
                location: "Dr. Taseer's Dermato Aesthetic Clinic 15/1, Beigh Mohalla, Near Jamia Masjid,Allochi Bagh, Srinagar",
                phone: "6005348879",
                fee: "300",
                availibility: "MON-WED, SAT-SUN 06:00 PM - 08:00 PM",
                locationLink: "https://maps.app.goo.gl/XySaeAnoK4sDxCU2A"
            },
            "Tariq Tramboo": {
                name: "Dr. Tariq Tramboo",
                specialization: "Anesthesiologist",
                qualification: "Anesthesiology & Pain Medicine , MD - Pain Medicine & Anesthesiology Srinagar",
                location: "Relief Pain Clinic Auqaf Building, Dalgate Above Dhars Pharmacy",
                phone: "9906678877",
                fee: "300",
                availibility: "MON-SUN 09:30 AM - 12:30 PM",
                locationLink: "https://maps.app.goo.gl/G6VggqCa5hjZKg1q9"
            },
            "Irshad Ahmed Kuchay": {
                name: "Dr. Irshad Ahmed Kuchay",
                specialization: "General Surgeon",
                qualification: "MBBS  MS FIAGES ",
                location: "Medicare, Kaksarai - Doog Ganga Road, Maidanpora, Karan Nagar, Srinagar",
                phone: "1942486869",
                fee: "300",
                availibility: "Mon - Sat 04:30PM - 08:00 PM",
                locationLink: "https://maps.app.goo.gl/d5eYUVNKB4LVjAjE7"
            },
            "Firdous Manzoor": {
                name: "Dr. Firdous Manzoor",
                specialization: "Pulmonologist ",
                qualification: "MBBS,MD, MACCP(USA)",
                location: "New Medical Time Old Charar Shariff, Iqbal Park, Srinagar",
                phone: "9596154689",
                fee: "350",
                availibility: "MON-THU, SAT-SUN 04:00 PM - 10:00 PM",
                locationLink: "https://maps.app.goo.gl/s8ngro6b8CSgNfrj7"
            },
            "Sofiya Ashraf": {
                name: "Dr. Sofiya Ashraf",
                specialization: "Homeopathologist",
                qualification: "MBBS",
                location: "Kashmir Homeo Remedies Opposite Sir Syed Gate, University of Kashmir,Hazratbal",
                phone: "9697032315",
                fee: "200",
                availibility: "MON-SAT 09:30 AM - 05:30 PM",
                locationLink: "https://maps.app.goo.gl/tzhynExXZmCo3pty5"
            },
            "Naveed Nazeer Shah": {
                name: "Dr. Naveed Nazeer Shah",
                specialization: "Pulmonologist ",
                qualification: "MBBS, MD, FCCP",
                location: " Breath Easy Clinic Sanat Nagar Srinagar",
                phone: "9622852619",
                fee: "1000",
                availibility: "TUE-WED, SUN 05:00 PM - 08:00 AM",
                locationLink: "https://maps.app.goo.gl/DdpYLTn6QVzXi87w6"
            },
            "Mir Faisal": {
                name: "Dr. Mir Faisal",
                specialization: "Pulmonologist ",
                qualification: "MBBS, DNB - Pulmonary Medicine, MNAMS",
                location: " AurZuv Med clinics RAMBAGH near Zum Zum Hotel Srinagar",
                phone: "9070974132",
                fee: "500",
                availibility: "MON, WED, FRI-SAT 10:30 AM - 07:00 PM MON-TUE, THU, SAT 03:00 PM - 07:00 PM",
                locationLink: "https://maps.app.goo.gl/DpxjSsEwUuajEAWS8"
            },
            "Mir Sadaqat Hassan Zafar": {
                name: "Dr. Mir Sadaqat Hassan Zafar",
                specialization: "Hematologist",
                qualification: "MBBS,MD(medicine) DNB-Hematology",
                location: "Shifa Hospital Physiotherapy Magarmal Bagh Road, Karan Nagar, Srinagar ",
                phone: "9858473383",
                fee: "500",
                availibility: "MON-SAT 06:00 PM - 07:30 PM",
                locationLink: "https://maps.app.goo.gl/JvHn7Rii2q2MGam47"
            },
            "Fayaz Ahmad war": {
                name: "Dr. Fayaz Ahmad war",
                specialization: "Nephrologist",
                qualification: "MBBS, MD, DNB Nephrology",
                location: "Bindroo Health Zone, IG ROAD, Iqbal Park, Shergarhi, Srinagar",
                phone: "9419014918",
                fee: "500",
                availibility: "MON-THU 04:00 PM - 06: 30 PM",
                locationLink: "https://maps.app.goo.gl/Sk7AUrr44Wx6tbVC9"
            },
            "Asif Sadiq Wani": {
                name: "Dr. Asif Sadiq Wani",
                specialization: "Nephrologist",
                qualification: "MBBS MD,DM - Nephrology",
                location: "Shifa Hospital Physiotherapy Magarmal Bagh Road, Karan Nagar, Srinagar ",
                phone: "9858473383",
                fee: "400",
                availibility: "MON-TUE, SAT 04:30 PM - 07:00 PM",
                locationLink: "https://maps.app.goo.gl/JvHn7Rii2q2MGam47"
            },
            "Azhar Ajaz Khan": {
                name: "Dr. Azhar Ajaz Khan",
                specialization: "Urologist",
                qualification: "DNB - Urology/Genito - Urinary Surgery, MBBS",
                location: "Khanams hospital, Shergarhi, hazuri bagh, Srinagar",
                phone: "9149508726",
                fee: "400",
                availibility: "MON-SAT 09:00 AM -05:00PM",
                locationLink: "https://maps.app.goo.gl/MQUnGchhrggfrxJB8"
            },
            "Mukhtar Masoodi.": {
                name: "Dr. Mukhtar Masoodi.",
                specialization: "Rheumatologist",
                qualification: "MBBS , MD, FRCR",
                location: "Rheumax Arthritis and Rheumatology Center, behind SR Plaza, near Traffic signal Bye-pass Flyover crossing Chowk, Hyderpora, Srinagar",
                phone: "7889619966",
                fee: "350",
                availibility: "WED-SAT 04:00 PM - 07:00 PM & SUN 09:00 AM -01:00 PM",
                locationLink: "https://maps.app.goo.gl/WnD6pyitSygYSnT76"
            },
            "Ajaz Kariem Khan": {
                name: "Dr. Ajaz Kariem Khan",
                specialization: "Rheumatologist",
                qualification: "MBBS, MD,FACR,FRCM",
                location: "Prime Clinics, Gole Market, Shergarhi, Karan Nagar, Srinagar",
                phone: "9858357755",
                fee: "600",
                availibility: "MON-THU, SAT 08:00 AM - 04:30 PM",
                locationLink: "https://maps.app.goo.gl/qAh81cicdUXYu36eA"
            },
            "Arshid Bashir Bhat": {
                name: "Dr. Arshid Bashir Bhat",
                specialization: "Rheumatologist",
                qualification: "MBBS ",
                location: "Kashmir Clinics Central Karan Nagar",
                phone: "9906577005",
                fee: "300",
                availibility: "MON, WED, FRI 04:00 PM - 06:00 PM",
                locationLink: "https://maps.app.goo.gl/1VFLhz7tvZB9Qiz87"
            },
            "Ahmad Javaid": {
                name: "Dr. Ahmad Javaid",
                specialization: "Dietitian/Nutritionist",
                qualification: "MBBS",
                location: "The Apollo Clinic opposite medicare Balgarden, Karan Nagar",
                phone: "7006215745",
                fee: "400",
                availibility: "MON-THU, SAT-SUN 10:00 AM - 06:30 PM",
                locationLink: "https://maps.app.goo.gl/MrN9GKBMoqbAQJ6r6"
            },
            "Syed Bassit": {
                name: "Dr. Syed Bassit",
                specialization: "Gynaecologist",
                qualification: "MBBS/MD/DNB OBG",
                location: "Amina hospital chanapora nowgam bypass Srinagar",
                phone: "8899509699",
                fee: "300",
                availibility: "THU, SAT 05:00 PM - 08:00 PM",
                locationLink: "https://maps.app.goo.gl/1wwNeLiKbcSR7FDK8"
            },
            "Sharafat Mir": {
                name: "Dr. Sharafat Mir",
                specialization: "Psychologist",
                qualification: "BUMS - Bachelor of Unani Medicine & Surgery",
                location: "CITYCARE CLINICS Opp.Masjid Near Kanikadal Bridge Srinagar",
                phone: "8899666150",
                fee: "200",
                availibility: "THU, SAT 04:00 PM - 07:00 PM",
                locationLink: "https://maps.app.goo.gl/7dREAWBigcEhzWmg8"
            },
            "Kulsum Bhat": {
                name: "Dr. Kulsum Bhat",
                specialization: "Psychologist",
                qualification: "Degree in psychology ",
                location: "Healing Centre baghat Barzulla",
                phone: "7947434015",
                fee: "350",
                availibility: "MON-SUN 11:00 AM - 03:30 PM",
                locationLink: "https://maps.app.goo.gl/6muwq2GLDLJrE4at8"
            },
            "Hamayun Ahad": {
                name: "Dr. Hamayun Ahad",
                specialization: "Orthopedic",
                qualification: "MBBS, DNB (Orthopedics) ",
                location: "Noora Hospital Umer Abad, Zainakote",
                phone: "6366530173",
                fee: "300",
                availibility: "MON-SAT 10:00 AM - 04:00 PM",
                locationLink: "https://maps.app.goo.gl/m2koixK71jeRY5TD9"
            },
            "Naseer Mir": {
                name: "Dr. Naseer Mir",
                specialization: "Orthopedic",
                qualification: "MBBS, MS Orthopaedics, Fellow Arthroscopy & Joint Replacement Surgery, MCh Ortho",
                location: "Orthopaedic & Fracture Clinic Kralpora Hawal, Near Hawal Chowk Srinagar",
                phone: "7006398242",
                fee: "500",
                availibility: "MON-FRI 04:00 PM - 07:30 PM SUN 09:00 AM - 02:00 PM",
                locationLink: "https://maps.app.goo.gl/J4WUwt3ZYVvca6EU9"
            },
            "Sayim Wani": {
                name: "Dr. Sayim Wani",
                specialization: "Orthopedic",
                qualification: "MBBS, DNB (Orthopedics), FELLOWSHIP IN PAEDIATRIC ORTHOPAEDICS, Fellowship in Paediatric Orthopaedics",
                location: "Childrens orthopaedics clinic Khyber medical institute",
                phone: "1942485119",
                fee: "600",
                availibility: "MON-SAT 04:30 PM - 06:00 PM",
                locationLink: "https://maps.app.goo.gl/i7WDmywvdKfh95h47"
            },
            "Abedullah Bhat": {
                name: "Dr. Abedullah Bhat",
                specialization: "Orthopedic",
                qualification: "M.S. Orthopaedics, M.B;B.S.",
                location: "Florence Hospital Chanapora",
                phone: "1942440760",
                fee: "300",
                availibility: "SAT 04:30 PM - 07:00 AM",
                locationLink: "https://maps.app.goo.gl/JSVW8QxAycxUuyi19"
            },
            "Haider Ali Quraishi": {
                name: "Dr. Haider Ali Quraishi",
                specialization: "Unani Specialist",
                qualification: "University ofKashmir, Hijamah Specilist, Bachelor of Unani Medicine and Surgery (B.U.M.S), M.D UNANI..",
                location: "Habak Chowk Clinic HazratBal",
                phone: "7006769636",
                fee: "100",
                availibility: "MON-SAT 09:00 AM -08:00 PM",
                locationLink: "https://maps.app.goo.gl/PUihtoHGs394GFfi7"
            },
            "Roopa Mulgund": {
                name: "Dr. Roopa Mulgund",
                specialization: "IVF Specialist",
                qualification: "MBBS Bachelor of Medicine and Bachelor of Surgery",
                location: "Valley Fertility Centre Nowgam Near Masjid-e-Bilal",
                phone: "9906336555",
                fee: "300",
                availibility: "MON-SAT 09:00 AM - 03:30 PM",
                locationLink: "https://maps.app.goo.gl/LjH7Zj4zG5wJzPm26"
            },
            "Mohd Abrar Guroo": {
                name: "Dr. Mohd Abrar Guroo",
                specialization: "Psychiatrist",
                qualification: "MBBS, MD - Psychiatry",
                location: "Bindroo Health Zone, Airport (IG) Rd, Iqbal Park, Shergarhi, Srinagar",
                phone: "9419014918",
                fee: "350",
                availibility: "MON, THU 04:00 PM - 06:30 PM",
                locationLink: "https://maps.app.goo.gl/Sk7AUrr44Wx6tbVC9"
            },
            "Sajid Mohammad Wani": {
                name: "Dr. Sajid Mohammad Wani",
                specialization: "Psychiatrist",
                qualification: "DNB (PSYCHIATRY)",
                location: "UJALA CYGNUS HOSPITAL SRINAGAR Nowgam",
                phone: "18008898984",
                fee: "350",
                availibility: "MON-THU, SAT-SUN 10:00 AM-04:00 PM",
                locationLink: "https://maps.app.goo.gl/xg9CBLJvZTmUex7w7"
            },
            "Musadiq Alaqaband": {
                name: "Dr. Musadiq Alaqaband",
                specialization: "Pediatrician",
                qualification: "Diploma in Child Health (DCH) and a DNB (Pediatrics)",
                location: "Alaqaband child health clinic near kargil house adjacent to JK BANK BEMINA",
                phone: "6006988133",
                fee: "250",
                availibility: "MON-SAT 04:00 PM - 06:30 PM",
                locationLink: "https://maps.app.goo.gl/XCvXFRy8gj65TvHp9"
            },
            "Mushtaq Siddiqi": {
                name: "Dr. Mushtaq Siddiqi",
                specialization: "Pediatrician",
                qualification: "MBBS",
                location: "Batapur Road, Shaheen colony, Batapora, Srinagar",
                phone: "8803047885",
                fee: "200",
                availibility: "MON-SAT 10:00 AM -04:00 PM",
                locationLink: "https://maps.app.goo.gl/XdKACkVvGCzhUzyv5"
            },
            "K B Singh": {
                name: "Dr. K B Singh",
                specialization: "Ayurvedic",
                qualification: "BAMS",
                location: "Ayurvedic Health Clinic Dar Building Rambagh, Srinagar",
                phone: "1161264859",
                fee: "500",
                availibility: "MON-SAT 10:00 AM - 07:30 PM",
                locationLink: "https://maps.app.goo.gl/ZR6mYwFCYz375afZ6"
            },
            "Zia Rasool": {
                name: "Dr. Zia Rasool",
                specialization: "Dentist",
                qualification: "BDS",
                location: "Poly Aesthetics Dental Clinic Soline Bazar, Near Ram Bagh Bridge",
                phone: "1942311792",
                fee: "200",
                availibility: "MON-SAT 04:15 PM - 07:30 PM SUN 08:30 AM - 01:00 PM",
                locationLink: "https://maps.app.goo.gl/57MBdSAZLaGFq1zo7"
            },
            "Owais Digoo": {
                name: "Dr. Owais Digoo",
                specialization: "Dentist",
                qualification: "Bachelors in Dental Surgery, PG Diploma in Hospital Management & Hospital Administration (PGDH&HM), Diploma in Clinical Cosmetology, Dental Sleep Medicine",
                location: "KIASS syed health zone karan nagar near Al Rahat Diagnostics",
                phone: "7006796160",
                fee: "200",
                availibility: "MON-SAT 10:30 AM - 06:00 PM",
                locationLink: "https://maps.app.goo.gl/rrcAaXervonvuF2W7"
            },
            "Anjum Bashir": {
                name: "Dr. Anjum Bashir",
                specialization: "Dentist",
                qualification: "MDS - Prosthodontics and Implantology",
                location: "Radiant dental clinic zum zum complex shaltang srinagar",
                phone: "9796736873",
                fee: "100",
                availibility: "MON-SAT 05:00 PM - 08:00 PM SUN 10:00 AM - 01:00 PM",
                locationLink: "https://maps.app.goo.gl/azz57jJAD5CnPbYZ8"
            },
            "Hammad Nasti": {
                name: "Dr. Hammad Nasti",
                specialization: "Ophthalmologist",
                qualification: "MS Ophthalmology, Fellowship in Vitreoretinal Surgery",
                location: "Al-Kabir Eye Care Centre Jawahar Nagar",
                phone: "9419456661",
                fee: "500",
                availibility: "MON-FRI 10:00 AM - 06:30 PM",
                locationLink: "https://maps.app.goo.gl/ZLZG5bboUdRovWYYA"
            },
            "Dr.Kaisar Ahmad": {
                name: "Dr.Kaisar Ahmad",
                specialization: "Paediatrician",
                qualification: "MBBS",
                location: "Dr. Kaiser'S Clinic Wazir Bagh, Srinagar",
                phone: "7006702054",
                fee: "300",
                availibility: "MON-FRI 09:00 AM -02:00PM",
                locationLink: "https://maps.app.goo.gl/S3VQjPUgeveCsfMVA"
            },
            "Syed Naseer": {
                name: "Dr. Syed Naseer",
                specialization: "Gynecologists",
                qualification: "MBBS, MD",
                location: "Koker Masjid, Mirjanpora, Nawakadal, Srinagar,",
                phone: "7006081810",
                fee: "200",
                availibility: "MON-SUN 09:30 AM - 10:00 PM",
                locationLink: "https://maps.app.goo.gl/ovaSuJCtwELfteo6A"
            },
            "Shahida Mir": {
                name: "Dr. Shahida Mir",
                specialization: "Gynecologists",
                qualification: "MBBS, MD",
                location: "ROYAL DIAGNOSTIC Blue Building, Karan Nagar Gole Market Rd, Karan Nagar",
                phone: "9858078416",
                fee: "300",
                availibility: "MON-SAT 08:00 AM -06:00 PM",
                locationLink: "https://maps.app.goo.gl/TZas1PagTMifiTJs9"
            },
            "Shah Naveed": {
                name: "Dr. Shah Naveed",
                specialization: "Oncologists",
                qualification: "MBBS, MS, DNB",
                location: "PARAS HOSPITALS Paras Hospitals Durganag, Dalgate Bridge, Munshi Bagh",
                phone: "9103944295",
                fee: "500",
                availibility: "MON-SUN 10:00 AM -05:00 PM",
                locationLink: "https://maps.app.goo.gl/C4osfSQNA31EfdpS8"
            },
            "Syed Abdul Shakoor Bukhari": {
                name: "Dr. Syed Abdul Shakoor Bukhari",
                specialization: "AYUSH Practitioner",
                qualification: "Bachelor of Unani Medicine and Surgery (B.U.M.S), Diploma in Ano- rectal , Post graduate Diploma in orthopedic rehabilitation",
                location: "Dr. S.A.S Bukhari's Clinic Near Neelam Chowk, Karan Nagar, Srinagar",
                phone: "9906490084",
                fee: "350",
                availibility: "MON-SUN 05:30 PM - 07:30 PM",
                locationLink: "https://maps.app.goo.gl/zq8mvqEoJ8boN3D89"
            },
            "Zahoor Bhat": {
                name: "Dr. Zahoor Bhat",
                specialization: "General Surgeon",
                qualification: "PG Scholar- MS Shalya Tantra (General Surgery)",
                location: "Dr Zahoors Anorectal Clinic Airport Rd, Hyderpora, Srinagar",
                phone: "7889486859",
                fee: "400",
                availibility: "MON-SUN 09:00 AM - 05 :00 PM",
                locationLink: "https://maps.app.goo.gl/acNYqh1k57v4SrUWA"
            },
            "Mohammad Farooq Mir": {
                name: "Dr. Mohammad Farooq Mir",
                specialization: "General Physician",
                qualification: "MBBS",
                location: "Bilal Medicate 90 feet road Srinagar",
                phone: "7006423596",
                fee: "250",
                availibility: "MON-SAT 09:30 AM - 12:30 PM",
                locationLink: "https://maps.app.goo.gl/2L85ojwev4SRV53V6"
            },
            "Sujoy Bhattacharjee": {
                name: "Dr. Sujoy Bhattacharjee",
                specialization: "Orthopedic",
                qualification: "MBBS, MS,  M CH",
                location: "Mir Pharamacy Housing Colony, Chanpora, Srinagar",
                phone: "7838858517",
                fee: "500",
                availibility: "Every month 3rd 09:00 am -03:00pm",
                locationLink: "https://maps.app.goo.gl/yy8prQhTc7xDAqwT6"
            },
            "Ifrah Muzamil": {
                name: "Dr. Ifrah Muzamil",
                specialization: "Physiotherapist",
                qualification: "B.P.T, M.P.T( Ortho), M.I.A.P",
                location: "Mother care clinic,, behind JK Bank, Baghat, Srinagar",
                phone: "9622229096",
                fee: "300",
                availibility: "Mon - Sat 10:00 AM to 04:00 PM",
                locationLink: "https://maps.app.goo.gl/bm1WYK1iUFX1o38n8"
            },
            "Sheikh Shafeeq Palesmir": {
                name: "Dr. Sheikh Shafeeq Palesmir",
                specialization: "Diabetologist",
                qualification: "MBBS, DDM, FDM",
                location: "Gupt Ganga - Ishber Road, Nishat ,Srinagar",
                phone: "7006271695",
                fee: "300",
                availibility: "Mon-Sat: 10am - 10pm Sun: 1pm - 10pm",
                locationLink: "https://maps.app.goo.gl/7cSFBUSG5HkCLH5b7"
            },
            "Siddharth M Bindroo": {
                name: "Dr. Siddharth M Bindroo",
                specialization: "Diabetologist",
                qualification: "MBBS, M.R.C.P",
                location: "BINDROO HEALTH ZONE Airport (IG) Road, Iqbal Park, Shergarhi, Srinagar",
                phone: "9419014918",
                fee: "250",
                availibility: "Mon-Thu: 10am - 5pm Fri-Sun: Closed",
                locationLink: "https://maps.app.goo.gl/Sk7AUrr44Wx6tbVC9"
            },
            "Naveed Nazir Shah": {
                name: "Dr. Naveed Nazir Shah",
                specialization: "Pulmonologists",
                qualification: "MBBS, MD, FCCP",
                location: "Dalgate Bridge, Near Chest Disease Hospital, Karapura, Rainawari, Srinagar",
                phone: "9622852619",
                fee: "1000",
                availibility: "Mon: 8am - 8:30pm Tue-Sat: 8am - 8:30pm Sun: 8am - 6:30pm",
                locationLink: "https://maps.app.goo.gl/yVCaSrBtr8nctD5a8"
            }
        };

    const govt_profiles = {

        'Showkat Ah. Gurkoo': {
            name: 'Dr. Showkat Ah. Gurkoo',
            specialization: 'HOD Dept. of Anesthesiology',
            qualification: 'MBBS, MD in Anesthesiology',
            location: 'SKIMS Soura, Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },


        'Talib Khan': {
            name: 'Prof. Dr. Talib Khan',
            specialization: 'Consultant Dept. of Anesthesiology',
            qualification: 'MBBS from Govt. Medical College 2003 and MD From SKIMS Deemed University Srinagar 2008',
            location: 'SKIMS Soura, Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Muneer': {
            name: 'Prof. Dr. Muneer',
            specialization: 'Consultant and Prof. Dept. of General Surgery',
            qualification: 'MBBS, MS in General Surgery',
            location: 'SKIMS Soura, Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Amir Nazir': {
            name: 'Dr. Amir Nazir',
            specialization: 'Consultant Dept. of Anesthesiology',
            qualification: 'MBBS, MD in Anesthesiology',
            location: 'SKIMS Soura, Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Rauf Wani': {
            name: 'Dr. Rauf Wani',
            specialization: 'Prof. Dept. of General Surgery',
            qualification: 'MBBS, GMC Srinagar (1998) MS SKIMS (2001) MRCS, Royal College of Surgeons (Edinburgh) 2006',
            location: 'SKIMS Soura, Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Muzaffar Zargar': {
            name: 'Dr. Muzaffar Zargar',
            specialization: 'Consultant General Medicine',
            qualification: 'MBBS, MD in General Medicine',
            location: 'SKIMS Soura, Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Mubashir Wani': {
            name: 'Dr. Mubashir Wani',
            specialization: 'Consultant Dept. of General Surgery',
            qualification: 'MS in General Surgery',
            location: 'SKIMS Soura, Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Saleem Wani': {
            name: 'Prof. Dr. Saleem Ah. Wani',
            specialization: 'Prof. and Head Urologist',
            qualification: 'MBBS, MS, Mch',
            location: 'SKIMS Soura, Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Amin Shah': {
            name: 'Dr. Zargar Amin Shah',
            specialization: 'HOD Dept. of Immunology and Molecular Medicine',
            qualification: 'PhD, IVRI, Izatnagar UP (1993)',
            location: 'SKIMS Soura, Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Naveed Nazir': {
            name: 'Dr. Naveed Nazir',
            specialization: 'Consultant and Prof. Chest Disease Hospital GMC',
            qualification: 'MBBS, MD, DM',
            location: 'SKIMS Soura, Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Arshid': {
            name: 'Dr. Arshid',
            specialization: 'Psychiatrist Prof. GMC',
            qualification: 'MBBS MD',
            location: 'SKIMS Soura, Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Rabia Khursheed': {
            name: 'Dr. Rabia Khursheed',
            specialization: 'Obstetrics and Gynaecologist',
            qualification: 'MBBS from J.L.N.M.C Ajmer, University of Rajasthan 1999 and MD from Govt. Medical College, Srinagar',
            location: 'SKIMS Soura, Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Abdul Wahid Mir': {
            name: 'Dr. Abdul Wahid Mir',
            specialization: 'Surgical Oncologist SKIMS',
            qualification: 'MBBS from Govt. Medical College D.A (Govt. Medical College) MS General Surgery (SKIMS Srinagar)',
            location: 'SKIMS Soura, Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Sheikh Irshad Ahmad': {
            name: 'Dr. Sheikh Irshad Ahmad',
            specialization: 'Additional Prof. Dept of Anesthesiology SKIMS',
            qualification: 'MBBS from Govt. Medical College 1998 and MD From SKIMS Deemed University Srinagar 2004',
            location: 'SKIMS Soura, Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },

        'Nadia Khurshid': {
            name: 'Dr. Nadia Khurshid',
            specialization: 'Assistant Prof. Dept of Obstetrics and Gynaecology',
            qualification: 'MBBS, MD(OBG) DNB.',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Roohi Rasool': {
            name: 'Dr. Roohi Rasool',
            specialization: 'Prof. Dept of Immunology and Molecular Medicine',
            qualification: 'MBBS from Govt. Medical College Srinagar 1994 MD, SKIMS deemed University(1999) DAA (Diploma Allergy and Asthma), CMC Vellore (2007)',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Mubashir Shah': {
            name: 'Dr. Mubashir Shah',
            specialization: 'Prof. Dept of General Surgery',
            qualification: 'MBBS, GMC Srinagar (1997) MS, SKIMS Srinagar (2003)',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Sanaullah Shah': {
            name: 'Dr. Sanaullah Shah',
            specialization: 'Prof. and Head Dept of General Medicine',
            qualification: 'MBBS, University of Kashmir MD, Internal Medicine, SKIMS Deemed University, Kashmir',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Mushtaq AH. Dangroo': {
            name: 'Dr. Mushtaq AH. Dangroo',
            specialization: 'Additional Prof. Medicine and Rheumatology SKIMS',
            qualification: 'MBBS, Kashmir University (1993) MD SKIMS Srinagar (2005)',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Shakeel Ahmad Mir': {
            name: 'Dr. Shakeel Ahmad Mir',
            specialization: 'Additional Prof. In Clinical Pharmacology',
            qualification: 'MBBS - University of Kashmir, MD - University of Kashmir, DPH - IHCA Madipakkam Chennai',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Syed Mudasir Jan': {
            name: 'Dr. Syed Mudasir Jan',
            specialization: 'Prof. And Head in Clinical Bio Chemistry',
            qualification: 'PhD.',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Nazir Ahmad Khan': {
            name: 'Dr. Nazir Ahmad Khan',
            specialization: 'Prof. Radiation Oncology Head Dept. of Pain and Palliative care',
            qualification: 'MD.',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Mohammad Akbar Shah': {
            name: 'Dr. Mohammad Akbar Shah',
            specialization: 'Additional Prof. & I/C Head of the Department',
            qualification: 'MBBS - GMC Sgr MD in Anesthesiology FCCP - American College of Chest Physician',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Ghulam Hassan Yatoo': {
            name: 'Dr. Ghulam Hassan Yatoo',
            specialization: 'Prof. and Head of Department Medical superintendent, State Cancer Instt. (SCI) SKIMS',
            qualification: 'MBBS - University of Kashmir 1989, MD - SKIMS Deemed University 2006',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Farooq Ahmad Jan': {
            name: 'Dr. Farooq Ahmad Jan',
            specialization: 'Prof. Medical Superintendent',
            qualification: 'MBBS - University of Kashmir 1995, MD - SKIMS Deemed University 2002',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Bashir Ahmad Fomda': {
            name: 'Dr. Bashir Ahmad Fomda',
            specialization: 'Prof. and HOD',
            qualification: 'MBBS - GMC Srinagar 1991, MD in Microbiology Postgraduate Instt. Of MEDICAL EDU. & RESEARCH Chandigarh 1997',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Gulnaz Bashir': {
            name: 'Dr. Gulnaz Bashir',
            specialization: 'Prof. in Micro Biology',
            qualification: 'MBBS - GMC / University of Kashmir 1995, MD in Micro Biology SKIMS 2002',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },

        'Bashir Ahmad Charoo': {
            name: 'Dr. Bashir Ahmad Charoo',
            specialization: 'Prof. and Head',
            qualification: 'MD - Paediatrics',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Mushtaq Ahmad Bhat': {
            name: 'Dr. Mushtaq Ahmad Bhat',
            specialization: 'Prof. Dept of Paediatrics and Neonatology',
            qualification: 'MBBS - University of Kashmir 1990, MD - (Paediatrics) PGI Chandigarh 1998',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Qazi Iqbal Ahmad': {
            name: 'Dr. Qazi Iqbal Ahmad',
            specialization: 'Prof. Dept of Paediatrics and Neonatology',
            qualification: 'MBBS - University of Kashmir 1985, MD (Paediatrics) University of Kashmir 1993',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Javeed Iqbal Bhat': {
            name: 'Dr. Javeed Iqbal Bhat',
            specialization: 'Additional Prof. Dept of Paediatrics and Neonatology',
            qualification: 'MBBS - Jammu University 2002, MD (Paediatrics) SKIMS Deemed University 2007',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Tanveer Ahmed Rather': {
            name: 'Dr. Tanveer Ahmed Rather',
            specialization: 'Prof. Head of Deparment of Nuclear Medicine',
            qualification: 'MBBS - GMC 1996, MD (Radiotherapy) SKIMS 2002',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Cimona LYN Saldanha': {
            name: 'Dr. Cimona LYN Saldanha',
            specialization: 'Prof. and Head of Deparment of Obstetrics and Gynaecology',
            qualification: 'MBBS - J.J.M. Medical College 1996, MS - OBG (Rajiv Gandhi University of Health Sciences, Bangalore 2002',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Syed Besina Yasin': {
            name: 'Dr. Syed Besina Yasin',
            specialization: 'Prof. and HOD in Pathology',
            qualification: 'MBBS - GMC Srinagar 1991, MD in Pathology GMC Srinagar 2001',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Zubaida Rasool': {
            name: 'Dr. Zubaida Rasool',
            specialization: 'Prof. Dept of Pathology',
            qualification: 'MBBS - GMC Srinagar 2000, MD in Pathology GMC Srinagar 2006',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Aiffa Aiman': {
            name: 'Dr. Aiffa Aiman',
            specialization: 'Associate Prof. Dept of Pathology',
            qualification: 'MBBS - GMC Srinagar 2007, MD in Pathology GMC Jammu 2011',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Tazeen Jeelani': {
            name: 'Dr. Tazeen Jeelani',
            specialization: 'Assistant Prof. Dept of Pathology',
            qualification: 'MBBS - GMC Srinagar 2010, MD in Pathology SKIMS 2014',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Tufail Muzaffar': {
            name: 'Dr. Tufail Muzaffar',
            specialization: 'Assistant Prof. Dept of Physical Medicine and Rehabilitation',
            qualification: 'MBBS - Jammu University 2003, DNB PMR - VMMC and Safdarjung Hospital New Delhi 2013',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Feroze A Shaheen': {
            name: 'Dr. Feroze A Shaheen',
            specialization: 'Prof. (Neuro Radiology) & I/c HOD',
            qualification: 'MBBS - University of Kashmir 1990, MD - University of Kashmir 1996',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },

        'Sheikh Riaz Rasool': {
            name: 'Dr. Sheikh Riaz Rasool',
            specialization: 'Prof. Dept of Radio Diagnosis and Imaging',
            qualification: 'MBBS - GMC Srinagar/ University of Kashmir 1992, MD GMC Jammu/ University of Kashmir 1997',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Naseer Ahmad Choh': {
            name: 'Dr. Naseer Ahmad Choh',
            specialization: 'Prof. Dept of Radio Diagnosis and Imaging',
            qualification: 'MBBS - University of Kashmir 1999, MD - University of Kashmir 2005',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Malik Mohib - ul - Haq': {
            name: 'Dr. Malik Mohib - ul - Haq',
            specialization: 'Prof. and HOD Dept. of Radiological Physics & Bio-Engineering',
            qualification: 'PhD in High Energy Physics Diploma in Radiological Physics',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Abdul Majeed Dar': {
            name: 'Dr. Abdul Majeed Dar',
            specialization: 'Prof. and HOD Dept. of Cardio Vascular Thorasic Surgery (CVTS)',
            qualification: 'MBBS - University of kashmir, MS in General Surgery, University of Kashmir, MCh, CVTS, SKIMS Deemed University 1998',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Farooq Ahmad Ganie': {
            name: 'Dr. Farooq Ahmad Ganie',
            specialization: 'Associate Prof. Dept. of Cardio Vascular Thorasic Surgery (CVTS)',
            qualification: 'MBBS - Asfendiyarov Kazakh National Medical University, Almaty, MS - General Surgery SKIMS, MCh CVTS SKIMS Deemed University',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Aijaz Ahmad Malik': {
            name: 'Dr. Aijaz Ahmad Malik',
            specialization: 'Prof. General & Minimal Invasive Surgery (Endocrine & Breast Surgery Division) Head of department',
            qualification: 'MBBS - GMC Srinagar, MS; FAIS; FMAS; MAMS; FIAGES; FACS',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Fazlul Qadir Parray': {
            name: 'Dr. Fazlul Qadir Parray',
            specialization: 'Prof. General & Minimal Invasive Surgery (Colorectal surgery Division)',
            qualification: 'MBBS - GMC Srinagar, MS - SKIMS Deemed University',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Rauf Ahmad Wani': {
            name: 'Dr. Rauf Ahmad Wani',
            specialization: 'Prof. General & Minimal Invasive Surgery (Colorectal surgery Division)',
            qualification: 'MBBS - GMC Srinagar, MS - SKIMS Deemed University, MRCS, Royal College Of Surgeon (Edinburgh) 2006',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Mubashir Shah': {
            name: 'Dr. Mubashir Shah',
            specialization: 'Prof. General & Minimal Invasive Surgery (Upper GI, Hepatobiliary & Pancreatic Division)',
            qualification: 'MBBS - GMC Srinagar, MS - SKIMS Deemed University',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Munir Ahmad Wani': {
            name: 'Dr. Munir Ahmad Wani',
            specialization: 'Prof. General & Minimal Invasive Surgery (Breast & Endocrine Division)',
            qualification: 'MBBS - GMC Srinagar, MS - SKIMS Deemed University',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Natasha Thakur': {
            name: 'Dr. Natasha Thakur',
            specialization: 'Associate Prof. (General & Minimal Surgery)',
            qualification: 'MBBS - Dr. B.R. Ambedkar Medical College, MS: SMGS Hospital Jammu',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },

        'Sarbjit Singh Chhiber': {
            name: 'Dr. Sarbjit Singh Chhiber',
            specialization: 'Prof. And Head Neurosurgery',
            qualification: 'MBBS - GMC Srinagar 1997, MS - PGIMER Chandigarh 2001, MCh PGIMER Chandigarh 2005',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Abrar Ahad Wani': {
            name: 'Dr. Abrar Ahad Wani',
            specialization: 'Prof. & Head Unit 2',
            qualification: 'MBBS - GMC Srinagar 1998, MS - General Surgery SKIMS 2002, MCh, Neurosurgery',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Nayil Khurshid Malik': {
            name: 'Dr. Nayil Khurshid Malik',
            specialization: 'Prof. Dept. of Neurosurgery',
            qualification: 'MBBS - GMC Srinagar, MS in General Surgery NIMHANS Bangalore, MCh Neurosurgery, PDF Cerebrovascular Surgery SCTIMST Kerala',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Nisar Ahmad Bhat': {
            name: 'Dr. Nisar Ahmad Bhat',
            specialization: 'Prof. & Head Dept. of Paediatric Surgery',
            qualification: 'MBBS - GMC Srinagar 1989, MS - SKIMS Deemed University 1995, MCh AIMS New Delhi 2001, DNB National Board 2002',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Aejaz Ahsan Baba': {
            name: 'Dr. Aejaz Ahsan Baba',
            specialization: 'Prof. Dept of Paediatric Surgery',
            qualification: 'MBBS - GMC Srinagar 1993, MS - SKIMS srinagar 2000, MCh AIMS New Delhi 2008',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Gowhar Nazir Mufti': {
            name: 'Dr. Gowhar Nazir Mufti',
            specialization: 'Additional Prof. Dept of Paediatrics surgery',
            qualification: 'MBBS - GMC Srinagar 2003, MS General Surgery SKIMS, MCh Paediatrics Surgery MAMC New Delhi 2010, DNB Pardiatric Surgery National Board Of Examination 2011',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Raashid Hamid': {
            name: 'Dr. Raashid Hamid',
            specialization: 'Associate Prof. Dept of Paediatric Surgery',
            qualification: 'MBBS - SKIMS 2006, MS General Surgery SKIMS 2009, MCh Paediatric Surgery SKIMS Deemed University 2015',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Adil Hafeez Wani': {
            name: 'Dr. Adil Hafeez Wani',
            specialization: 'Prof. & Head of Deparment',
            qualification: 'MBBS - SKIMS 2006, MS General Surgery SKIMS 2009, MCh Paediatric Surgery SKIMS Deemed University 2016',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Sheikh Adil Bashir': {
            name: 'Dr. Sheikh Adil Bashir',
            specialization: 'Prof. Dept of Plastic Surgery',
            qualification: 'MBBS - SKIMS 2006, MS General Surgery SKIMS 2009, MCh Paediatric Surgery SKIMS Deemed University 2017',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Haroon Rashid Zargar': {
            name: 'Dr. Haroon Rashid Zargar',
            specialization: 'Prof. Dept of Plastic Surgery',
            qualification: 'MBBS - SKIMS 2006, MS General Surgery SKIMS 2009, MCh Paediatric Surgery SKIMS Deemed University 2018',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Altaf Rasool': {
            name: 'Dr. Altaf Rasool',
            specialization: 'Prof. Dept of Plastic Surgery',
            qualification: 'MBBS - 1997 MS in General Surgery 2002, MCh in Plastic Surgery 2008',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Mir Mohsin': {
            name: 'Dr. Mir Mohsin',
            specialization: 'Additional Prof. Dept of Plastic Surgery',
            qualification: 'MBBS - 2001, MS in General Surgery 2006, MCh in Plastic Surgery 2010',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },

        'Akram Hussain Bijli': {
            name: 'Dr. Akram Hussain Bijli',
            specialization: 'Associate Prof. Dept of Plastic Surgery',
            qualification: 'MBBS - 1998, MS in General Surgery 2004, MCh in Plastic Surgery 2010',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Peerzada Umer Farooq': {
            name: 'Dr. Peerzada Umer Farooq',
            specialization: 'Additional Prof. Dept of Plastic Surgery',
            qualification: 'MBBS - 2002, MS in General Surgery 2007, MCh in Plastic Surgery 2010',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Mir Yasir': {
            name: 'Dr. Mir Yasir',
            specialization: 'Assistant Prof. Dept of Plastic Surgery',
            qualification: 'MBBS - 2007, MS in General Surgery 2011, MCh in Plastic Surgery 2016',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Mohammad Younis Bhat': {
            name: 'Dr. Mohammad Younis Bhat',
            specialization: 'Assistant Prof. Dept of Surgical Gastroenterology',
            qualification: 'MBBS - GMC Srinagar 2003, MS in General Surgery SKIMS 2007, DNB in Surgical Gastroenterology - National Board of Examination New Delhi 2016',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'M. Riyaz Lattoo': {
            name: 'Dr. M. Riyaz Lattoo',
            specialization: 'Assistant Prof. Dept of Surgical Gastroenterology',
            qualification: 'MBBS - GMC Jammu 2004, MS in General Surgery SKIMS 2008, DNB in Surgical Gastroenterology - National Board of Examination 2016',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Bhat Arif Hamid': {
            name: 'Dr. Bhat Arif Hamid',
            specialization: 'Prof. & HOD Dept of Urology',
            qualification: 'MBBS, MS, MCh',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Abdul Rouf Khawja': {
            name: 'Dr. Abdul Rouf Khawja',
            specialization: 'Additional Prof. Dept of Urology',
            qualification: 'MBBS, MS, MCh',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },

        'Malik Sajad Ahmad': {
            name: 'Dr. Malik Sajad Ahmad',
            specialization: 'Associate Prof. Dept of Urology',
            qualification: 'MBBS, MS, MCh',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Saqib Mehdi': {
            name: 'Dr. Saqib Mehdi',
            specialization: 'Assistant Prof. Dept of Urology',
            qualification: 'MBBS, MS, MCh',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Mohammad Ashraf Bhat': {
            name: 'Dr. Mohammad Ashraf Bhat',
            specialization: 'Prof. & HOD Dept of Nephrology',
            qualification: 'MBBS - University of Rajasthan, MD Internal Medicine SKIMS 1995',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Muzaffar Maqsood Wani': {
            name: 'Dr. Muzaffar Maqsood Wani',
            specialization: 'Prof. Dept of Nephrology',
            qualification: 'MBBS - University of Kashmir, MD SKIMS, DM AIMS Delhi',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Imtiyaz Ahmad Wani': {
            name: 'Dr. Imtiyaz Ahmad Wani',
            specialization: 'Prof. Dept of Nephrology',
            qualification: 'MBBS - University of Kashmir, MD Internal Medicine SKIMS, DM Nephrology',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Javid Rasool Bhat': {
            name: 'Dr. Javid Rasool Bhat',
            specialization: 'Prof. & HOD Clinical Haematology',
            qualification: 'MBBS MD',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Shariq Rashid Masoodi': {
            name: 'Dr. Shariq Rashid Masoodi',
            specialization: 'Prof. & HOD',
            qualification: 'MBBS - GMC Srinagar 1987, MD - SKIMS 1993, DM in Endocrinology, PGI Chandigarh 2003',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'MOHD Ashraf Ganie': {
            name: 'Dr. MOHD Ashraf Ganie',
            specialization: 'Prof. Dept of Endocrinology',
            qualification: 'MBBS - GMC Srinagar 1993, MD, SKIMS 1998, DM, AIMS New Delhi 2003',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Arshid Iqbal Wani': {
            name: 'Dr. Arshid Iqbal Wani',
            specialization: 'Prof. Dept of Endocrinology',
            qualification: 'MBBS - GMC Srinagar 1990, MD SKIMS 1996',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Mir Iftikhar Bashir': {
            name: 'Dr. Mir Iftikhar Bashir',
            specialization: 'Prof. Dept of Endocrinology',
            qualification: 'MBBS - GMC Srinagar 1990, MD GMC 1996',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Misger Raiz Ahmad': {
            name: 'Dr. Misger Raiz Ahmad',
            specialization: 'Additional Prof. Dept of Endocrinology',
            qualification: 'MBBS - GMC Srinagar 1997, MD SKIMS Deemed University 2001, DM in Endocrinology IPGMER 2011',
            location: 'SKIMS Soura Srinagar J&K',
            locationLink: 'https://maps.app.goo.gl/gUZxmJgH6kb99bhi7'
        },
        'Abid Hussain': {
            name: 'Dr. Abid Hussain',
            specialization: 'Cardiologist',
            qualification: 'MBBS, MD, DNB (Cardiology)',
            location: 'SMHS Hospital Srinagar',
            locationLink: 'https://maps.app.goo.gl/HGVCo9mMtYcsjdgg7'
        },
        'Bilqees Jan': {
            name: 'Dr. Bilqees Jan',
            specialization: 'General Physician',
            qualification: 'MBBS Govt. Medical College Srinagar 1997',
            location: 'SMHS Hospital Srinagar',
            locationLink: 'https://maps.app.goo.gl/HGVCo9mMtYcsjdgg7'
        },
        'Javaid Qadri': {
            name: 'Dr. Javaid Qadri',
            specialization: 'Urologist',
            qualification: 'DNB (Diploma in National Board)',
            location: 'SMHS Hospital Srinagar',
            locationLink: 'https://maps.app.goo.gl/HGVCo9mMtYcsjdgg7'
        },

        'A Khaliq': {
            name: 'Dr. A Khaliq',
            specialization: 'Rheumatologist',
            qualification: 'MBBS, MD, MIRA',
            location: 'SMHS Hospital Srinagar',
            locationLink: 'https://maps.app.goo.gl/HGVCo9mMtYcsjdgg7'
        },
        'Asif Iqbal': {
            name: 'Dr. Asif Iqbal',
            specialization: 'Braces and Orthodontics',
            qualification: 'BDS, MDS (PGI Chandigarh)',
            location: 'SMHS Hospital Srinagar',
            locationLink: 'https://maps.app.goo.gl/HGVCo9mMtYcsjdgg7'
        },
        'Ghulam Hassan Malik': {
            name: 'Dr. Ghulam Hassan Malik',
            specialization: 'Nephrologist',
            qualification: 'MBBS',
            location: 'SMHS Hospital Srinagar',
            locationLink: 'https://maps.app.goo.gl/HGVCo9mMtYcsjdgg7'
        },
        'Munner AH Bhat': {
            name: 'Dr. Munner AH Bhat',
            specialization: 'General Physician',
            qualification: 'MBBS - GMC Sgr, PGDHHM - SKIMS',
            location: 'SMHS Hospital Srinagar',
            locationLink: 'https://maps.app.goo.gl/HGVCo9mMtYcsjdgg7'
        },
        'Naeemul Zafar Gillani': {
            name: 'Dr. Naeemul Zafar Gillani',
            specialization: 'Surgeon',
            qualification: 'MBBS',
            location: 'SMHS Hospital Srinagar',
            locationLink: 'https://maps.app.goo.gl/HGVCo9mMtYcsjdgg7'
        },
        'Shahnawaz Ahmad': {
            name: 'Dr. Shahnawaz Ahmad',
            specialization: 'General Physician',
            qualification: 'MBBS',
            location: 'SMHS Hospital Srinagar',
            locationLink: 'https://maps.app.goo.gl/HGVCo9mMtYcsjdgg7'
        },
        'Syed Najma': {
            name: 'Dr. Syed Najma',
            specialization: 'Gynaecologist',
            qualification: 'MBBS, DGO, DNB, MD',
            location: 'SMHS Hospital Srinagar',
            locationLink: 'https://maps.app.goo.gl/HGVCo9mMtYcsjdgg7'
        },
        'Syed Sajad Nazir': {
            name: 'Dr. Syed Sajad Nazir',
            specialization: 'Urologist',
            qualification: 'MBBS, MS',
            location: 'SMHS Hospital Srinagar',
            locationLink: 'https://maps.app.goo.gl/HGVCo9mMtYcsjdgg7'
        },
        'Umeek Jeelani': {
            name: 'Dr. Umeek Jeelani',
            specialization: 'ENT Specialist',
            qualification: 'MBBS, MS, ENT',
            location: 'SMHS Hospital Srinagar',
            locationLink: 'https://maps.app.goo.gl/HGVCo9mMtYcsjdgg7'
        },
        'A.R. Rather': {
            name: 'Dr. A.R. Rather',
            specialization: 'Surgeon',
            qualification: 'MS in Surgery',
            location: 'SMHS Hospital Srinagar',
            locationLink: 'https://maps.app.goo.gl/HGVCo9mMtYcsjdgg7'
        },
        'Aadil Beigh': {
            name: 'Dr. Aadil Beigh',
            specialization: 'Nephrologist',
            qualification: 'MD (Medicine), DNB (Nephrology)',
            location: 'SMHS Hospital Srinagar',
            locationLink: 'https://maps.app.goo.gl/HGVCo9mMtYcsjdgg7'
        },
        'Abdul Rashid Lone': {
            name: 'Dr. Abdul Rashid Lone',
            specialization: 'Surgeon',
            qualification: 'MBBS, MS, FICS',
            location: 'SMHS Hospital Srinagar',
            locationLink: 'https://maps.app.goo.gl/HGVCo9mMtYcsjdgg7'
        },
        'Aaliya Rashid': {
            name: 'Dr. Aaliya Rashid',
            specialization: 'Ophthalmologist',
            qualification: 'DOMS',
            location: 'SMHS Hospital Srinagar',
            locationLink: 'https://maps.app.goo.gl/HGVCo9mMtYcsjdgg7'
        },
        'Aashaq Hussain': {
            name: 'Dr. Aashaq Hussain',
            specialization: 'Urologist',
            qualification: 'MBBS, MS, Mch',
            location: 'SMHS Hospital Srinagar',
            locationLink: 'https://maps.app.goo.gl/HGVCo9mMtYcsjdgg7'
        },
        'AB. Maajid': {
            name: 'Dr. AB. Maajid',
            specialization: 'Psychiatrist',
            qualification: 'MBBS, MS',
            location: 'SMHS Hospital Srinagar',
            locationLink: 'https://maps.app.goo.gl/HGVCo9mMtYcsjdgg7'
        },
        'Abbas': {
            name: 'Dr. Abbas',
            specialization: 'General Physician',
            qualification: 'BUMS',
            location: 'SMHS Hospital Srinagar',
            locationLink: 'https://maps.app.goo.gl/HGVCo9mMtYcsjdgg7'
        },
        'Abdul Qayoom Shah': {
            name: 'Dr. Abdul Qayoom Shah',
            specialization: 'Gynaecologist',
            qualification: 'MBBS, MD',
            location: 'SMHS Hospital Srinagar',
            locationLink: 'https://maps.app.goo.gl/HGVCo9mMtYcsjdgg8'
        },





    };
function openProfile(profileId) {

    const profile = profiles[profileId];
    if (profile) {
        document.getElementById('modalTitle').innerText = profile.name;
        document.getElementById('modalSpecialization').innerText = 'Specialization: ' + profile.specialization;
        document.getElementById('modalQualification').innerText = 'Qualification: ' + profile.qualification;
        document.getElementById('modalLocation').innerText = 'Location: ' + profile.location;
        document.getElementById('modalPhone').innerText = 'Phone number: ' + profile.phone;
        document.getElementById('modalFee').innerText = 'Consultation Fee: ' + profile.fee;
        document.getElementById('modalAvailability').innerText = 'Availability: ' + profile.availability;
        document.getElementById('modalLocationLink').href = profile.locationLink;
        document.getElementById('modalLocationLink').innerText = 'View on Map';
        document.getElementById('doctorModal').style.display = 'block';
    } else {
        console.error('Profile not found for:', profileId);
    };


    const govt_profile = govt_profiles[profileId];
    if (govt_profile) {
        document.getElementById('modalTitleGovt').innerText = govt_profile.name;
        document.getElementById('modalSpecializationGovt').innerText = 'Specialization: ' + govt_profile.specialization;
        document.getElementById('modalQualificationGovt').innerText = 'Qualification: ' + govt_profile.qualification;
        document.getElementById('modalLocationGovt').innerText = 'Location: ' + govt_profile.location;
        document.getElementById('modalLocationLinkGovt').href = govt_profile.locationLink;
        document.getElementById('modalLocationLinkGovt').innerText = 'View on Map';
        document.getElementById('doctorModalGovt').style.display = 'block';
    } else {
        console.error('Profile not found for:', profileId);
    };

};
    
function closeModal() {
    document.getElementById('doctorModal').style.display = 'none';
    document.getElementById('doctorModalGovt').style.display = 'none';
}

function filterDoctors() {  
    var nameInput = document.getElementById('searchInput').value.toLowerCase();  
    var specializationInput = document.getElementById('specializationFilter').value; 
    var categoryInput = document.getElementById('categoryFilter').value;


    let govt_doc = Object.values(govt_profiles)
    let pri_doc = Object.values(profiles)
    // let filteredDoctors = [...Object.values(profiles), ...Object.values(govt_profiles)]; // Convert object to array  
    let filteredDoctors = [...pri_doc, ...govt_doc]; 
    // Filter by name  
    if (nameInput) {  
        filteredDoctors = filteredDoctors.filter(doctor =>   
            doctor.name.toLowerCase().includes(nameInput)  
        );  
    }  

    if (specializationInput && categoryInput)
        if (categoryInput === "Private"){
            filteredDoctors = pri_doc.filter(doctor =>  
                doctor.specialization === specializationInput  
            ); 
        } else if (categoryInput === "Government") {
            filteredDoctors = govt_doc.filter(doctor =>  
                doctor.specialization === specializationInput 
            );
        }

    // Filter by specialization  
    if (specializationInput) {  
        filteredDoctors = filteredDoctors.filter(doctor =>  
            doctor.specialization === specializationInput  
        );  
    } 

    if (filteredDoctors.length === 0) {  
        alert("No such doctor found.");  
        return; // Exit the function if no doctor is found  
    }  


    // Display results  
    displayResults(filteredDoctors);  
}  

function displayResults(doctors) {  
    const resultsDiv = document.getElementById('search-doc');  
    resultsDiv.innerHTML = ''; // Clear previous results  

    if (doctors.length === 0) {  
        resultsDiv.innerHTML = '<p>No doctors match your search criteria.</p>';  
        return;  
    }  

    doctors.forEach(doctor => {  
        const doctorInfo = document.createElement('div');  
        doctorInfo.innerHTML = `  
            <strong>${doctor.name}</strong><br>  
            Specialization: ${doctor.specialization}<br>  
            Qualification: ${doctor.qualification}<br>  
            Phone: ${doctor.phone}<br>  
            Fee: ${doctor.fee}<br>  
            Availability: ${doctor.availability}<br>  
            Location: <a href="${doctor.locationLink}" target="_blank">${doctor.location}</a><br>  
            <hr>  
        `;  
        resultsDiv.appendChild(doctorInfo);  
    });  
}
