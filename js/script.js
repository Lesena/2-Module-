var base = prompt('������� �����', 100);
var exponent = prompt('������� �������', 100);

function pow(base, exponent) {
var res=base;
 for(var i=1;i<exponent; i++){
     res*=base;
 }
 
  return res;
}

alert(pow(base,exponent));
if (exponent <= 1) {
 
  console.log('������� �� ��������������, ������� ����� �������, ������� 1 ',exponent);
} else {
 
  console.log('==',pow(base,exponent));
}


var c=[];
var N=prompt('������� ����� ��������� �������:',1); //������ ����� ��������� �������
for(var i=0;i < N;i++)
    {
        C[i] = prompt('������� C['+i+']',0); //��������� ������
    }
 for(i=0;i<N;i++){
        if()
        console.log('C['+i+']='+C[i]+'</br>'); //�������
    }
var name_user = prompt('������� ��� ������������', 100);
 
function find(c, name_user){
  for( var i=0;i<c.length;i++){
     if(c[i]===name_user)
	 alert(c[i]+'�� ������� �����')
	 return i;
  }
  alert('��������� ��� ������������ �� ���������� � �������');
  return -1;
}