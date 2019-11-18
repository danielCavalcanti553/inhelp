package model;

public class Usuario {

    private long uid;
    private String nome;
    private String email;
    private String pws;
    private boolean ativo;
    private TipoUsuario tipo;

    public Usuario() {
        ativo = true;
        tipo = new TipoUsuario();
    }

    public long getUid() {
        return uid;
    }

    public void setUid(long uid) {
        this.uid = uid;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPws() {
        return pws;
    }

    public void setPws(String pws) {
        this.pws = pws;
    }

    public boolean isAtivo() {
        return ativo;
    }

    public void setAtivo(boolean ativo) {
        this.ativo = ativo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public TipoUsuario getTipo() {
        return tipo;
    }

    public void setTipo(TipoUsuario tipo) {
        this.tipo = tipo;
    }
    

}
