import JSEncrypt from 'jsencrypt';
import React from 'react';
//import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './SerchCard.css'
import fakeData from "../../../Dummy/fakeData.json";


const SearchCard = props => { 

    var privateKey = `
    -----BEGIN RSA PRIVATE KEY-----
MIIEoQIBAAKCAQB3bSZdzmetXrDAtVBJwhsVwIekzJo/n3U9cGGUreAipACwv5i9
mijvLzqtyhxFTIFuViYLK0l+xl5tdxqwqZTd5A3XL691FLFEmxnrQYiQRYxPS/aM
jLK5RcjZGScPKJp4YmVfXtEQrshFYosJ0qgF/lzoLH6kJpOYGSJnzvtLyi/2yrPY
GvpiWgZze4BxeSBZ0hR7YPC6fR3h8w9ai+vMUaAPTRQQxzUWln9Z1HU9sJGGwTF2
GXlCGUjbSdTSbmi57i1lGOQI+c+0jW1nNBQeUSLmsB4V4MG2Vb/NkRKi93mSElP6
gqjqzyZOjbgXEw4p8GCLnBSJAYqJwInMZRdPAgMBAAECggEAN/EmFqz3/cssSqjk
GhjVrSPJplW9L25Xcdcxrn6gTjm6pRCq0K3k3N2nw/63rXJ/8ppiKbs2Ky9qziYL
l5NoS2RnY1RQAS0XOIba5kuFV+dsKTzxGbdShNz+j0tr83rWmOumhr0Ye5MT9wSJ
Eqnd0SjshklJbUUwv/+OEUhwiHhhxzfWxHnI+g9SoLCjYt2wYC2tdfmqHKpfPvCr
Q7Aor84eGJofKp4LKs+Sg0otEJrgtPAibRlvocGUBNgTP3kGmEXV5WHlYbypmUTM
YCnnbpeYpGaQp9dxUDca68eqc1eblz6HGmkRyYC5SdP1wz2jVBn8JVzkDXNww7/c
Wx5JqQKBgQDBcxIBOG1RiS/IPkXaT47X2goFwXYD+1cGQXqI3tIMkZUxR4g57zdp
AnVdzjHbKQX8jU0fKuQi3Ac9qICTVJqAHTNfDVbJXdlJSbHK8SQthLhsKt1gy/Gz
GURqAPlifloP0fy3x/gP9LtxJcFEf8Ah858qhSQa7jKM8qpovyd8TQKBgQCeCsI2
c/Ggk8gg54VaUXBOXvVmXTHlx+R03OvRsKih0BCVLxZ311FKIfdO3oca6YuxCWyJ
zGw+cokcP4knJNkWLJl3FNKRQKmIWCRP8DwmrEi5TViQUkOBVAGF8P7wp1qRZTRi
+bni8t7bSgcR7DQfNSFmuwzU5ts/RnFZUt3ACwKBgGL18MH7EcFiQrVXVfimNlap
zfK/0xWaYBxtJrgZ9K5FU2MQStoIS/pGLbA9KTgKNmvKBSfqkyZaFMIwDwZPg3IC
fiMj+b+taNibAH7m+TDn8kgzbWh1LEIIrPzlXq5KINxy+asyeu3+rlzliYb3K1yy
+juQPLYiIG4GPbK0BwkJAoGAMunyYUp+6CVTzs3nVw5vaMAMvLp/TbBU+BUH35jS
6rY18WmnClqSdJh2rLDhw5jDiPgpQEdcA84wP6p0S+kCCrO5iPRrVaIIO8VxhVM2
fZr5HsE9K9lkp/BhQT4/U1YGxlpdQxmCeguWIf06Q9rde8RJC2htHNV2gm72KzmX
+LsCgYBBXUmHhNRTulHXw7LFXcrYLxHUrMzEaGsqIKCE7Ul7YxyL31w/41s0EopK
NtfJPymGKK/kJZqFz5aU8R35em9YpplhRONnWjmjrjejGPXMpC5eH7rN9hTiYHip
YtIIWD8eFI1iEUim2LKFbCjaK+tw4mGhXFdLH3He9H32HNLTpw==
-----END RSA PRIVATE KEY-----`


  const decrypt=event=>
  {

    event.preventDefault();
  
    console.log(fakeData.temperature);
    
    var decrypt = new JSEncrypt();
    decrypt.setPrivateKey(privateKey);
    var uncrypted = decrypt.decrypt(fakeData.temperature);
    var splittedUnencrypted= uncrypted.split(", ");
    var numericalSplittedUnencrypted = splittedUnencrypted.map(x=> Number(x));
    console.log(numericalSplittedUnencrypted);
    console.log(fakeData.timeStamps);

    props.onSearchParcel({
      title:'Invalid Input',
      message: 'Age must be greater than 1',
      reaction: 'Got it'
  });

  props.onGetNodeDetails({
    title:'ROYAL OSCIETRA CAVIAR',
    location:'Train Cargo, ICE 772, Frankfurt',
    temperature: numericalSplittedUnencrypted,
    timeStamps: fakeData.timeStamps
  })

  }
  return (
    <form >
      <div className={`${styles['form-control']}`}>
        <input placeholder='Enter Parcel Tracking Id' type="text"/>
      </div>
      <Button onClick={decrypt} type="submit">Search Parcel</Button>
    </form>
  );
};

export default SearchCard;
